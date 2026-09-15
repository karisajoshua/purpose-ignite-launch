import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const ContactPage = () => (
  <div>
    <SEO title="Contact" description="Get in touch with Limitless Communications — partner with us for leadership development, corporate training, and organizational consulting." path="/contact" />
    <Navbar />
    <div className="pt-20">
      <ContactSection />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
