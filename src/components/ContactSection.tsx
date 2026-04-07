import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Let's Work Together</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
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
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-6 py-4 border border-border bg-muted text-foreground text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
            />
            <button
              type="submit"
              className="px-12 py-4 bg-primary text-secondary font-bold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
