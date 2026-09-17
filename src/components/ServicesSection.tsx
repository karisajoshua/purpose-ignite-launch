import { Link } from "react-router-dom";
import { Users, Presentation, BookOpen, Building2, Lightbulb, HeartHandshake, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  { icon: Users, title: "Leadership Development", tagline: "Raising leaders who lead with purpose and deliver impact.", detail: "We design and deliver tailored leadership development programmes that build leadership capacity across all levels—from emerging leaders to senior executives. We develop self-aware, intentional, values-driven, and results-oriented leaders equipped with the skills, character, and clarity to lead themselves well, develop others, navigate complexity, build high-performing teams, shape positive cultures, and lead transformation with vision and purpose. Our programmes enable leaders to influence change at every level and create lasting impact through the people and organizations they lead." },
  { icon: Building2, title: "Organizational Culture Transformation", tagline: "Shaping cultures that empower people and drive performance.", detail: "We partner with organizations to understand, shape, and transform workplace cultures to create environments that enable people to thrive and performance to flourish. Our approach aligns people, values, leadership, behaviours, and systems to build cultures that are intentional, inclusive, accountable, and performance-driven—while fostering trust, belonging, open communication, and psychological safety. Our work includes organizational culture assessment and development, values and behavioural alignment, leadership and culture transformation, psychological safety, performance management, employee engagement, and change management—enabling organizations to strengthen their internal culture, navigate change effectively, and achieve sustainable growth and lasting results." },
  { icon: Presentation, title: "Corporate Training", tagline: "Empowering Growth. Transforming Culture.", detail: "Our customized training and facilitation programmes are designed to develop people, strengthen organizational capacity, and enhance productivity and performance. We deliver engaging, practical, and results-driven learning experiences that build the knowledge, skills, and mindsets needed for individuals and teams to communicate effectively, collaborate better, adapt with confidence, and perform at their best. Through tailored programmes in leadership, team effectiveness, communication, workplace culture, people productivity, and professional development, we help organizations translate learning into stronger capabilities, healthier cultures, improved performance, and measurable results." },
  { icon: BookOpen, title: "Mentorship & Coaching", tagline: "Guiding Growth. Unlocking Potential, Shaping Futures.", detail: "We provide structured mentorship and coaching that builds clarity, confidence, capability, and the intentionality to turn potential into progress. Our Limitless Mentorship Programme equips youth and young professionals, emerging leaders, entrepreneurs, and women with the mindset, skills, guidance, and networks to navigate challenges, make purposeful decisions, strengthen their leadership, and create meaningful impact. Through structured cohorts, guided conversations, practical learning, accountability, and peer connection, we turn mentorship into a pathway for personal growth, professional development, and lasting transformation." },
  { icon: Lightbulb, title: "ILO Start and Improve Your Business (SIYB) Training", tagline: "Equipping entrepreneurs to start, grow, and sustain successful businesses.", detail: "As certified trainers of the internationally recognized ILO Start and Improve Your Business (SIYB) programme, we deliver practical, hands-on training for entrepreneurs and enterprises. Our approach equips participants with the knowledge, tools, and confidence to build resilient and successful businesses." },
  { icon: HeartHandshake, title: "Community Empowerment & Inclusion", tagline: "Transforming Communities. Beyond Limits.", detail: "We partner with communities and organizations to build capacity, strengthen voices, foster inclusion, and drive sustainable change. Through inclusive engagement, leadership development, mentorship, and targeted capacity-building initiatives, we equip individuals, community groups, and organizations—both with and without disabilities—with the knowledge, skills, confidence, and practical tools to unlock potential, participate meaningfully, and create lasting impact. Our work also advances disability inclusion, and PWD empowerment, supporting organizations to strengthen accessible, inclusive, and compliant workplace environments where everyone can participate, contribute, grow, and thrive." },
];

const ServicesSection = () => (
  <section id="services" className="section-white py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">What We Do</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">Our Services</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">Purpose-driven solutions that develop people, transform culture, strengthen organizations, and create lasting impact.</p>
      </div>
      <div className="space-y-8 mb-24">
        {services.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2 gap-0 border border-border">
            <div className={`p-10 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <s.icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl text-primary mb-3">{s.title}</h3>
              <p className="text-secondary font-heading font-semibold italic mb-4">{s.tagline}</p>
              <p className="text-muted-foreground leading-relaxed">{s.detail}</p>
            </div>
            <div className={`bg-muted/30 p-10 md:p-14 flex items-center justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <s.icon className="w-20 h-20 text-secondary/20" strokeWidth={0.8} />
            </div>
          </div>
        ))}
      </div>
      <div className="section-navy py-16 px-8 md:px-16 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Why Work With Us</p>
          <h3 className="text-2xl md:text-3xl text-secondary mb-6">The Limitless Difference</h3>
          <p className="text-muted/80 leading-relaxed mb-8">We combine purpose, people-centred practice, practical learning, and tailored solutions to help clients move from potential to measurable and sustainable impact.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Purpose-driven, people-centred approach", "Practical and results-focused learning", "Tailored solutions for each context", "Transformation designed for lasting impact"].map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" /><p className="text-muted/70 text-sm">{item}</p></div>)}
          </div>
        </div>
      </div>
      <div className="text-center"><h3 className="text-2xl md:text-3xl text-primary mb-4">Partner With Us</h3><p className="text-muted-foreground max-w-2xl mx-auto mb-8">Let us help you unlock potential, strengthen capability, transform culture, and create meaningful impact.</p><Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">Let's Work Together <ArrowRight className="w-4 h-4" /></Link></div>
    </div>
  </section>
);
export default ServicesSection;
