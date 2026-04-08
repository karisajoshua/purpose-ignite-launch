import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UserDashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin");
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title="Dashboard" description="Your Limitless Communications dashboard." path="/dashboard" />
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-primary">Welcome back!</h1>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 border border-border text-sm font-semibold uppercase tracking-widest hover:bg-muted transition-colors"
            >
              Sign Out
            </button>
          </div>
          <div className="bg-card border border-border p-8">
            <p className="text-muted-foreground mb-2">Signed in as</p>
            <p className="text-lg font-semibold">{user?.user_metadata?.full_name || user?.email}</p>
            <p className="text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;
