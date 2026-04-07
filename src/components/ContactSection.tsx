import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      source: "contact" as const,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
    } else {
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="section-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Let's Work Together</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "info.limitlessglobal@gmail.com" },
                  { icon: Phone, text: "+254 756 157 885" },
                  { icon: MapPin, text: "Nairobi, Kenya" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                    <span className="text-muted-foreground text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-12 py-4 bg-primary text-secondary font-bold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
