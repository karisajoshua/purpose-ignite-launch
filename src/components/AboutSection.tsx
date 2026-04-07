import gallery4 from "@/assets/gallery/gallery-4.jpg";

const AboutSection = () => (
  <section id="about" className="section-white py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">About Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
          Built on GRIT. Driven by Purpose.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Limitless Communications Limited is a premier consultancy firm specializing in leadership development,
          organizational capacity building, and transformative learning. We work with corporates, entrepreneurs,
          youth, and community groups to unlock potential and drive sustainable impact.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our approach is rooted in the belief that true leadership begins from within—and is sustained
          through clarity, discipline, and aligned action. We connect, empower, and transform individuals
          and organizations to achieve measurable results.
        </p>
        <p className="font-heading text-xl italic text-primary font-semibold">
          #WeConnectEmpowerTransform
        </p>
      </div>
      <div className="relative">
        <img
          src={gallery5}
          alt="Team Collaboration"
          className="w-full h-[500px] object-cover"
          loading="lazy"
        />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary" />
      </div>
    </div>
  </section>
);

export default AboutSection;
