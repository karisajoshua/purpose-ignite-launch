import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

const ServicesPage = () => (
  <div>
    <Navbar />
    <div className="pt-20">
      <ServicesSection />
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
