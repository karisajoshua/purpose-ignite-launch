import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import GritFramework from "@/components/GritFramework";
import CoursesSection from "@/components/CoursesSection";
import MentorshipSection from "@/components/MentorshipSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <VisionMission />
    <GritFramework />
    <CoursesSection />
    <MentorshipSection />
    <ServicesSection />
    <GallerySection />
    <TeamSection />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
