import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Corporate leadership"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-primary/75" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gold mb-6 animate-fade-up">
        Connect. Empower. Transform.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide opacity-0 animate-fade-up text-muted" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        Unlocking purpose, igniting potential, and driving measurable impact
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
        <a href="#contact" className="inline-block px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
          Work With Us
        </a>
        <a href="#programmes" className="inline-block px-10 py-4 border-2 border-secondary text-secondary font-bold text-sm tracking-widest uppercase hover:bg-secondary hover:text-secondary-foreground transition-colors">
          Explore Programmes
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
