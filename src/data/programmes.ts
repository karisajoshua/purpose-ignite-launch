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

export const clusters: Cluster[] = [
  {
    name: "Leadership by Level Programmes",
    description:
      "Programmes designed to develop leadership capabilities at every level of an organization.",
    programmes: [
      {
        slug: "supervisory-leadership-skills-development",
        title: "Supervisory Leadership & Skills Development Programme",
        overview:
          "A practical programme designed to equip supervisors and emerging leaders with the skills required to lead teams effectively, manage performance and drive organizational results.",
        modules: [
          {
            title: "Foundations of Supervisory Leadership",
            topics: [
              "Understanding the role of a supervisor",
              "Leadership versus management",
              "Leadership styles",
              "Building trust and credibility",
              "Personal leadership effectiveness",
            ],
          },
          {
            title: "Communication & Team Leadership",
            topics: [
              "Effective workplace communication",
              "Active listening",
              "Giving and receiving feedback",
              "Team motivation",
              "Building high-performing teams",
            ],
          },
          {
            title: "Performance Management",
            topics: [
              "Setting performance expectations",
              "Monitoring employee performance",
              "Performance feedback",
              "Coaching employees",
              "Managing underperformance",
            ],
          },
        ],
      },

      {
        slug: "strategic-leadership-development",
        title: "Strategic Leadership Development Programme (SLDP)",
        overview:
          "A strategic leadership programme designed to equip managers and senior professionals with the capabilities required to think strategically, make informed decisions and lead organizational transformation.",
        modules: [
          {
            title: "Strategic Leadership Foundations",
            topics: [
              "Strategic thinking",
              "Leadership vision",
              "Organizational strategy",
              "Strategic decision-making",
              "Leadership effectiveness",
            ],
          },
          {
            title: "Strategy Execution",
            topics: [
              "Strategic planning",
              "Goal setting",
              "Execution frameworks",
              "Performance measurement",
              "Accountability",
            ],
          },
          {
            title: "Leading Organizational Change",
            topics: [
              "Understanding organizational change",
              "Change leadership",
              "Managing resistance",
              "Stakeholder engagement",
              "Building organizational agility",
            ],
          },
        ],
      },

      {
        slug: "executive-leadership-senior-management",
        title: "Executive Leadership & Senior Management Programme (ELSMP)",
        overview:
          "An executive-level programme designed to strengthen strategic leadership, executive decision-making, organizational governance and long-term business performance.",
        modules: [
          {
            title: "Executive Leadership",
            topics: [
              "Executive leadership principles",
              "Leadership presence",
              "Strategic influence",
              "Executive decision-making",
              "Leading at organizational level",
            ],
          },
          {
            title: "Corporate Strategy & Governance",
            topics: [
              "Corporate strategy",
              "Governance principles",
              "Risk management",
              "Executive accountability",
              "Organizational sustainability",
            ],
          },
          {
            title: "Leading Transformation",
            topics: [
              "Organizational transformation",
              "Innovation leadership",
              "Digital transformation",
              "Managing organizational complexity",
              "Building future-ready organizations",
            ],
          },
        ],
      },

      {
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
      },
    ],
  },

  {
    name: "Functional Excellence Programmes",
    description:
      "Programmes designed to strengthen functional capabilities and improve organizational performance.",
    programmes: [
      {
        slug: "performance-management-accountability",
        title: "Performance Management & Accountability Programme",
        overview:
          "A practical programme focused on building performance-driven cultures, accountability systems and effective performance management practices.",
        modules: [
          {
            title: "Performance Management Foundations",
            topics: [
              "Understanding performance management",
              "Performance expectations",
              "Goal setting",
              "Performance indicators",
            ],
          },
          {
            title: "Accountability & Results",
            topics: [
              "Building accountability",
              "Monitoring performance",
              "Performance reviews",
              "Continuous improvement",
            ],
          },
        ],
      },

      {
        slug: "customer-experience-service-leadership",
        title: "Customer Experience & Service Leadership Programme",
        overview:
          "A programme designed to equip organizations with the skills and systems required to deliver exceptional customer experiences and build customer-focused cultures.",
        modules: [
          {
            title: "Customer Experience Foundations",
            topics: [
              "Understanding customer expectations",
              "Customer journey mapping",
              "Customer needs analysis",
              "Service excellence",
            ],
          },
          {
            title: "Service Leadership",
            topics: [
              "Leading customer-focused teams",
              "Service recovery",
              "Managing difficult customers",
              "Building customer loyalty",
            ],
          },
        ],
      },

      {
        slug: "culture-by-design-organizational-culture-values",
        title: "Culture by Design: Organizational Culture & Values Programme",
        overview:
          "A programme designed to help organizations intentionally build cultures that align people, values, behaviours and organizational strategy.",
        modules: [
          {
            title: "Understanding Organizational Culture",
            topics: [
              "Culture fundamentals",
              "Organizational values",
              "Workplace behaviours",
              "Culture assessment",
            ],
          },
          {
            title: "Building a High-Performance Culture",
            topics: [
              "Values-driven leadership",
              "Employee engagement",
              "Culture transformation",
              "Embedding organizational values",
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
        slug: "transformational-purpose-driven-leadership",
        title: "Transformational & Purpose-Driven Leadership Programme",
        overview:
          "A specialized programme designed to equip leaders with the mindset and capabilities required to lead meaningful transformation and create purpose-driven organizations.",
        modules: [
          {
            title: "Transformational Leadership",
            topics: [
              "Transformational leadership principles",
              "Leading change",
              "Leadership vision",
              "Innovation and transformation",
            ],
          },
          {
            title: "Purpose-Driven Leadership",
            topics: [
              "Purpose and organizational identity",
              "Values-driven leadership",
              "Stakeholder impact",
              "Creating sustainable impact",
            ],
          },
        ],
      },

      {
        slug: "trainer-of-trainers-facilitation-learning-excellence",
        title:
          "Trainer of Trainers (ToT): Facilitation & Learning Excellence Programme",
        overview:
          "A specialized programme designed to equip trainers and facilitators with the knowledge and practical skills required to design, deliver and evaluate effective learning experiences.",
        modules: [
          {
            title: "Training & Facilitation Foundations",
            topics: [
              "Adult learning principles",
              "Training needs analysis",
              "Facilitation techniques",
              "Trainer effectiveness",
            ],
          },
          {
            title: "Learning Design & Delivery",
            topics: [
              "Training programme design",
              "Learning objectives",
              "Interactive learning",
              "Training evaluation",
            ],
          },
        ],
      },

      {
        slug: "pwd-inclusion-empowerment",
        title:
          "PWD Inclusion, Empowerment & Workplace Accessibility Programme",
        overview:
          "A specialized programme designed to promote disability inclusion, empower Persons with Disabilities (PWDs), and equip organizations with the knowledge and practical tools required to create accessible, inclusive and compliant workplaces.",
        modules: [
          {
            title: "Disability Inclusion, Rights & Compliance",
            topics: [
              "Understanding disability, diversity and inclusion",
              "Rights of Persons with Disabilities",
              "Disability inclusion principles",
              "Disability-related workplace obligations",
              "Global disability inclusion frameworks and standards",
            ],
          },
          {
            title: "Inclusive Recruitment & Employment",
            topics: [
              "Inclusive hiring practices",
              "Accessible recruitment processes",
              "Inclusive interviewing and selection",
              "Reasonable accommodation",
              "Career progression and professional development",
            ],
          },
          {
            title: "Workplace Accessibility & Universal Design",
            topics: [
              "Workplace accessibility",
              "Physical accessibility assessment",
              "Digital accessibility",
              "Accessible communication",
              "Assistive technologies",
              "Universal design principles",
            ],
          },
          {
            title: "Disability-Inclusive Policies & Organizational Culture",
            topics: [
              "Developing disability inclusion policies",
              "Anti-discrimination practices",
              "Disability-inclusive leadership",
              "Creating an inclusive organizational culture",
              "Addressing stigma and unconscious bias",
            ],
          },
          {
            title: "Training, Capacity Building & Inclusive Management",
            topics: [
              "Disability awareness training",
              "Building disability confidence",
              "Training HR teams and managers",
              "Inclusive management practices",
              "Creating supportive workplace environments",
            ],
          },
          {
            title: "PWD Empowerment, Career & Economic Participation",
            topics: [
              "Building confidence and self-advocacy",
              "Career planning and development",
              "Employment readiness",
              "Digital skills development",
              "Entrepreneurship and business development",
              "Financial literacy",
              "Leadership development for PWDs",
              "Community participation and social inclusion",
            ],
          },
          {
            title: "Monitoring, Reporting & Continuous Inclusion",
            topics: [
              "Developing disability inclusion KPIs",
              "Measuring inclusion outcomes",
              "Disability inclusion audits",
              "Compliance monitoring",
              "Inclusion reporting",
              "Continuous improvement plans",
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
