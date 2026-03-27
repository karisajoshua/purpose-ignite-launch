import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";

const ContactPage = () => (
  <div>
    <Navbar />
    <div className="pt-20">
      <ContactSection />
      <TeamSection />
    </div>
    <Footer />
  </div>
);

export default ContactPage;
