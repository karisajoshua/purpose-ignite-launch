import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import SEO from "@/components/SEO";

const ProgrammesPage = () => (
  <div>
    <SEO title="Programmes" description="Leadership by Level and Functional Excellence programmes — supervisory, middle management, executive leadership, communication, strategy, and entrepreneurship training." path="/programmes" />
    <Navbar />
    <div className="pt-20">
      <CoursesSection />
    </div>
    <Footer />
  </div>
);

export default ProgrammesPage;
