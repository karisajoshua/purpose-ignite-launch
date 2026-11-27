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
    description: "Programmes designed to develop leadership capabilities at every level of an organization.",
    programmes: [
      {
        slug: "supervisory-leadership-skills-development",
        title: "Supervisory Leadership & Skills Development Programme",
        overview: "A practical programme designed to equip supervisors and emerging leaders with the skills required to lead teams effectively, manage performance and drive organizational results.",
        modules: [
          { title: "Foundations of Supervisory Leadership", topics: ["Understanding the role of a supervisor", "Leadership versus management", "Leadership styles", "Building trust and credibility", "Personal leadership effectiveness"] },
          { title: "Communication & Team Leadership", topics: ["Effective workplace communication", "Active listening", "Giving and receiving feedback", "Team motivation", "Building high-performing teams"] },
          { title: "Performance Management", topics: ["Setting performance expectations", "Monitoring employee performance", "Performance feedback", "Coaching employees", "Managing underperformance"] },
          { title: "AI for Team Productivity, Work Planning and Supervision", topics: ["AI-assisted work planning","Team communication and task coordination","Responsible AI use in supervision"] },
        ],
      },
      {
        slug: "strategic-leadership-development",
        title: "Strategic Leadership Development Programme (SLDP)",
        overview: "A strategic leadership programme designed to equip managers and senior professionals with the capabilities required to think strategically, make informed decisions and lead organizational transformation.",
        modules: [
          { title: "Strategic Leadership Foundations", topics: ["Strategic thinking", "Leadership vision", "Organizational strategy", "Strategic decision-making", "Leadership effectiveness"] },
          { title: "Strategy Execution", topics: ["Strategic planning", "Goal setting", "Execution frameworks", "Performance measurement", "Accountability"] },
          { title: "Leading Organizational Change", topics: ["Understanding organizational change", "Change leadership", "Managing resistance", "Stakeholder engagement", "Building organizational agility"] },
          { title: "AI-Assisted Strategic Planning and Decision Support", topics: ["AI-assisted strategic research","Scenario planning and analysis","Verification and human decision-making"] },
        ],
      },
      {
        slug: "executive-leadership-senior-management",
        title: "Executive Leadership & Senior Management Programme (ELSMP)",
        overview: "An executive-level programme designed to strengthen strategic leadership, executive decision-making, organizational governance and long-term business performance.",
        modules: [
          { title: "Executive Leadership", topics: ["Executive leadership principles", "Leadership presence", "Strategic influence", "Executive decision-making", "Leading at organizational level"] },
          { title: "Corporate Strategy & Governance", topics: ["Corporate strategy", "Governance principles", "Risk management", "Executive accountability", "Organizational sustainability"] },
          { title: "Leading Transformation", topics: ["Organizational transformation", "Innovation leadership", "Digital transformation", "Managing organizational complexity", "Building future-ready organizations"] },
          { title: "AI Governance and Executive Digital Transformation", topics: ["AI strategy and governance","Executive decision support","Risk, accountability and digital transformation"] },
        ],
      },
      {
        slug: "church-leadership-development",
        title: "Church Leadership Development Programme",
        overview: "A specialized leadership development programme designed to equip pastors, ministry leaders, church administrators and emerging church leaders with the leadership, governance and people-management capabilities required to lead healthy, effective and purpose-driven ministries. The programme integrates servant leadership, spiritual leadership, organizational management, conflict resolution, team development, succession planning and community impact.",
        modules: [
          { title: "Foundations of Christian Leadership", topics: ["Biblical principles of leadership", "Servant leadership and Christ-centred leadership", "The character and integrity of a church leader", "Leadership calling, purpose and responsibility", "Vision, mission and values in ministry", "Leading with humility, accountability and wisdom", "Spiritual maturity and leadership effectiveness"] },
          { title: "Vision, Strategy & Ministry Development", topics: ["Developing a clear ministry vision", "Strategic planning for churches and ministries", "Setting ministry goals and priorities", "Translating vision into action", "Ministry programme development", "Resource planning and stewardship", "Measuring ministry effectiveness and impact"] },
          { title: "People, Teams & Volunteer Leadership", topics: ["Building effective ministry teams", "Volunteer recruitment and engagement", "Delegation and responsibility", "Developing emerging leaders", "Motivating and retaining ministry teams", "Effective communication in ministry", "Team accountability and performance", "Creating a healthy leadership culture"] },
          { title: "Church Governance, Ethics & Accountability", topics: ["Principles of church governance", "Leadership structures and responsibilities", "Ethical decision-making", "Financial stewardship and accountability", "Transparency and responsible resource management", "Leadership policies and procedures", "Risk management in church organizations", "Safeguarding and protection of vulnerable people"] },
          { title: "Conflict Resolution & Pastoral Leadership", topics: ["Understanding conflict in church environments", "Sources of organizational and interpersonal conflict", "Biblical approaches to conflict resolution", "Mediation and reconciliation", "Difficult conversations", "Managing leadership disagreements", "Building trust and restoring relationships", "Pastoral care and people-centred leadership"] },
          { title: "Leadership Development & Succession", topics: ["Identifying emerging church leaders", "Mentorship and coaching", "Leadership pipeline development", "Succession planning", "Preparing the next generation of leaders", "Knowledge transfer and continuity", "Developing ministry leadership competencies", "Building sustainable leadership structures"] },
          { title: "Community Transformation & Social Impact", topics: ["The role of the church in community development", "Community engagement and partnerships", "Social responsibility and outreach", "Youth and family empowerment", "Supporting vulnerable communities", "Church-led social impact initiatives", "Partnerships with government, NGOs and community organizations", "Measuring social and community impact"] },
          { title: "Responsible AI for Ministry Administration", topics: ["AI-assisted ministry administration","Communication and programme planning","Confidentiality and responsible use"] },
        ],
      },
    ],
  },
  {
    name: "Functional Excellence Programmes",
    description: "Programmes designed to strengthen functional capabilities and improve organizational performance.",
    programmes: [
      {
        slug: "performance-management-accountability",
        title: "Performance Management & Accountability Programme",
        overview: "A practical programme focused on building performance-driven cultures, accountability systems and effective performance management practices.",
        modules: [
          { title: "Performance Management Foundations", topics: ["Understanding performance management", "Performance expectations", "Goal setting", "Performance indicators"] },
          { title: "Accountability & Results", topics: ["Building accountability", "Monitoring performance", "Performance reviews", "Continuous improvement"] },
          { title: "AI-Assisted Performance Monitoring and Reporting", topics: ["Performance reporting","Monitoring and analysis","Human review of performance information"] },
        ],
      },
      {
        slug: "customer-experience-service-leadership",
        title: "Customer Experience & Service Leadership Programme",
        overview: "A programme designed to equip organizations with the skills and systems required to deliver exceptional customer experiences and build customer-focused cultures.",
        modules: [
          { title: "Customer Experience Foundations", topics: ["Understanding customer expectations", "Customer journey mapping", "Customer needs analysis", "Service excellence"] },
          { title: "Service Leadership", topics: ["Leading customer-focused teams", "Service recovery", "Managing difficult customers", "Building customer loyalty"] },
          { title: "AI for Customer Communication and Service Improvement", topics: ["AI-assisted customer communication","Service feedback analysis","Human oversight and service improvement"] },
        ],
      },
      {
        slug: "culture-by-design-organizational-culture-values",
        title: "Culture by Design: Organizational Culture & Values Programme",
        overview: "A programme designed to help organizations intentionally build cultures that align people, values, behaviours and organizational strategy.",
        modules: [
          { title: "Understanding Organizational Culture", topics: ["Culture fundamentals", "Organizational values", "Workplace behaviours", "Culture assessment"] },
          { title: "Building a High-Performance Culture", topics: ["Values-driven leadership", "Employee engagement", "Culture transformation", "Embedding organizational values"] },
          { title: "Building an AI-Ready Organizational Culture", topics: ["Organizational AI readiness","Employee engagement","AI adoption and change management"] },
        ],
      },
    ],
  },
  {
    name: "Specialized Programmes",
    description: "Targeted programmes designed to deepen leadership capacity, build specialized skills, and create meaningful organizational and social impact.",
    programmes: [
      {
        slug: "transformational-purpose-driven-leadership",
        title: "Transformational & Purpose-Driven Leadership Programme",
        overview: "A specialized programme designed to equip leaders with the mindset and capabilities required to lead meaningful transformation and create purpose-driven organizations.",
        modules: [
          { title: "Transformational Leadership", topics: ["Transformational leadership principles", "Leading change", "Leadership vision", "Innovation and transformation"] },
          { title: "Purpose-Driven Leadership", topics: ["Purpose and organizational identity", "Values-driven leadership", "Stakeholder impact", "Creating sustainable impact"] },
          { title: "Leading Organizational Transformation in the AI Era", topics: ["AI-enabled organizational change","People-centred innovation","Responsible transformation"] },
        ],
      },
      {
        slug: "trainer-of-trainers-facilitation-learning-excellence",
        title: "Trainer of Trainers (ToT): Facilitation & Learning Excellence Programme",
        overview: "A specialized programme designed to equip trainers and facilitators with the knowledge and practical skills required to design, deliver and evaluate effective learning experiences.",
        modules: [
          { title: "Training & Facilitation Foundations", topics: ["Adult learning principles", "Training needs analysis", "Facilitation techniques", "Trainer effectiveness"] },
          { title: "Learning Design & Delivery", topics: ["Training programme design", "Learning objectives", "Interactive learning", "Training evaluation"] },
          { title: "AI-Assisted Instructional Design and Facilitation", topics: ["AI-assisted learning materials","Facilitation and instructional design","Assessment development and verification"] },
        ],
      },
      {
        slug: "ilo-siyb-business-training",
        title: "ILO – SIYB Business Training",
        overview: "The International Labour Organization (ILO) Start and Improve Your Business (SIYB) training is a global program designed to help small business owners and new entrepreneurs build essential skills to start, run, and grow profitable enterprises",
        modules: [
          { title: "Generate Your Business Idea (GYB)", topics: ["Entrepreneurial self-assessment", "Identifying business opportunities", "Generating potential business ideas", "Screening and comparing business ideas", "Selecting a feasible business idea", "Developing a concrete business idea for implementation"] },
          { title: "Start Your Business (SYB)", topics: ["Assessing readiness to start a business", "Developing a business plan", "Market and customer analysis", "Marketing and sales planning", "Human resource requirements", "Costing and pricing", "Licences, permits and legal requirements", "Start-up capital and financial forecasting", "Assessing business viability"] },
          { title: "Improve Your Business (IYB)", topics: ["Marketing", "Costing", "Buying and stock control", "Record keeping", "Planning for your business", "People and productivity"] },
          { title: "Expand Your Business (EYB)", topics: ["Assessing business growth readiness", "Developing a business growth strategy", "Marketing for growth", "Operations management", "Human resource planning", "Financial management", "Strategic management", "Preparing a business growth plan"] },
          { title: "SIYB Business Game", topics: ["Business planning and decision-making", "Organizing business operations", "Production and resource management", "Buying and selling decisions", "Costing and pricing decisions", "Competition and market dynamics", "Negotiation and cooperation", "Understanding the financial impact of business decisions"] },
          { title: "Digitalize Your Business Module", topics: ["Assessing business digital readiness", "Building an online business presence", "Digital marketing and customer engagement", "Using e-commerce to sell products and services", "Digitalizing business processes and operations", "Selecting appropriate digital tools", "Developing a practical business digitalization strategy"] },
          { title: "Practical AI for Entrepreneurship (Supplementary Limitless Module — not an official ILO–SIYB module)", topics: ["AI-assisted market research","Marketing and customer engagement","Business planning and management"] },
        ],
      },
    ],
  },
  {
    "name": "AI Training & Digital Transformation",
    "description": "Practical AI capacity building for workplace productivity, leadership, responsible adoption and digital workflow improvement.",
    "programmes": [
      {
        "slug": "ai-workplace-productivity",
        "title": "Artificial Intelligence for Workplace Productivity",
        "overview": "Practical AI training for employees, administrators, project officers, managers and professional teams, focused on responsible workplace application.",
        "modules": [
          {
            "title": "AI Fundamentals and Workplace Applications",
            "topics": [
              "AI fundamentals",
              "Workplace applications"
            ]
          },
          {
            "title": "Prompt Engineering and Effective AI Communication",
            "topics": [
              "Effective prompts",
              "Communicating instructions and context"
            ]
          },
          {
            "title": "AI-Assisted Document Preparation, Research and Reporting",
            "topics": [
              "Document preparation",
              "Research and reporting"
            ]
          },
          {
            "title": "AI for Presentations, Spreadsheets and Workplace Planning",
            "topics": [
              "Presentations",
              "Spreadsheets",
              "Workplace planning"
            ]
          },
          {
            "title": "Department-Specific Productivity Applications",
            "topics": [
              "Departmental use cases",
              "Practical productivity workflows"
            ]
          },
          {
            "title": "Responsible AI, Information Accuracy and Data Protection",
            "topics": [
              "Output verification",
              "Confidentiality and data protection"
            ]
          },
          {
            "title": "Practical Workplace Exercises and Competency Assessment",
            "topics": [
              "Hands-on workplace exercises",
              "Competency assessment"
            ]
          }
        ]
      },
      {
        "slug": "ai-leadership-strategy-decision-making",
        "title": "AI for Leadership, Strategy and Decision-Making",
        "overview": "Designed for CEOs, senior managers, executives, boards and organizational leaders seeking to understand AI's strategic implications and lead responsible adoption.",
        "modules": [
          {
            "title": "Understanding AI's Strategic Implications",
            "topics": [
              "Strategic implications of AI"
            ]
          },
          {
            "title": "AI Opportunities and Organizational Competitiveness",
            "topics": [
              "AI opportunities",
              "Organizational competitiveness"
            ]
          },
          {
            "title": "AI-Assisted Research and Decision Support",
            "topics": [
              "Research and analysis",
              "Human-led decision support"
            ]
          },
          {
            "title": "AI Governance, Risk and Accountability",
            "topics": [
              "Governance",
              "Risk and accountability"
            ]
          },
          {
            "title": "Leading Employees Through Digital Transformation",
            "topics": [
              "Employee engagement",
              "Leading digital change"
            ]
          },
          {
            "title": "AI Investment Prioritization and Return-on-Investment Assessment",
            "topics": [
              "Investment prioritization",
              "ROI assessment"
            ]
          },
          {
            "title": "Developing an Organizational AI Adoption Strategy",
            "topics": [
              "AI readiness",
              "Adoption strategy"
            ]
          }
        ]
      },
      {
        "slug": "ai-automation-digital-workflow-transformation",
        "title": "AI Automation and Digital Workflow Transformation",
        "overview": "Designed for operations teams, departmental managers, administrators and organizations seeking practical process improvements through responsible AI-assisted workflows.",
        "modules": [
          {
            "title": "Identifying Repetitive and Time-Consuming Tasks",
            "topics": [
              "Task identification",
              "Process improvement opportunities"
            ]
          },
          {
            "title": "Mapping and Redesigning Organizational Workflows",
            "topics": [
              "Workflow mapping",
              "Workflow redesign"
            ]
          },
          {
            "title": "Introduction to AI-Assisted Automation",
            "topics": [
              "Automation fundamentals",
              "AI-assisted processes"
            ]
          },
          {
            "title": "No-Code and Low-Code Productivity Solutions",
            "topics": [
              "No-code tools",
              "Low-code productivity solutions"
            ]
          },
          {
            "title": "Integrating Approved Digital Tools",
            "topics": [
              "Approved tool selection",
              "Digital tool integration"
            ]
          },
          {
            "title": "Workflow Testing, Information Security and Human Oversight",
            "topics": [
              "Testing",
              "Information security",
              "Human oversight"
            ]
          },
          {
            "title": "Monitoring Operational Improvements",
            "topics": [
              "Baseline measures",
              "Monitoring operational outcomes"
            ]
          }
        ]
      }
    ]
  },
];

export const allProgrammes = clusters.flatMap((cluster) => cluster.programmes);
export const findProgrammeBySlug = (slug: string) => allProgrammes.find((programme) => programme.slug === slug);
