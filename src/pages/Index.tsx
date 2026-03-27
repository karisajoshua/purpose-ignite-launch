import { Link } from "react-router-dom";
import { ArrowRight, Users, Presentation, BookOpen, Megaphone, BarChart3, Lightbulb, Eye, Target, TrendingUp, Shield, Scale, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import g1 from "@/assets/gallery/gallery-1.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />

    {/* About Brief */}
    <section id="about" className="section-white py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">About Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
            Built on GRIT. Driven by Purpose.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Limitless Communications Limited is a premier consultancy firm specializing in leadership development,
            organizational capacity building, and transformative learning. We connect, empower, and transform
            individuals and organizations to achieve measurable results.
          </p>
          <p className="font-heading text-xl italic text-primary font-semibold">
            #WeConnectEmpowerTransform
          </p>
        </div>
        <div className="relative">
          <img src={gallery4} alt="Limitless team at work" className="w-full h-[400px] object-cover" loading="lazy" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary" />
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="section-navy py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {[
          { icon: Eye, title: "Our Vision", text: "To be a leading force in transformational leadership and capacity building across Africa and beyond." },
          { icon: Target, title: "Our Mission", text: "To connect, empower, and transform individuals, teams, and organizations through world-class consultancy, training, mentorship, and strategic communications." },
        ].map((item) => (
          <div key={item.title} className="border border-secondary/30 p-10 card-lift">
            <item.icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} />
            <h3 className="text-2xl mb-4 text-secondary">{item.title}</h3>
            <p className="leading-relaxed text-muted/80">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* GRIT Framework */}
    <section className="section-muted py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Foundation</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">The GRIT Framework</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: TrendingUp, title: "Growth", desc: "Continuous personal and organizational development." },
            { icon: Shield, title: "Resilience", desc: "The capacity to adapt, recover, and thrive." },
            { icon: Scale, title: "Integrity", desc: "Building trust and accountability consistently." },
            { icon: Zap, title: "Transformation", desc: "Driving meaningful, lasting change." },
          ].map((p) => (
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

    {/* Programmes Brief */}
    <section id="programmes" className="section-white py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Limitless Leadership Academy</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Management & Leadership Development</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Comprehensive programmes designed to build leadership capacity at every level—from supervisory to executive leadership.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {["Leadership by Level Programmes", "Functional Excellence Programmes", "Specialized Programmes"].map((name) => (
            <div key={name} className="border border-border p-8 card-lift">
              <h3 className="text-lg font-heading font-bold text-primary">{name}</h3>
            </div>
          ))}
        </div>
        <Link to="/programmes" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
          View All Programmes <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Mentorship Brief */}
    <section id="mentorship" className="section-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Limitless Mentorship Programme</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">Unlock Your Purpose. Lead with Clarity.</h2>
        <p className="max-w-3xl mx-auto text-muted/80 leading-relaxed mb-10">
          A transformational, cohort-based leadership journey designed to equip individuals with clarity of purpose,
          strengthened personal leadership capacity, and practical tools to thrive.
        </p>
        <Link to="/mentorship" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    {/* Services Brief */}
    <section id="services" className="section-muted py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Our Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {[
            { icon: Users, title: "Leadership Development" },
            { icon: Presentation, title: "Corporate Training" },
            { icon: BookOpen, title: "Mentorship & Coaching" },
            { icon: Megaphone, title: "Strategic Communications" },
            { icon: BarChart3, title: "Organizational Development" },
            { icon: Lightbulb, title: "ILO SIYB Business Training" },
          ].map((s) => (
            <div key={s.title} className="bg-card border border-border p-8 card-lift group text-center">
              <s.icon className="w-10 h-10 text-secondary mb-4 mx-auto" strokeWidth={1.5} />
              <h3 className="text-lg text-primary font-heading font-bold">{s.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-secondary font-bold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors">
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Gallery Brief */}
    <section id="gallery" className="section-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Gallery</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[g1, g5, g9, g8].map((src, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square">
              <img src={src} alt="Gallery preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Contact Brief */}
    <section id="contact" className="section-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Get in Touch</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">Let's Work Together</h2>
        <p className="text-muted/80 max-w-2xl mx-auto mb-4">
          Ready to transform your leadership and organizational capacity? Reach out today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted/70 text-sm mb-8">
          <span>info.limitlessglobal@gmail.com</span>
          <span className="hidden sm:inline">|</span>
          <span>+254 756 157 885</span>
          <span className="hidden sm:inline">|</span>
          <span>Nairobi, Kenya</span>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
