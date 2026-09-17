import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Presentation,
  BookOpen,
  Building2,
  Lightbulb,
  HeartHandshake,
  Eye,
  Target,
  TrendingUp,
  Handshake,
  Scale,
  Zap,
} from "lucide-react";

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ClusterCards from "@/components/ClusterCards";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";
import { clusters } from "@/data/programmes";
import aboutImg from "@/assets/about-home.jpg";
import g1 from "@/assets/gallery/gallery-1.jpg";
import g5 from "@/assets/gallery/gallery-5.jpg";
import g9 from "@/assets/gallery/gallery-9.jpg";
import g8 from "@/assets/gallery/gallery-8.jpg";

const services = [
  { icon: Users, title: "Leadership Development", description: "Raising leaders who lead with purpose and deliver impact." },
  { icon: Building2, title: "Organizational Culture Transformation", description: "Shaping cultures that empower people and drive performance." },
  { icon: Presentation, title: "Corporate Training", description: "Empowering Growth. Transforming Culture." },
  { icon: BookOpen, title: "Mentorship & Coaching", description: "Guiding Growth. Unlocking Potential, Shaping Futures." },
  { icon: Lightbulb, title: "ILO Start and Improve Your Business (SIYB) Training", description: "Equipping entrepreneurs to start, grow, and sustain successful businesses." },
  { icon: HeartHandshake, title: "Community Empowerment & Inclusion", description: "Transforming Communities. Beyond Limits." },
];

const gritPillars = [
  { icon: TrendingUp, title: "Growth", description: "Continuous personal and organizational development." },
  { icon: Handshake, title: "Respect", description: "Valuing people, perspectives, dignity, and inclusion." },
  { icon: Scale, title: "Integrity", description: "Building trust and accountability consistently." },
  { icon: Zap, title: "Transformation", description: "Driving meaningful, lasting change." },
];

const visionAndMission = [
  { icon: Eye, title: "Our Vision", text: "To be a leading force in transformational leadership and capacity building across Africa and beyond." },
  { icon: Target, title: "Our Mission", text: "To connect people to purpose, empower them with knowledge, skills and confidence, and transform individuals and organizations to move beyond perceived limitations and create meaningful, lasting impact." },
];

const galleryImages = [g1, g5, g9, g8];

