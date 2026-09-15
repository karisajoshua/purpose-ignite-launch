import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import { clusters, type Programme } from "@/data/programmes";

interface ProgrammeCardProps {
  programme: Programme;
}

const ProgrammeCard = ({ programme }: ProgrammeCardProps) => {
  const [open, setOpen] = useState(false);
  const panelId = `programme-${programme.slug}-modules`;

  return (
    <div className="border border-border bg-card card-lift">
      <h4>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="w-full flex items-start justify-between p-6 text-left gap-4"
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="flex items-start gap-4">
            <BookOpen
              className="w-5 h-5 text-secondary mt-1 shrink-0"
              strokeWidth={1.5}
              aria-hidden="true"
            />

            <span>
              <span className="block font-heading text-lg font-bold text-primary">
                {programme.title}
              </span>

              <span className="block font-sans text-sm font-normal text-muted-foreground mt-1">
                {programme.modules.length} Modules
              </span>
            </span>
          </span>

          {open ? (
            <ChevronUp
              className="w-5 h-5 text-secondary shrink-0 mt-1"
              aria-hidden="true"
            />
          ) : (
            <ChevronDown
              className="w-5 h-5 text-secondary shrink-0 mt-1"
              aria-hidden="true"
            />
          )}
        </button>
      </h4>

      <div
        id={panelId}
        hidden={!open}
        className="px-6 pb-6"
      >
        <div className="border-t border-border pt-4">
          <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-4">
            Modules
          </p>

          <ol className="space-y-3">
            {programme.modules.map((module, index) => (
              <li
                key={`${programme.slug}-module-${index}`}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span
                  className="w-6 h-6 shrink-0 flex items-center justify-center bg-secondary/10 text-secondary font-bold text-xs"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>

                <span className="pt-0.5">
                  {module.title}
                </span>
              </li>
            ))}
          </ol>

          <Link
            to={`/programmes/${programme.slug}`}
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-secondary text-secondary-foreground font-bold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
          >
            View Full Details
            <ArrowRight
              className="w-4 h-4"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  return (
    <section
      id="programmes"
      className="section-white py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
            Limitless Leadership Academy
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
            Management & Leadership Development
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programmes designed to build leadership
            capacity at every level of your organization.
          </p>
        </div>

        <div className="space-y-16">
          {clusters.map((cluster) => (
            <div key={cluster.name}>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl text-primary mb-2">
                  {cluster.name}
                </h3>

                <p className="text-muted-foreground">
                  {cluster.description}
                </p>

                <div className="w-16 h-0.5 bg-secondary mt-4" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cluster.programmes.map((programme) => (
                  <ProgrammeCard
                    key={programme.slug}
                    programme={programme}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
