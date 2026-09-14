import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import SEO from "@/components/SEO";

const AboutPage = () => {
return ( <div> <SEO
     title="About Us"
     description="Learn about Limitless Communications Limited, our vision, mission, GRIT framework, and our team."
     path="/about"
   />

```
  <Navbar />

  <main className="pt-20">

    <section id="who-we-are">
      <AboutSection />
    </section>

    <section id="vision" className="section-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
          Our Vision
        </p>

        <h2 className="text-3xl md:text-4xl text-primary mb-6">
          Leading Transformation Across Africa
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          To be a leading force in transformational leadership and capacity
          building across Africa and beyond.
        </p>
      </div>
    </section>

    <section id="mission" className="section-white py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
          Our Mission
        </p>

        <h2 className="text-3xl md:text-4xl text-primary mb-6">
          Connect. Empower. Transform.
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          To connect, empower, and transform individuals, teams, and
          organizations through world-class consultancy, training,
          mentorship, and strategic communications.
        </p>
      </div>
    </section>

    <section id="grit" className="section-white py-24">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
            Our Foundation
          </p>

          <h2 className="text-3xl md:text-4xl text-primary">
            The GRIT Framework
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="border border-border p-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              Growth
            </h3>
            <p className="text-muted-foreground">
              Continuous personal and organizational development.
            </p>
          </div>

          <div className="border border-border p-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              Resilience
            </h3>
            <p className="text-muted-foreground">
              The capacity to adapt, recover, and thrive.
            </p>
          </div>

          <div className="border border-border p-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              Integrity
            </h3>
            <p className="text-muted-foreground">
              Building trust and accountability consistently.
            </p>
          </div>

          <div className="border border-border p-8">
            <h3 className="text-xl font-bold text-primary mb-3">
              Transformation
            </h3>
            <p className="text-muted-foreground">
              Driving meaningful, lasting change.
            </p>
          </div>

        </div>
      </div>
    </section>

    <section id="team" className="section-white py-24">
      <div className="container mx-auto px-4">

        <div className="text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
            Our People
          </p>

          <h2 className="text-3xl md:text-4xl text-primary mb-6">
            Meet Our Team
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the professionals behind Limitless Communications and the
            expertise they bring to our clients and programmes.
          </p>
        </div>

      </div>
    </section>

  </main>

  <Footer />
</div>
```

);
};

export default AboutPage;
