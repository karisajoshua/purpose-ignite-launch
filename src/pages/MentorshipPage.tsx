import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MentorshipSection from "@/components/MentorshipSection";

const MentorshipPage = () => (
  <div>
    <Navbar />
    <div className="pt-20">
      <MentorshipSection />
    </div>
    <Footer />
  </div>
);

export default MentorshipPage;
