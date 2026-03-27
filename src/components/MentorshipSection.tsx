import { Compass, Brain, Target, MessageSquare, Briefcase, Crown, CheckCircle2 } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Self-Discovery & Purpose", desc: "Clarify your identity, values, and calling." },
  { icon: Brain, title: "Personal Leadership & Growth", desc: "Develop mindset, emotional intelligence, and resilience." },
  { icon: Target, title: "Vision, Goals & Execution", desc: "Turn vision into reality through structured goal-setting." },
  { icon: MessageSquare, title: "Communication & Influence", desc: "Strengthen your voice and learn to communicate with impact." },
  { icon: Briefcase, title: "Career, Business & Financial Growth", desc: "Gain tools to grow your career or business with intention." },
  { icon: Crown, title: "Leadership & Impact", desc: "Step into purposeful leadership and create meaningful change." },
];

const howItWorks = [
  "Cohort-Based Experience — Journey with a select group in a focused learning environment.",
  "Live Interactive Sessions — Engaging sessions by experienced trainers and mentors.",
  "Mentorship Circles — Small group engagements for personalized guidance.",
  "Practical Application — Structured reflections and action steps for real-life results.",
  "Exposure to Leaders & Mentors — Learn from diverse voices and industry leaders.",
];

const MentorshipSection = () => (
  <section id="mentorship" className="section-navy py-24">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
          Limitless Mentorship Programme
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">
          Unlock Your Purpose. Lead with Clarity.
        </h2>
        <p className="max-w-3xl mx-auto text-muted/80 leading-relaxed">
          A transformational, cohort-based leadership journey designed to equip individuals with clarity of purpose,
          strengthened personal leadership capacity, and practical tools to thrive.
        </p>
      </div>

      {/* 6 Pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {pillars.map((p) => (
          <div key={p.title} className="border border-secondary/20 p-8 card-lift">
            <p.icon className="w-8 h-8 text-secondary mb-4" strokeWidth={1.5} />
            <h4 className="font-heading text-lg font-bold text-secondary mb-2">{p.title}</h4>
            <p className="text-sm text-muted/70 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
        <div>
          <h3 className="text-2xl md:text-3xl text-secondary mb-8">How the Programme Works</h3>
          <div className="space-y-4">
            {howItWorks.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-secondary mt-1 shrink-0" strokeWidth={1.5} />
                <p className="text-muted/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl text-secondary mb-8">Who This Is For</h3>
          <ul className="space-y-3">
            {[
              "Emerging leaders seeking clarity and growth",
              "Young professionals ready to step into leadership",
              "Entrepreneurs building with purpose",
              "Individuals navigating career or life transition",
              "Anyone ready to unlock their purpose",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted/80 text-sm">
                <span className="w-1.5 h-1.5 bg-secondary mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-8 border border-secondary/30">
            <h4 className="font-heading text-lg font-bold text-secondary mb-2">Certification</h4>
            <p className="text-sm text-muted/70 leading-relaxed">
              Upon completion, earn the <strong className="text-secondary">Limitless Certified Leadership Fellow</strong> designation—
              a mark of transformation, growth, and readiness to lead with purpose.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contact"
          className="inline-block px-12 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
        >
          Apply Now
        </a>
        <p className="text-muted/60 text-sm mt-4">Enrollment is application-based. Spaces are limited.</p>
      </div>
    </div>
  </section>
);

export default MentorshipSection;
