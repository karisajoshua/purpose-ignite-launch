import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";

interface Programme {
  title: string;
  modules: string[];
}

interface Cluster {
  name: string;
  description: string;
  programmes: Programme[];
}

const clusters: Cluster[] = [
  {
    name: "Leadership by Level Programmes",
    description: "Designed to equip leaders at every level with the skills and mindset to lead effectively.",
    programmes: [
      {
        title: "Supervisory Leadership & Skills Development Programme",
        modules: [
          "The Transition to Supervisory Leadership",
          "Roles & Responsibilities of a Supervisor",
          "Effective Communication in the Workplace",
          "Team Coordination & Task Management",
          "Managing Performance & Discipline",
          "Building Productive Work Relationships",
        ],
      },
      {
        title: "Strategic Leadership Development Programme (SLDP)",
        modules: [
          "Foundations of Strategic Leadership",
          "Visioning, Purpose & Organizational Direction",
          "Strategy Formulation & Execution",
          "Data-Driven Decision Making",
          "Leading High-Performing Teams",
          "Innovation, Growth & Sustainability",
        ],
      },
      {
        title: "Executive Leadership & Senior Management Programme (ELSMP)",
        modules: [
          "The Role of Executive Leadership in Modern Organizations",
          "Strategic Thinking & Decision-Making",
          "Leading Organizational Performance & Growth",
          "Governance, Ethics & Accountability",
          "Leading Through Change & Uncertainty",
          "Executive Presence & Influence",
        ],
      },
    ],
  },
  {
    name: "Functional Excellence Programmes",
    description: "Focused on building critical management competencies that drive organizational performance.",
    programmes: [
      {
        title: "Performance Management & Accountability Programme",
        modules: [
          "Foundations of Performance Management",
          "Goal Setting (KPIs & Targets)",
          "Monitoring & Evaluating Performance",
          "Coaching & Feedback for Performance Improvement",
          "Managing Underperformance",
          "Building a Culture of Accountability",
        ],
      },
      {
        title: "Customer Experience & Service Leadership Programme",
        modules: [
          "Understanding Customer Experience (CX)",
          "Building a Customer-Centric Culture",
          "Service Excellence Principles & Standards",
          "Managing Customer Feedback & Complaints",
          "Communication & Brand Representation",
          "Leading Customer-Focused Teams",
        ],
      },
      {
        title: "Culture by Design: Organizational Culture & Values Programme",
        modules: [
          "Understanding Organizational Culture",
          "Defining & Aligning Core Values",
          "Building a Values-Driven Organization",
          "Leadership's Role in Shaping Culture",
          "Embedding Culture into Systems & Processes",
          "Sustaining Culture for Long-Term Impact",
        ],
      },
    ],
  },
  {
    name: "Specialized Programmes",
    description: "Targeted programmes designed to deepen leadership capacity and organizational impact.",
    programmes: [
      {
        title: "Transformational & Purpose-Driven Leadership Programme",
        modules: [
          "Understanding Transformational Leadership",
          "Purpose, Values & Leadership Identity",
          "Emotional Intelligence & Self-Mastery",
          "Leading Through Influence & Inspiration",
          "Driving Change & Organizational Transformation",
          "Building a Legacy of Impact",
        ],
      },
      {
        title: "Trainer of Trainers (ToT): Facilitation & Learning Excellence Programme",
        modules: [
          "Principles of Adult Learning",
          "Training Design & Content Development",
          "Facilitation Skills & Delivery Techniques",
          "Engaging Diverse Audiences",
          "Assessment & Evaluation of Learning",
          "Personal Effectiveness as a Trainer",
        ],
      },
    ],
  },
];

const ProgrammeCard = ({ programme }: { programme: Programme }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border bg-card card-lift">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between p-6 text-left gap-4"
      >
        <div className="flex items-start gap-4">
          <BookOpen className="w-5 h-5 text-secondary mt-1 shrink-0" strokeWidth={1.5} />
          <div>
            <h4 className="font-heading text-lg font-bold text-primary">{programme.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{programme.modules.length} Modules</p>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-secondary shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-5 h-5 text-secondary shrink-0 mt-1" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 animate-fade-in">
          <div className="border-t border-border pt-4">
            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-4">Modules</p>
            <ol className="space-y-3">
              {programme.modules.map((m, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-6 h-6 shrink-0 flex items-center justify-center bg-secondary/10 text-secondary font-bold text-xs">
                    {i + 1}
                  </span>
                  {m}
                </li>
              ))}
            </ol>
            <a
              href="#contact"
              className="inline-block mt-6 px-8 py-3 bg-secondary text-secondary-foreground font-bold text-xs tracking-widest uppercase hover:bg-gold-light transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

const CoursesSection = () => (
  <section id="programmes" className="section-white py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-widest uppercase text-secondary mb-4">
          Limitless Leadership Academy
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
          Management & Leadership Development
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive programmes designed to build leadership capacity at every level of your organization.
        </p>
      </div>

      <div className="space-y-16">
        {clusters.map((cluster) => (
          <div key={cluster.name}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl text-primary mb-2">{cluster.name}</h3>
              <p className="text-muted-foreground">{cluster.description}</p>
              <div className="w-16 h-0.5 bg-secondary mt-4" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cluster.programmes.map((p) => (
                <ProgrammeCard key={p.title} programme={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
