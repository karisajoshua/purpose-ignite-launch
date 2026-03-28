export interface Programme {
  slug: string;
  title: string;
  overview: string;
  modules: string[];
}

export interface Cluster {
  name: string;
  description: string;
  programmes: Programme[];
}

export const clusters: Cluster[] = [
  {
    name: "Leadership by Level Programmes",
    description: "Designed to equip leaders at every level with the skills and mindset to lead effectively.",
    programmes: [
      {
        slug: "supervisory-leadership",
        title: "Supervisory Leadership & Skills Development Programme",
        overview: "This programme equips new and existing supervisors with essential leadership skills to manage teams, communicate effectively, and drive workplace performance.",
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
        slug: "strategic-leadership",
        title: "Strategic Leadership Development Programme (SLDP)",
        overview: "A comprehensive programme designed to develop strategic leaders who can set direction, drive execution, and lead high-performing teams toward sustainable growth.",
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
        slug: "executive-leadership",
        title: "Executive Leadership & Senior Management Programme (ELSMP)",
        overview: "Designed for senior leaders and executives, this programme strengthens strategic thinking, governance, and the ability to lead organizations through complexity and change.",
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
        slug: "performance-management",
        title: "Performance Management & Accountability Programme",
        overview: "This programme builds the capacity of managers and teams to set clear performance goals, monitor progress, and foster a culture of accountability and continuous improvement.",
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
        slug: "customer-experience",
        title: "Customer Experience & Service Leadership Programme",
        overview: "A practical programme that equips teams with the mindset and tools to deliver exceptional customer experiences and build customer-centric organizations.",
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
        slug: "organizational-culture",
        title: "Culture by Design: Organizational Culture & Values Programme",
        overview: "This programme helps organizations intentionally define, align, and embed culture and values into their systems, leadership, and daily operations.",
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
        slug: "transformational-leadership",
        title: "Transformational & Purpose-Driven Leadership Programme",
        overview: "A deep-dive programme that develops leaders who lead from purpose, inspire transformation, and create lasting impact in their organizations and communities.",
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
        slug: "trainer-of-trainers",
        title: "Trainer of Trainers (ToT): Facilitation & Learning Excellence Programme",
        overview: "This programme equips trainers and facilitators with advanced skills in adult learning, content design, delivery, and evaluation to maximize learning impact.",
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

export const allProgrammes = clusters.flatMap((c) => c.programmes);

export const findProgrammeBySlug = (slug: string) =>
  allProgrammes.find((p) => p.slug === slug);
