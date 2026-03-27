const posts = [
  { category: "Leadership", title: "Why Purpose-Driven Leadership Matters More Than Ever", date: "March 2026" },
  { category: "Growth", title: "The GRIT Framework: Building Resilience in Organizations", date: "February 2026" },
  { category: "Strategy", title: "5 Steps to Align Your Team Around a Shared Vision", date: "January 2026" },
];

const BlogSection = () => (
  <section id="blog" className="section-muted py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">Insights</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary">From the Blog</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.title} className="bg-card border border-border card-lift group">
            <div className="h-48 bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">{post.category}</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <h3 className="font-heading text-lg font-bold text-primary mb-4 gold-underline leading-snug">
                {post.title}
              </h3>
              <span className="text-xs font-bold tracking-widest uppercase text-secondary">Read More →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