const Index = () => {
  const aboutRef = useScrollReveal();
  const visionRef = useStaggerReveal(":scope > *", 200);
  const gritHeaderRef = useScrollReveal();
  const gritCardsRef = useStaggerReveal(":scope > *", 120);
  const progHeaderRef = useScrollReveal();
  const mentorshipRef = useScrollReveal();
  const servicesHeaderRef = useScrollReveal();
  const servicesCardsRef = useStaggerReveal(":scope > *", 100);
  const galleryHeaderRef = useScrollReveal();
  const galleryGridRef = useStaggerReveal(":scope > *", 120);
  const contactRef = useScrollReveal();

  return (
    <div className="scroll-smooth">
      <SEO title="Connect. Empower. Transform" description="Limitless Communications Limited is a purpose-driven consultancy and strategic partner focused on leadership development, organizational culture, capacity building, transformative learning, mentorship, and lasting impact." path="/" />
      <Navbar />
      <main>
        <HeroSection />
        <section id="about" className="section-white py-24">
          <div ref={aboutRef} className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">Built on GRIT. Driven by Purpose.</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Limitless Communications Limited is a purpose-driven consultancy and strategic partner committed to unlocking purpose, unleashing potential, transforming culture, and creating lasting, measurable impact in people, organizations, and communities.</p>
              <p className="font-heading text-xl italic text-primary font-semibold mb-8">We Connect. We Empower. We Transform.</p>
              <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline">Learn More About Us <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="relative"><img src={aboutImg} alt="Limitless team at work" className="w-full h-[400px] object-cover object-top" loading="lazy" /><div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary" /></div>
          </div>
        </section>
        <section className="section-navy py-24"><div ref={visionRef} className="container mx-auto px-4 grid md:grid-cols-2 gap-8">{visionAndMission.map((item) => <div key={item.title} className="border border-secondary/30 p-10 card-lift"><item.icon className="w-10 h-10 text-secondary mb-6" strokeWidth={1.5} /><h3 className="text-2xl mb-4 text-secondary">{item.title}</h3><p className="leading-relaxed text-muted/80">{item.text}</p></div>)}</div></section>
        <section className="section-muted py-24"><div className="container mx-auto px-4"><div ref={gritHeaderRef} className="text-center mb-16"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Foundation</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">The GRIT Framework</h2></div><div ref={gritCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">{gritPillars.map((pillar) => <div key={pillar.title} className="bg-card p-8 border border-border card-lift group text-center"><div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-secondary/40 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"><pillar.icon className="w-7 h-7" strokeWidth={1.5} /></div><h3 className="text-xl mb-3 text-primary">{pillar.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p></div>)}</div></div></section>
        <section id="programmes" className="section-white py-24"><div className="container mx-auto px-4"><div ref={progHeaderRef} className="text-center mb-16"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Limitless Leadership Academy</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Management & Leadership Development</h2><p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive programmes designed to build leadership capacity at every level—from supervisory to executive leadership.</p></div><div className="space-y-12 mb-10">{clusters.map((cluster) => <ClusterCards key={cluster.name} cluster={cluster} />)}</div><div className="text-center"><Link to="/programmes" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">View All Programmes <ArrowRight className="w-4 h-4" /></Link></div></div></section>
        <section id="mentorship" className="section-navy py-24"><div ref={mentorshipRef} className="container mx-auto px-4 text-center"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Limitless Mentorship Programme</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">Unlock Your Purpose. Lead with Clarity.</h2><p className="max-w-3xl mx-auto text-muted/80 leading-relaxed mb-10">A transformational, cohort-based leadership journey designed to equip individuals with clarity of purpose, strengthened personal leadership capacity, and practical tools to thrive.</p><Link to="/mentorship" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">Learn More <ArrowRight className="w-4 h-4" /></Link></div></section>
        <section id="services" className="section-muted py-24"><div className="container mx-auto px-4"><div ref={servicesHeaderRef} className="text-center mb-4"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">What We Do</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">Our Services</h2><p className="text-muted-foreground max-w-2xl mx-auto mb-12">Purpose-driven solutions that develop people, transform culture, strengthen organizations, and create lasting impact.</p></div><div ref={servicesCardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">{services.map((service) => <div key={service.title} className="bg-card border border-border p-8 card-lift group text-center"><service.icon className="w-10 h-10 text-secondary mb-4 mx-auto group-hover:scale-110 transition-transform" strokeWidth={1.5} /><h3 className="text-lg text-primary font-heading font-bold mb-2">{service.title}</h3><p className="text-sm text-muted-foreground italic leading-relaxed">{service.description}</p></div>)}</div><div className="text-center"><Link to="/services" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-secondary font-bold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors">Explore Services <ArrowRight className="w-4 h-4" /></Link></div></div></section>
        <section id="gallery" className="section-white py-24"><div className="container mx-auto px-4"><div ref={galleryHeaderRef} className="text-center mb-16"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Our Work</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">Gallery</h2></div><div ref={galleryGridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">{galleryImages.map((src, index) => <div key={src} className="relative group overflow-hidden aspect-square"><img src={src} alt={`Limitless gallery preview ${index + 1}`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" /></div>)}</div><div className="text-center"><Link to="/gallery" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">View Full Gallery <ArrowRight className="w-4 h-4" /></Link></div></div></section>
        <section id="contact" className="section-navy py-24"><div ref={contactRef} className="container mx-auto px-4 text-center"><p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Get in Touch</p><h2 className="text-3xl md:text-4xl lg:text-5xl text-secondary mb-4">Let's Work Together</h2><p className="text-muted/80 max-w-2xl mx-auto mb-4">Ready to transform your leadership and organizational capacity? Reach out today.</p><div className="flex flex-col sm:flex-row gap-4 justify-center text-muted/70 text-sm mb-8"><a href="mailto:info@limitlessconsultancy.co.ke" className="hover:text-secondary transition-colors">info@limitlessconsultancy.co.ke</a><span className="hidden sm:inline">|</span><a href="tel:+254756157885" className="hover:text-secondary transition-colors">+254 756 157 885</a><span className="hidden sm:inline">|</span><span>Nairobi, Kenya</span></div><Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">Contact Us <ArrowRight className="w-4 h-4" /></Link></div></section>
      </main>
      <Footer />
      <LeadCapturePopup />
    </div>
  );
};

export default Index;
