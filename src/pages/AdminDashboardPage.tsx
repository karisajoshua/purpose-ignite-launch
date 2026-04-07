import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { LogOut, Download, Search, Users, Mail, UserPlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company_name: string | null;
  enrollment_type: string | null;
  source: string;
  programme_slug: string | null;
  participants_count: number | null;
  message: string | null;
  created_at: string;
}

const AdminDashboardPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin");
        return;
      }
      fetchLeads();
    };
    checkAuth();
  }, [navigate]);

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Failed to load leads. You may not have admin access.");
    } else {
      setLeads(data || []);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const filtered = leads.filter((l) => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase());
    const matchSource = sourceFilter === "all" || l.source === sourceFilter;
    return matchSearch && matchSource;
  });

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Type", "Company", "Source", "Programme", "Participants", "Message", "Date"];
    const rows = filtered.map((l) => [
      l.name, l.email, l.phone || "", l.enrollment_type || "", l.company_name || "",
      l.source, l.programme_slug || "", l.participants_count || "", l.message || "",
      new Date(l.created_at).toLocaleDateString(),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: leads.length,
    enrollment: leads.filter((l) => l.source === "enrollment").length,
    popup: leads.filter((l) => l.source === "popup").length,
    contact: leads.filter((l) => l.source === "contact").length,
  };

  return (
    <div className="min-h-screen bg-muted">
      <SEO title="Admin Dashboard" description="Manage leads and enrollments." path="/admin/dashboard" />
      {/* Header */}
      <header className="bg-primary text-secondary px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-lg">Limitless Admin</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm hover:text-gold-light transition-colors">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: stats.total, icon: Users, color: "text-primary" },
            { label: "Enrollments", value: stats.enrollment, icon: UserPlus, color: "text-green-600" },
            { label: "Popup Leads", value: stats.popup, icon: Mail, color: "text-blue-600" },
            { label: "Contact Form", value: stats.contact, icon: Mail, color: "text-orange-600" },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border p-6">
              <div className="flex items-center gap-3 mb-2">
                <s.icon className={`w-5 h-5 ${s.color}`} />
                <span className="text-sm text-muted-foreground">{s.label}</span>
              </div>
              <p className="text-3xl font-bold text-primary">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="px-4 py-2 border border-border bg-card text-sm"
          >
            <option value="all">All Sources</option>
            <option value="enrollment">Enrollment</option>
            <option value="popup">Popup</option>
            <option value="contact">Contact</option>
          </select>
          <button onClick={exportCSV} className="flex items-center gap-2 px-6 py-2 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="text-center text-muted-foreground py-12">Loading leads...</p>
        ) : (
          <div className="overflow-x-auto border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted border-b border-border">
                  <th className="text-left p-3 font-medium text-primary">Name</th>
                  <th className="text-left p-3 font-medium text-primary">Email</th>
                  <th className="text-left p-3 font-medium text-primary">Phone</th>
                  <th className="text-left p-3 font-medium text-primary">Type</th>
                  <th className="text-left p-3 font-medium text-primary">Source</th>
                  <th className="text-left p-3 font-medium text-primary">Programme</th>
                  <th className="text-left p-3 font-medium text-primary">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-12 text-muted-foreground">No leads found</td></tr>
                ) : (
                  filtered.map((l) => (
                    <tr key={l.id} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3">{l.name}</td>
                      <td className="p-3">{l.email}</td>
                      <td className="p-3">{l.phone || "—"}</td>
                      <td className="p-3 capitalize">{l.enrollment_type || "—"}</td>
                      <td className="p-3">
                        <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 ${
                          l.source === "enrollment" ? "bg-green-100 text-green-700" :
                          l.source === "popup" ? "bg-blue-100 text-blue-700" :
                          "bg-orange-100 text-orange-700"
                        }`}>{l.source}</span>
                      </td>
                      <td className="p-3">{l.programme_slug?.replace(/-/g, " ") || "—"}</td>
                      <td className="p-3 text-muted-foreground">{new Date(l.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
