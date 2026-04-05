import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import SEO from "@/components/SEO";

const BlogPage = () => (
  <div>
    <SEO title="Blog" description="Insights, articles, and thought leadership on leadership development, organizational growth, and professional excellence from Limitless Communications." path="/blog" />
    <Navbar />
    <div className="pt-20">
      <BlogSection />
    </div>
    <Footer />
  </div>
);

export default BlogPage;
