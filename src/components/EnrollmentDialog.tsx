import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  programmeTitle: string;
  programmeSlug: string;
}

const EnrollmentDialog = ({ open, onOpenChange, programmeTitle, programmeSlug }: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individual" as "individual" | "company",
    companyName: "",
    participants: 1,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      enrollment_type: form.type,
      company_name: form.type === "company" ? form.companyName.trim() : null,
      participants_count: form.type === "company" ? form.participants : 1,
      programme_slug: programmeSlug,
      source: "enrollment" as const,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Enrollment submitted! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", type: "individual", companyName: "", participants: 1 });
      onOpenChange(false);
    }
  };

  const set = (key: string, value: string | number) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Enroll Now</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {programmeTitle}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input placeholder="Full Name *" value={form.name} onChange={(e) => set("name", e.target.value)} required />
          <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => set("email", e.target.value)} required />
          <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />

          <div>
            <p className="text-sm font-medium text-primary mb-2">I am enrolling as:</p>
            <RadioGroup value={form.type} onValueChange={(v) => set("type", v)} className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="individual" />
                <span className="text-sm">Individual</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <RadioGroupItem value="company" />
                <span className="text-sm">Company / Organization</span>
              </label>
            </RadioGroup>
          </div>

          {form.type === "company" && (
            <>
              <Input placeholder="Company / Organization Name" value={form.companyName} onChange={(e) => set("companyName", e.target.value)} />
              <Input type="number" min={1} placeholder="Number of Participants" value={form.participants} onChange={(e) => set("participants", parseInt(e.target.value) || 1)} />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Enrollment"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentDialog;
