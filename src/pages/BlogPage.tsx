import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";

const BlogPage = () => (
  <div>
    <Navbar />
    <div className="pt-20">
      <BlogSection />
    </div>
    <Footer />
  </div>
);

export default BlogPage;
