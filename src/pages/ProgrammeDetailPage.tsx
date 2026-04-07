import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { findProgrammeBySlug, clusters } from "@/data/programmes";
import EnrollmentDialog from "@/components/EnrollmentDialog";

const ProgrammeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const programme = slug ? findProgrammeBySlug(slug) : undefined;
  const [enrollOpen, setEnrollOpen] = useState(false);

  if (!programme) {
    return (
      <div>
        <Navbar />
        <div className="pt-28 pb-24 section-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl text-primary mb-4">Programme Not Found</h1>
            <Link to="/programmes" className="text-secondary hover:underline">
              ← Back to All Programmes
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const cluster = clusters.find((c) =>
    c.programmes.some((p) => p.slug === slug)
  );

  return (
    <div>
      <SEO title={programme.title} description={programme.overview} path={`/programmes/${slug}`} />
      <Navbar />
      <section className="pt-28 pb-24 section-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
            <Link to="/programmes" className="hover:text-secondary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> All Programmes
            </Link>
            {cluster && (
              <>
                <span>/</span>
                <span>{cluster.name}</span>
              </>
            )}
          </div>

          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
            {cluster?.name}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            {programme.title}
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg mb-12">
            {programme.overview}
          </p>

          <div className="border border-border p-8 md:p-12 mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-8">
              Programme Modules
            </p>
            <ol className="space-y-5">
              {programme.modules.map((m, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-secondary/10 text-secondary font-bold text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-primary font-medium">{m}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl text-primary mb-6">What You'll Gain</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Practical tools and frameworks for immediate application",
                "Enhanced leadership and management capabilities",
                "Structured learning with expert facilitators",
                "Certificate of completion upon finishing the programme",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setEnrollOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/programmes"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-border text-primary font-bold text-sm tracking-widest uppercase hover:border-secondary hover:text-secondary transition-colors"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      <EnrollmentDialog
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        programmeTitle={programme.title}
        programmeSlug={slug!}
      />

      <Footer />
    </div>
  );
};

export default ProgrammeDetailPage;
