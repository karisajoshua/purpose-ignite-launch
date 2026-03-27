import { Eye, Target } from "lucide-react";

const VisionMission = () => (
  <section className="section-navy py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
      {[
        {
          icon: Eye,
          title: "Our Vision",
          text: "To be a leading force in transformational leadership and capacity building across Africa and beyond—unlocking potential, igniting purpose, and creating lasting impact.",
        },
        {
          icon: Target,
          title: "Our Mission",
          text: "To connect, empower, and transform individuals, teams, and organizations through world-class consultancy, training, mentorship, and strategic communications.",
        },
      ].map((item) => (
        <div key={item.title} className="border border-secondary/30 p-10 card-lift">
          <item.icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
          <h3 className="text-2xl mb-4 text-secondary">{item.title}</h3>
          <p className="leading-relaxed text-muted/80">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default VisionMission;
