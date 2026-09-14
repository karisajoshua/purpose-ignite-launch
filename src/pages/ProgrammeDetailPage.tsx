import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { findProgrammeBySlug, clusters } from "@/data/programmes";
import EnrollmentDialog from "@/components/EnrollmentDialog";

const ProgrammeDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const [enrollOpen, setEnrollOpen] = useState(false);
  const [openModule, setOpenModule] = useState<number | null>(null);

  const programme = slug
    ? findProgrammeBySlug(slug)
    : undefined;

  if (!programme) {
    return (
      <div>
        <Navbar />

        <main className="pt-28 pb-24 section-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl text-primary mb-4">
              Programme Not Found
            </h1>

            <p className="text-muted-foreground mb-6">
              The programme you are looking for could not be found.
            </p>

            <Link
              to="/programmes"
              className="text-secondary hover:underline"
            >
              ← Back to All Programmes
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const cluster = clusters.find((cluster) =>
    cluster.programmes.some(
      (item) => item.slug === programme.slug
    )
  );

  const toggleModule = (index: number) => {
    setOpenModule((current) =>
      current === index ? null : index
    );
  };

  return (
    <div>
      <SEO
        title={programme.title}
        description={programme.overview}
        path={`/programmes/${programme.slug}`}
      />

      <Navbar />

      <main>
        <section className="pt-28 pb-24 section-white">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-10">
              <Link
                to="/programmes"
                className="hover:text-secondary transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                All Programmes
              </Link>

              {cluster && (
                <>
                  <span>/</span>
                  <span>{cluster.name}</span>
                </>
              )}
            </div>

            {/* Category */}
            {cluster && (
              <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
                {cluster.name}
              </p>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              {programme.title}
            </h1>

            {/* Overview */}
            <p className="text-muted-foreground leading-relaxed text-lg mb-12">
              {programme.overview}
            </p>

            {/* MODULES */}
            <div className="border border-border mb-12">

              {/* Header */}
              <div className="p-8 md:p-10 border-b border-border">
                <p className="text-sm font-bold tracking-widest uppercase text-secondary">
                  Programme Modules
                </p>

                <p className="text-muted-foreground text-sm mt-2">
                  Click each module to view the topics covered.
                </p>
              </div>

              {/* Modules */}
              <div>
                {programme.modules.map((module, index) => {
                  const isOpen = openModule === index;

                  return (
                    <div
                      key={`${programme.slug}-module-${index}`}
                      className="border-b border-border last:border-b-0"
                    >

                      {/* Module button */}
                      <button
                        type="button"
                        onClick={() => toggleModule(index)}
                        className="w-full flex items-center gap-4 p-6 md:p-8 text-left hover:bg-secondary/5 transition-colors"
                        aria-expanded={isOpen}
                      >

                        {/* Number */}
                        <span className="w-9 h-9 shrink-0 flex items-center justify-center bg-secondary/10 text-secondary font-bold text-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Title */}
                        <span className="flex-1 text-primary font-semibold text-base md:text-lg">
                          {module.title}
                        </span>

                        {/* Chevron */}
                        <ChevronDown
                          className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Topics */}
                      {isOpen && (
                        <div className="px-6 pb-7 md:px-8 md:pb-8">
                          <div className="md:ml-[52px]">

                            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-4">
                              Topics Covered
                            </p>

                            <div className="space-y-3">
                              {module.topics.map(
                                (topic, topicIndex) => (
                                  <div
                                    key={`${programme.slug}-${index}-${topicIndex}`}
                                    className="flex items-start gap-3"
                                  >
                                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />

                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                      {topic}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What You'll Gain */}
            <section className="mb-12">
              <h2 className="text-2xl text-primary mb-6">
                What You'll Gain
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Practical tools and frameworks for immediate application",
                  "Enhanced leadership and management capabilities",
                  "Structured learning with expert facilitators",
                  "Certificate of completion upon finishing the programme",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />

                    <p className="text-muted-foreground text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Buttons */}
            <div className="border-t border-border pt-10 flex flex-col sm:flex-row gap-4">

              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-secondary text-secondary-foreground font-bold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4" />
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
      </main>

      {/* Enrollment */}
      <EnrollmentDialog
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
        programmeTitle={programme.title}
        programmeSlug={programme.slug}
      />

      <Footer />
    </div>
  );
};

export default ProgrammeDetailPage;
