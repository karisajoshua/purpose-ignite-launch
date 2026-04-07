import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";

const BlogSection = () => (
  <section id="blog" className="section-muted py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Insights</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">From the Blog</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 6).map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="bg-card border border-border card-lift group block">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">{post.category}</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="font-heading text-lg font-bold text-primary mb-4 gold-underline leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">Read More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
