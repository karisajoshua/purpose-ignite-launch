import { Link } from "react-router-dom";
import { Users, Presentation, BookOpen, Megaphone, BarChart3, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Leadership Development",
    tagline: "Raising leaders who lead with purpose and deliver impact.",
    detail: "We design and deliver tailored leadership programmes that build capacity across all levels—from emerging leaders to senior executives. Our approach focuses on developing self-aware, values-driven, and results-oriented leaders equipped to navigate complexity, inspire teams, and drive organizational success.",
  },
  {
    icon: Presentation,
    title: "Corporate Training",
    tagline: "Transforming teams into high-performing engines of excellence.",
    detail: "Our customized training and facilitation programmes are designed to enhance team effectiveness, strengthen communication, and improve performance. We deliver engaging, practical, and results-driven learning experiences that translate directly into improved workplace outcomes.",
  },
  {
    icon: BookOpen,
    title: "Mentorship & Coaching",
    tagline: "Guiding growth. Unlocking potential. Sustaining transformation.",
    detail: "Through structured mentorship and coaching, we support individuals in achieving clarity, building confidence, and unlocking their full potential. Our programmes combine guided reflection, accountability, and practical tools to ensure sustainable personal and professional growth.",
  },
  {
    icon: Megaphone,
    title: "Strategic Communications",
    tagline: "Crafting powerful narratives that connect, influence, and inspire.",
    detail: "We support organizations in strengthening their voice and visibility through strategic communication solutions. From brand positioning to stakeholder engagement, we help you communicate with clarity, authenticity, and impact.",
  },
  {
    icon: BarChart3,
    title: "Organizational Development",
    tagline: "Building strong cultures and systems that drive lasting results.",
    detail: "We partner with organizations to align culture, people, and systems for optimal performance. Our work includes organizational culture development, performance management frameworks, and change management strategies that enable long-term growth and sustainability.",
  },
  {
    icon: Lightbulb,
    title: "ILO SIYB Business Training",
    tagline: "Equipping entrepreneurs to start, grow, and sustain successful businesses.",
    detail: "As certified trainers of the internationally recognized ILO Start and Improve Your Business (SIYB) programme, we deliver practical, hands-on training for entrepreneurs and enterprises. Our approach equips participants with the knowledge, tools, and confidence to build resilient and successful businesses.",
  },
];

const ServicesSection = () => (
  <section id="services" className="section-white py-24">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">What We Do</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Our Services</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          At Limitless Communications Limited, we go beyond conventional training and consulting—we design transformational
          experiences that empower individuals, strengthen organizations, and drive sustainable impact.
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8 mb-24">
        {services.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-2 gap-0 border border-border ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
            <div className={`p-10 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <s.icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl text-primary mb-3">{s.title}</h3>
              <p className="text-secondary font-heading font-semibold italic mb-4">{s.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{s.detail}</p>
            </div>
            <div className={`bg-muted/30 p-10 md:p-14 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div className="text-center">
                <s.icon className="w-20 h-20 text-secondary/20 mx-auto" strokeWidth={0.8} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Limitless Difference */}
      <div className="section-navy py-16 px-8 md:px-16 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Why Us</p>
          <h3 className="text-2xl md:text-3xl text-secondary mb-6">The Limitless Difference</h3>
          <p className="text-muted/80 leading-relaxed mb-8">
            We believe that true transformation happens when people are empowered, systems are aligned, and purpose is clear.
            That is why we take a holistic, people-centered approach—delivering solutions that go beyond short-term results to
            create lasting impact.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Holistic, people-centered approach",
              "Practical, results-driven methodology",
              "Experienced facilitators and coaches",
              "Tailored solutions for every context",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-muted/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner With Us CTA */}
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl text-primary mb-4">Partner With Us</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you are building leaders, strengthening teams, or transforming your organization,
          Limitless Communications Limited is your partner in unlocking potential and driving meaningful change.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
        >
          Let's Work Together <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;
