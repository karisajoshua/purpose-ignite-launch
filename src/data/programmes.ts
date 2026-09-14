export interface Module {
  title: string;
  topics: string[];
}

export interface Programme {
  slug: string;
  title: string;
  overview: string;
  modules: Module[];
}

export interface Cluster {
  name: string;
  description: string;
  programmes: Programme[];
}

export const{
  slug: "church-leadership-development",
  title: "Church Leadership Development Programme",
  overview:
    "A specialized leadership development programme designed to equip pastors, ministry leaders, church administrators and emerging church leaders with the leadership, governance and people-management capabilities required to lead healthy, effective and purpose-driven ministries. The programme integrates servant leadership, spiritual leadership, organizational management, conflict resolution, team development, succession planning and community impact.",
  modules: [
    {
      title: "Foundations of Christian Leadership",
      topics: [
        "Biblical principles of leadership",
        "Servant leadership and Christ-centred leadership",
        "The character and integrity of a church leader",
        "Leadership calling, purpose and responsibility",
        "Vision, mission and values in ministry",
        "Leading with humility, accountability and wisdom",
        "Spiritual maturity and leadership effectiveness",
      ],
    },
    {
      title: "Vision, Strategy & Ministry Development",
      topics: [
        "Developing a clear ministry vision",
        "Strategic planning for churches and ministries",
        "Setting ministry goals and priorities",
        "Translating vision into action",
        "Ministry programme development",
        "Resource planning and stewardship",
        "Measuring ministry effectiveness and impact",
      ],
    },
    {
      title: "People, Teams & Volunteer Leadership",
      topics: [
        "Building effective ministry teams",
        "Volunteer recruitment and engagement",
        "Delegation and responsibility",
        "Developing emerging leaders",
        "Motivating and retaining ministry teams",
        "Effective communication in ministry",
        "Team accountability and performance",
        "Creating a healthy leadership culture",
      ],
    },
    {
      title: "Church Governance, Ethics & Accountability",
      topics: [
        "Principles of church governance",
        "Leadership structures and responsibilities",
        "Ethical decision-making",
        "Financial stewardship and accountability",
        "Transparency and responsible resource management",
        "Leadership policies and procedures",
        "Risk management in church organizations",
        "Safeguarding and protection of vulnerable people",
      ],
    },
    {
      title: "Conflict Resolution & Pastoral Leadership",
      topics: [
        "Understanding conflict in church environments",
        "Sources of organizational and interpersonal conflict",
        "Biblical approaches to conflict resolution",
        "Mediation and reconciliation",
        "Difficult conversations",
        "Managing leadership disagreements",
        "Building trust and restoring relationships",
        "Pastoral care and people-centred leadership",
      ],
    },
    {
      title: "Leadership Development & Succession",
      topics: [
        "Identifying emerging church leaders",
        "Mentorship and coaching",
        "Leadership pipeline development",
        "Succession planning",
        "Preparing the next generation of leaders",
        "Knowledge transfer and continuity",
        "Developing ministry leadership competencies",
        "Building sustainable leadership structures",
      ],
    },
    {
      title: "Community Transformation & Social Impact",
      topics: [
        "The role of the church in community development",
        "Community engagement and partnerships",
        "Social responsibility and outreach",
        "Youth and family empowerment",
        "Supporting vulnerable communities",
        "Church-led social impact initiatives",
        "Partnerships with government, NGOs and community organizations",
        "Measuring social and community impact",
      ],
    },
  ],
}, clusters: Cluster[] = [
  {
    name: "Leadership by Level Programmes",
    description:
      "Designed to equip leaders at every level with the skills and mindset to lead effectively.",
    programmes: [
      {
        slug: "supervisory-leadership",
        title: "Supervisory Leadership & Skills Development Programme",
        overview:
          "This programme equips new and existing supervisors with essential leadership skills to manage teams, communicate effectively, and drive workplace performance.",
        modules: [
          {
            title: "The Transition to Supervisory Leadership",
            topics: [
              "Understanding the transition from team member to supervisor",
              "Developing a supervisory mindset",
              "Understanding authority, responsibility and accountability",
              "Common challenges faced by new supervisors",
              "Building credibility and trust",
            ],
          },
          {
            title: "Roles & Responsibilities of a Supervisor",
            topics: [
              "Understanding the role of a supervisor",
              "Delegation and task allocation",
              "Managing team resources",
              "Setting expectations and standards",
              "Accountability and decision-making",
            ],
          },
          {
            title: "Effective Communication in the Workplace",
            topics: [
              "Principles of effective workplace communication",
              "Active listening",
              "Giving clear instructions",
              "Managing difficult conversations",
              "Written and verbal communication",
            ],
          },
          {
            title: "Team Coordination & Task Management",
            topics: [
              "Planning and prioritizing team activities",
              "Delegating effectively",
              "Managing workloads and deadlines",
              "Coordinating team members",
              "Monitoring task completion",
            ],
          },
          {
            title: "Managing Performance & Discipline",
            topics: [
              "Setting performance expectations",
              "Monitoring employee performance",
              "Providing constructive feedback",
              "Managing underperformance",
              "Fair and consistent disciplinary practices",
            ],
          },
          {
            title: "Building Productive Work Relationships",
            topics: [
              "Building trust within teams",
              "Managing workplace conflict",
              "Promoting collaboration",
              "Emotional intelligence in supervision",
              "Creating a positive team environment",
            ],
          },
        ],
      },

      {
        slug: "strategic-leadership",
        title: "Strategic Leadership Development Programme (SLDP)",
        overview:
          "A comprehensive programme designed to develop strategic leaders who can set direction, drive execution, and lead high-performing teams toward sustainable growth.",
        modules: [
          {
            title: "Foundations of Strategic Leadership",
            topics: [
              "Understanding strategic leadership",
              "Strategic versus operational leadership",
              "Leadership mindset and organizational impact",
              "Strategic leadership competencies",
            ],
          },
          {
            title: "Visioning, Purpose & Organizational Direction",
            topics: [
              "Developing organizational vision",
              "Defining purpose and strategic direction",
              "Aligning teams around organizational goals",
              "Communicating vision effectively",
            ],
          },
          {
            title: "Strategy Formulation & Execution",
            topics: [
              "Strategic analysis",
              "Setting strategic priorities",
              "Strategy development",
              "Translating strategy into action",
              "Monitoring strategic execution",
            ],
          },
          {
            title: "Data-Driven Decision Making",
            topics: [
              "Using data to support decisions",
              "Understanding organizational metrics",
              "Risk-based decision making",
              "Interpreting business information",
            ],
          },
          {
            title: "Leading High-Performing Teams",
            topics: [
              "Building high-performing teams",
              "Delegation and accountability",
              "Performance culture",
              "Employee engagement",
              "Developing future leaders",
            ],
          },
          {
            title: "Innovation, Growth & Sustainability",
            topics: [
              "Leading innovation",
              "Identifying growth opportunities",
              "Managing organizational change",
              "Sustainable leadership",
              "Building long-term organizational resilience",
            ],
          },
        ],
      },

      {
        slug: "executive-leadership",
        title:
          "Executive Leadership & Senior Management Programme (ELSMP)",
        overview:
          "Designed for senior leaders and executives, this programme strengthens strategic thinking, governance, and the ability to lead organizations through complexity and change.",
        modules: [
          {
            title: "The Role of Executive Leadership in Modern Organizations",
            topics: [
              "Executive leadership responsibilities",
              "Strategic leadership expectations",
              "Leadership influence and organizational performance",
              "Executive accountability",
            ],
          },
          {
            title: "Strategic Thinking & Decision-Making",
            topics: [
              "Strategic thinking frameworks",
              "Complex decision-making",
              "Risk and uncertainty",
              "Scenario planning",
              "Executive judgement",
            ],
          },
          {
            title: "Leading Organizational Performance & Growth",
            topics: [
              "Organizational performance management",
              "Growth strategy",
              "Resource optimization",
              "Performance measurement",
              "Driving organizational results",
            ],
          },
          {
            title: "Governance, Ethics & Accountability",
            topics: [
              "Principles of corporate governance",
              "Ethical leadership",
              "Executive accountability",
              "Transparency and integrity",
              "Managing conflicts of interest",
            ],
          },
          {
            title: "Leading Through Change & Uncertainty",
            topics: [
              "Understanding organizational change",
              "Change leadership",
              "Managing resistance",
              "Crisis leadership",
              "Building organizational resilience",
            ],
          },
          {
            title: "Executive Presence & Influence",
            topics: [
              "Developing executive presence",
              "Strategic communication",
              "Influencing stakeholders",
              "Negotiation and persuasion",
              "Building executive credibility",
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Functional Excellence Programmes",
    description:
      "Focused on building critical management competencies that drive organizational performance.",
    programmes: [
      {
        slug: "performance-management",
        title: "Performance Management & Accountability Programme",
        overview:
          "This programme builds the capacity of managers and teams to set clear performance goals, monitor progress, and foster a culture of accountability and continuous improvement.",
        modules: [
          {
            title: "Foundations of Performance Management",
            topics: [
              "Understanding performance management",
              "Performance management systems",
              "Roles of managers and employees",
              "Creating a performance culture",
            ],
          },
          {
            title: "Goal Setting (KPIs & Targets)",
            topics: [
              "Understanding KPIs",
              "Setting SMART goals",
              "Developing measurable targets",
              "Aligning individual and organizational goals",
            ],
          },
          {
            title: "Monitoring & Evaluating Performance",
            topics: [
              "Performance monitoring",
              "Performance reviews",
              "Using performance data",
              "Identifying performance gaps",
            ],
          },
          {
            title: "Coaching & Feedback for Performance Improvement",
            topics: [
              "Effective coaching",
              "Giving constructive feedback",
              "Performance conversations",
              "Employee development plans",
            ],
          },
          {
            title: "Managing Underperformance",
            topics: [
              "Identifying underperformance",
              "Root-cause analysis",
              "Performance improvement plans",
              "Managing difficult performance situations",
            ],
          },
          {
            title: "Building a Culture of Accountability",
            topics: [
              "Creating accountability systems",
              "Ownership and responsibility",
              "Leadership accountability",
              "Continuous improvement",
            ],
          },
        ],
      },

      {
        slug: "customer-experience",
        title: "Customer Experience & Service Leadership Programme",
        overview:
          "A practical programme that equips teams with the mindset and tools to deliver exceptional customer experiences and build customer-centric organizations.",
        modules: [
          {
            title: "Understanding Customer Experience (CX)",
            topics: [
              "What is customer experience?",
              "Understanding customer expectations",
              "Customer journeys",
              "Identifying customer touchpoints",
            ],
          },
          {
            title: "Building a Customer-Centric Culture",
            topics: [
              "Customer-centric leadership",
              "Understanding customer needs",
              "Employee engagement and customer experience",
              "Embedding customer focus into organizational culture",
            ],
          },
          {
            title: "Service Excellence Principles & Standards",
            topics: [
              "Service excellence principles",
              "Developing service standards",
              "Consistency in service delivery",
              "Professional customer interaction",
            ],
          },
          {
            title: "Managing Customer Feedback & Complaints",
            topics: [
              "Collecting customer feedback",
              "Complaint management",
              "Service recovery",
              "Turning complaints into improvement opportunities",
            ],
          },
          {
            title: "Communication & Brand Representation",
            topics: [
              "Professional communication",
              "Representing the brand",
              "Managing difficult customers",
              "Building trust through communication",
            ],
          },
          {
            title: "Leading Customer-Focused Teams",
            topics: [
              "Managing service teams",
              "Service performance metrics",
              "Coaching customer-facing employees",
              "Creating a culture of service excellence",
            ],
          },
        ],
      },

      {
        slug: "organizational-culture",
        title:
          "Culture by Design: Organizational Culture & Values Programme",
        overview:
          "This programme helps organizations intentionally define, align, and embed culture and values into their systems, leadership, and daily operations.",
        modules: [
          {
            title: "Understanding Organizational Culture",
            topics: [
              "What is organizational culture?",
              "Types of organizational culture",
              "Culture and employee behaviour",
              "How culture influences performance",
            ],
          },
          {
            title: "Defining & Aligning Core Values",
            topics: [
              "Identifying organizational values",
              "Values alignment",
              "Communicating organizational values",
              "Translating values into behaviours",
            ],
          },
          {
            title: "Building a Values-Driven Organization",
            topics: [
              "Values-based decision making",
              "Ethical organizational behaviour",
              "Leadership and values",
              "Employee alignment",
            ],
          },
          {
            title: "Leadership's Role in Shaping Culture",
            topics: [
              "Leadership behaviour and culture",
              "Role modelling",
              "Leadership communication",
              "Creating cultural accountability",
            ],
          },
          {
            title: "Embedding Culture into Systems & Processes",
            topics: [
              "Recruitment and organizational culture",
              "Performance management and values",
              "Onboarding and culture",
              "Embedding values into policies and processes",
            ],
          },
          {
            title: "Sustaining Culture for Long-Term Impact",
            topics: [
              "Monitoring organizational culture",
              "Managing cultural change",
              "Employee engagement",
              "Continuous cultural improvement",
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Specialized Programmes",
    description:
      "Targeted programmes designed to deepen leadership capacity, promote inclusion, build specialized skills, and create meaningful organizational and social impact.",
    programmes: [
      {
        slug: "transformational-leadership",
        title:
          "Transformational & Purpose-Driven Leadership Programme",
        overview:
          "A deep-dive programme that develops leaders who lead from purpose, inspire transformation, and create lasting impact in their organizations and communities.",
        modules: [
          {
            title: "Understanding Transformational Leadership",
            topics: [
              "Principles of transformational leadership",
              "Transformational versus transactional leadership",
              "Characteristics of transformational leaders",
              "Creating positive organizational change",
            ],
          },
          {
            title: "Purpose, Values & Leadership Identity",
            topics: [
              "Understanding leadership purpose",
              "Personal leadership values",
              "Developing leadership identity",
              "Aligning values with organizational purpose",
            ],
          },
          {
            title: "Emotional Intelligence & Self-Mastery",
            topics: [
              "Understanding emotional intelligence",
              "Self-awareness",
              "Emotional regulation",
              "Empathy and social awareness",
              "Building resilient leaders",
            ],
          },
          {
            title: "Leading Through Influence & Inspiration",
            topics: [
              "Building influence",
              "Inspirational communication",
              "Stakeholder engagement",
              "Building trust and credibility",
            ],
          },
          {
            title: "Driving Change & Organizational Transformation",
            topics: [
              "Leading organizational transformation",
              "Change management",
              "Managing resistance",
              "Creating a change-ready culture",
            ],
          },
          {
            title: "Building a Legacy of Impact",
            topics: [
              "Leadership legacy",
              "Long-term impact",
              "Developing future leaders",
              "Purpose-driven leadership",
            ],
          },
        ],
      },

      {
        slug: "trainer-of-trainers",
        title:
          "Trainer of Trainers (ToT): Facilitation & Learning Excellence Programme",
        overview:
          "This programme equips trainers and facilitators with advanced skills in adult learning, content design, delivery, and evaluation to maximize learning impact.",
        modules: [
          {
            title: "Principles of Adult Learning",
            topics: [
              "Understanding adult learners",
              "Adult learning principles",
              "Learning styles and preferences",
              "Creating learner-centred training",
            ],
          },
          {
            title: "Training Design & Content Development",
            topics: [
              "Training needs assessment",
              "Learning objectives",
              "Curriculum design",
              "Training materials development",
            ],
          },
          {
            title: "Facilitation Skills & Delivery Techniques",
            topics: [
              "Effective facilitation",
              "Presentation techniques",
              "Questioning and discussion techniques",
              "Managing group dynamics",
            ],
          },
          {
            title: "Engaging Diverse Audiences",
            topics: [
              "Understanding diverse learners",
              "Inclusive facilitation",
              "Managing difficult participants",
              "Creating psychologically safe learning environments",
            ],
          },
          {
            title: "Assessment & Evaluation of Learning",
            topics: [
              "Learning assessment methods",
              "Measuring learning outcomes",
              "Training evaluation",
              "Using feedback to improve training",
            ],
          },
          {
            title: "Personal Effectiveness as a Trainer",
            topics: [
              "Trainer confidence",
              "Professional presence",
              "Communication skills",
              "Continuous professional development",
            ],
          },
        ],
      },

      {
        slug: "pwd-inclusion-empowerment",
        title:
          "PWD Inclusion, Empowerment & Workplace Accessibility Programme",
        overview:
          "A specialized programme designed to promote disability inclusion, empower Persons with Disabilities (PWDs), and equip organizations with the knowledge and practical tools required to create accessible, inclusive and compliant workplaces. The programme addresses inclusive recruitment, workplace accessibility, disability-inclusive policies, staff capacity building, compliance with disability standards, career development, economic empowerment and continuous inclusion improvement.",
        modules: [
          {
            title: "Disability Inclusion, Rights & Compliance",
            topics: [
              "Understanding disability, diversity and inclusion",
              "Rights of Persons with Disabilities (PWDs)",
              "Disability inclusion principles",
              "Kenyan disability laws, regulations and institutional responsibilities",
              "Disability-related workplace obligations",
              "United Nations Convention on the Rights of Persons with Disabilities (CRPD)",
              "Global disability inclusion frameworks and standards",
              "Developing a culture of disability compliance",
            ],
          },

          {
            title: "Inclusive Recruitment & Employment",
            topics: [
              "Inclusive hiring practices",
              "Designing accessible recruitment processes",
              "Writing disability-inclusive job descriptions",
              "Identifying and removing recruitment barriers",
              "Inclusive interviewing and selection",
              "Reasonable accommodation during recruitment",
              "Retention of employees with disabilities",
              "Career progression and professional development",
              "Building disability-inclusive HR practices",
            ],
          },

          {
            title: "Workplace Accessibility & Universal Design",
            topics: [
              "Understanding workplace accessibility",
              "Physical accessibility assessment",
              "Identifying barriers within the workplace",
              "Digital accessibility",
              "Accessible communication",
              "Assistive technologies",
              "Reasonable workplace accommodation",
              "Universal design principles",
              "Developing workplace accessibility improvement plans",
            ],
          },

          {
            title: "Disability-Inclusive Policies & Organizational Culture",
            topics: [
              "Developing disability inclusion policies",
              "Reviewing existing organizational policies",
              "Embedding disability inclusion into HR policies",
              "Anti-discrimination and equal opportunity practices",
              "Disability-inclusive leadership",
              "Creating an inclusive organizational culture",
              "Addressing stigma and unconscious bias",
              "Policy implementation and accountability",
            ],
          },

          {
            title: "Training, Capacity Building & Inclusive Management",
            topics: [
              "Disability awareness training",
              "Building disability confidence among employees",
              "Training HR teams and managers",
              "Inclusive management practices",
              "Effective communication with employees with disabilities",
              "Managing reasonable accommodation",
              "Supporting employees with different accessibility needs",
              "Creating supportive workplace environments",
              "Building internal disability inclusion champions",
            ],
          },

          {
            title: "PWD Empowerment, Career & Economic Participation",
            topics: [
              "Building confidence and self-advocacy",
              "Understanding personal rights and opportunities",
              "Career planning and development",
              "Employment readiness",
              "Digital skills development",
              "Entrepreneurship and business development",
              "Financial literacy",
              "Accessing employment and economic opportunities",
              "Leadership development for PWDs",
              "Community participation and social inclusion",
            ],
          },

          {
            title: "Monitoring, Reporting & Continuous Inclusion",
            topics: [
              "Developing disability inclusion KPIs",
              "Monitoring workplace accessibility",
              "Measuring inclusion outcomes",
              "Employee feedback and engagement",
              "Disability inclusion audits",
              "Compliance monitoring",
              "Inclusion reporting",
              "Identifying gaps and improvement areas",
              "Developing continuous improvement plans",
              "Ongoing advisory and organizational support",
            ],
          },
        ],
      },
    ],
  },
];

export const allProgrammes = clusters.flatMap(
  (cluster) => cluster.programmes
);

export const findProgrammeBySlug = (slug: string) =>
  allProgrammes.find((programme) => programme.slug === slug);
