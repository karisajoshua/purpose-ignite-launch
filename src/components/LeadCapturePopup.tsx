import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const STORAGE_KEY = "lc_lead_popup_shown";

const LeadCapturePopup = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered || sessionStorage.getItem(STORAGE_KEY)) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Exit intent (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Scroll depth 60%
    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent > 0.6) trigger();
    };

    // Time on page 30s
    const timer = setTimeout(trigger, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      source: "popup" as const,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Thank you! We'll be in touch.");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl">Get a Free Leadership Assessment</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Leave your details and we'll send you a complimentary leadership assessment guide — plus updates on upcoming programmes.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Get My Free Guide"}
          </button>
          <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;
