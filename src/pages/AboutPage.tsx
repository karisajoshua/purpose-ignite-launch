import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import GritFramework from "@/components/GritFramework";
import TeamSection from "@/components/TeamSection";
import SEO from "@/components/SEO";

const AboutPage = () => {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Wait until the page is rendered and ScrollToTop has finished.
    const animationFrame = window.requestAnimationFrame(() => {
      const section = document.getElementById(hash.slice(1));

      if (!section) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      section.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hash, key]);

  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Limitless Communications Limited, our vision, mission, GRIT framework, and our team."
        path="/about"
      />

      <Navbar />

      <main className="pt-20 [&_[id]]:scroll-mt-24">
        <h1 className="sr-only">
          About Limitless Communications Limited
        </h1>

        {/* Who We Are */}
        <div id="who-we-are">
          <AboutSection />
        </div>

        {/* Our Vision */}
        <section id="vision" className="section-white py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
              Our Vision
            </p>

            <h2 className="text-3xl md:text-4xl text-primary mb-6">
              Leading Transformation Across Africa
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              To be a leading force in transformational leadership and
              capacity building across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Our Mission */}
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

        {/* The GRIT Framework */}
        <div id="grit">
          <GritFramework />
        </div>

        {/* TeamSection already includes id="team". */}
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
