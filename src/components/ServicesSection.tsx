import { Users, Presentation, BookOpen, Megaphone, BarChart3, Lightbulb } from "lucide-react";

const services = [
  { icon: Users, title: "Leadership Development", desc: "Tailored programmes that build leadership capacity at every level." },
  { icon: Presentation, title: "Corporate Training", desc: "Customized workshops and facilitation for organizational excellence." },
  { icon: BookOpen, title: "Mentorship & Coaching", desc: "Structured mentorship journeys for personal and professional growth." },
  { icon: Megaphone, title: "Strategic Communications", desc: "Brand positioning, storytelling, and stakeholder engagement." },
  { icon: BarChart3, title: "Organizational Development", desc: "Culture alignment, performance systems, and change management." },
  { icon: Lightbulb, title: "ILO SIYB Business Training", desc: "Internationally certified entrepreneurship and business training." },
];

const ServicesSection = () => (
  <section id="services" className="section-muted py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">What We Do</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Our Services</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border p-8 card-lift group">
            <s.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <h3 className="text-xl mb-3 text-primary gold-underline">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
