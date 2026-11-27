import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursesSection from "@/components/CoursesSection";
import SEO from "@/components/SEO";

const ProgrammesPage = () => (
  <div>
    <SEO title="Programmes" description="Explore leadership, functional excellence, specialized training and AI & digital transformation programmes for organizations." path="/programmes" />
    <Navbar />
    <div className="pt-20">
      <CoursesSection />
    </div>
    <Footer />
  </div>
);

export default ProgrammesPage;
