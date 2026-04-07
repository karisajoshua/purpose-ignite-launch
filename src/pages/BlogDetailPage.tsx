import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { findBlogBySlug, blogPosts } from "@/data/blogs";

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? findBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="pt-28 pb-24 section-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl text-primary mb-4">Article Not Found</h1>
            <Link to="/blog" className="text-secondary hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      <SEO title={post.title} description={post.excerpt} path={`/blog/${slug}`} type="article" />
      <Navbar />
      <article className="pt-28 pb-24 section-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-4">{post.category}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">{post.title}</h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-12 border-b border-border pb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readingTime}</span>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6">{paragraph}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary text-center">
            <h3 className="text-2xl text-secondary mb-4">Ready to Transform Your Leadership?</h3>
            <p className="text-muted/80 mb-6">Get in touch to learn about our programmes and how we can help your team grow.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="container mx-auto px-4 max-w-5xl mt-20">
          <h2 className="text-2xl text-primary mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link key={r.slug} to={`/blog/${r.slug}`} className="bg-card border border-border card-lift group block">
                <div className="h-40 bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-bold tracking-widest uppercase text-secondary">{r.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{r.date}</p>
                  <h3 className="font-heading text-lg font-bold text-primary mb-4 gold-underline leading-snug">{r.title}</h3>
                  <span className="text-xs font-bold tracking-widest uppercase text-secondary">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
