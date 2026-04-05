import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import SEO from "@/components/SEO";

const ServicesPage = () => (
  <div>
    <SEO title="Services" description="Leadership development, corporate training, mentorship, strategic communications, and organizational development services by Limitless Communications." path="/services" />
    <Navbar />
    <div className="pt-20">
      <ServicesSection />
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
