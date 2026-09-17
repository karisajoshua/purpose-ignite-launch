import teamCollab from "@/assets/gallery/team_collab.jpg";

const AboutSection = () => (
  <section id="about" className="section-white py-24">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">About Us</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-primary">
          Built on GRIT. Driven by Purpose.
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>Limitless Communications Limited is a purpose-driven consultancy and strategic partner committed to unlocking purpose, unleashing potential, transforming culture, and creating lasting, measurable impact in people, organizations, and communities.</p>
          <p>We believe growth has no boundaries and potential has no limits. Through leadership development, organizational culture, training and capacity building, transformative learning, strategic communications, and mentorship, we equip individuals and organizations with the mindset, capabilities, and confidence to grow, lead, and create meaningful impact.</p>
          <p>We work with corporates, leaders, entrepreneurs, youth, and community groups to strengthen capabilities, cultivate healthy, high-performing cultures, and translate potential into sustainable results and lasting impact.</p>
          <p>At Limitless, we believe lasting transformation begins with people. It requires clarity of purpose, intentional leadership, continuous learning, and the discipline to turn potential into action. Our work goes beyond training—we create experiences, conversations, and practical solutions that inspire growth, strengthen capacity, shape culture, and enable meaningful transformation.</p>
          <p>Guided by our core values of Growth, Respect, Integrity, and Transformation (GRIT), we connect people to purpose, empower them with the knowledge, skills, and confidence to grow, and transform individuals and organizations to move beyond perceived limitations, shift mindsets, and realize what is possible in the way they lead, work, and create impact.</p>
        </div>
        <p className="font-heading text-xl text-primary font-semibold mt-7">We Connect. We Empower. We Transform.</p>
      </div>
      <div className="relative">
        <img src={teamCollab} alt="Limitless team collaboration" className="w-full h-[560px] object-cover" loading="lazy" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-secondary" />
      </div>
    </div>
  </section>
);

export default AboutSection;
