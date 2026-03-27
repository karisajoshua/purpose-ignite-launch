import { TrendingUp, Shield, Scale, Zap } from "lucide-react";

const pillars = [
  { icon: TrendingUp, title: "Growth", desc: "Continuous personal and organizational development that drives excellence." },
  { icon: Shield, title: "Resilience", desc: "The capacity to adapt, recover, and thrive in the face of challenges." },
  { icon: Scale, title: "Integrity", desc: "Doing the right thing consistently—building trust and accountability." },
  { icon: Zap, title: "Transformation", desc: "Driving meaningful change that creates lasting, measurable impact." },
];

const GritFramework = () => (
  <section className="section-muted py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Foundation</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">The GRIT Framework</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((p) => (
          <div key={p.title} className="bg-card p-8 border border-border card-lift group text-center">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-secondary/40 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <p.icon className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl mb-3 text-primary">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GritFramework;
