import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";

const ProgrammesPage = () => (
  <div>
    <Navbar />
    <div className="pt-20">
      <CoursesSection />
    </div>
    <Footer />
  </div>
);

export default ProgrammesPage;
