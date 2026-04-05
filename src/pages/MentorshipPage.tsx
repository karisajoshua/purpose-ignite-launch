import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorshipSection from "@/components/MentorshipSection";
import SEO from "@/components/SEO";

const MentorshipPage = () => (
  <div>
    <SEO title="Mentorship" description="Transformative mentorship and coaching programmes by Limitless Communications — guiding growth, unlocking potential, and sustaining transformation." path="/mentorship" />
    <Navbar />
    <div className="pt-20">
      <MentorshipSection />
    </div>
    <Footer />
  </div>
);

export default MentorshipPage;
