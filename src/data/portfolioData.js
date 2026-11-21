export const portfolioData = {
  personal: {
    name: "Bunrong Vyrom",
    title: "Senior Fullstack & Enterprise Backend Developer",
    subtitle: "HRMS Specialist @ ABA Bank | Ex-Fintech Backend @ UMPAY",
    bio: "Passionate software engineer with 8+ years of expertise architecting high-availability enterprise internal systems, digital wallet backends, and complex ERP workflows. Specializing in mission-critical HRMS platforms at ABA Bank, secure online payment architectures (UMPAY APP), and robust Laravel ERP solutions.",
    location: "St 271, Tek Tlar, Sen Sok, Phnom Penh, Cambodia",
    email: "vyrom99997@gmail.com",
    phone: "+855 96 742 5680",
    phoneDisplay: "+855 96 742 5680",
    telegram: "@Bunrong_Vyrom",
    telegramUrl: "https://t.me/Bunrong_Vyrom",
    githubUrl: "https://github.com/vyrom",
    linkedinUrl: "https://www.linkedin.com/in/bunrong-vyrom",
    resumeUrl: "#contact", // or link to downloadable CV
    stats: [
      { label: "Employees Supported", value: "5,000+" },
      { label: "Enterprise Platforms", value: "3+" },
      { label: "Enterprise Deployments", value: "10+" },
      { label: "Years Experience", value: "8+" }
    ]
  },

  hrmsModules: [
    {
      id: "onboarding",
      title: "Onboarding & Offboarding",
      icon: "UserCheck",
      description: "Automated end-to-end employee lifecycle workflows, multi-department IT provisioning, asset handovers, and digital exit clearance checklists.",
      tags: ["Workflow Automation", "State Machine", "Audit Logs", "Asset Tracking"]
    },
    {
      id: "ess",
      title: "Employee Self-Service (ESS)",
      icon: "Users",
      description: "Intuitive self-service portal empowering thousands of employees to update personal records, submit requests, view company announcements, and access payslips.",
      tags: ["Responsive Portal", "REST APIs", "Document Requests", "Role-Based Access"]
    },
    {
      id: "leave",
      title: "Leave & Absence Management",
      icon: "CalendarCheck",
      description: "Sophisticated leave balance accruals, holiday calendar engines, dynamic policy validation, and hierarchical multi-tier manager approval chains.",
      tags: ["Multi-tier Approval", "Accrual Logic", "Holiday Engine", "Policy Enforcement"]
    },
    {
      id: "ot",
      title: "Overtime (OT) Engine",
      icon: "Clock",
      description: "Automated overtime request and tiered rate calculation engine (weekday, weekend, public holiday) with real-time manager approvals and payroll synchronization.",
      tags: ["Tiered Calculations", "Payroll Sync", "Approval Pipeline", "Compliance"]
    },
    {
      id: "shift",
      title: "Shift & Roster Management",
      icon: "CalendarDays",
      description: "24/7 rotational shift scheduling, automated team roster generation, shift swap requests, and seamless reconciliation with biometric punch machine records.",
      tags: ["Biometric Sync", "Rotational Rosters", "Shift Swaps", "Exception Handling"]
    },
    {
      id: "recruitment",
      title: "Recruitment & ATS Module",
      icon: "Briefcase",
      description: "Streamlined applicant tracking pipeline from job posting and resume parsing to interview stage evaluation and automated onboarding transition.",
      tags: ["Applicant Tracking", "Interview Pipeline", "Scoring System", "HR Automation"]
    }
  ],

  skills: {
    backend: [
      { name: "Laravel", level: "Expert" },
      { name: "Node.js / Express", level: "Advanced" },
      { name: "NestJS", level: "Advanced" },
      { name: "PHP", level: "Expert" },
      { name: "RESTful & GraphQL APIs", level: "Expert" },
      { name: "State Machines & Workflows", level: "Expert" }
    ],
    fintechErp: [
      { name: "HRMS Enterprise Architecture", level: "Specialist" },
      { name: "Digital Wallets (UMPAY)", level: "Specialist" },
      { name: "Online Payment Gateways", level: "Advanced" },
      { name: "Bus Ticketing & ERP Systems", level: "Expert" },
      { name: "Biometric Device Integration", level: "Advanced" },
      { name: "Role-Based Access Control (RBAC)", level: "Expert" }
    ],
    databases: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Expert" },
      { name: "Redis (Caching & Queues)", level: "Advanced" },
      { name: "Database Schema Design", level: "Expert" },
      { name: "Query Tuning & Indexing", level: "Advanced" }
    ],
    frontend: [
      { name: "React 19", level: "Advanced" },
      { name: "Tailwind CSS v4", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "HTML5 & Modern CSS3", level: "Expert" },
      { name: "Flutter (Mobile)", level: "Intermediate" }
    ],
    devopsTools: [
      { name: "Docker & Containers", level: "Intermediate" },
      { name: "Linux & Shell Scripting", level: "Advanced" },
      { name: "Git & GitHub Workflows", level: "Expert" },
      { name: "WordPress Core & Custom Plugins", level: "Expert" },
      { name: "Network Infrastructure", level: "Advanced" }
    ]
  },

  experience: [
    {
      company: "ABA Bank",
      role: "HRMS Developer",
      period: "2024 – Present",
      location: "Phnom Penh, Cambodia",
      badge: "Current Role",
      description: "Spearheading the engineering of mission-critical internal Human Resource Management Systems (HRMS) serving 5,000+ employees across Cambodia's leading commercial bank.",
      achievements: [
        "Architected core HR automation modules including Onboarding, Offboarding, Employee Self-Service (ESS), and Recruitment/ATS.",
        "Engineered the hierarchical Leave Management and Overtime (OT) calculation engines with multi-level approval state machines.",
        "Implemented 24/7 Shift & Roster management, integrating seamlessly with biometric attendance punch devices and exception reporting.",
        "Optimized complex PostgreSQL transactions and established robust Role-Based Access Control (RBAC) to ensure employee data security and compliance."
      ],
      technologies: ["Node.js", "NestJS", "PostgreSQL", "React", "Redis", "Tailwind CSS", "RBAC"]
    },
    {
      company: "Infinity Information",
      role: "Backend Developer (UMPAY APP)",
      period: "2022 – 2024",
      location: "Phnom Penh, Cambodia",
      badge: "Fintech & Payments",
      description: "Engineered scalable client-facing and administrative backend services for UMPAY APP, a high-growth digital wallet and online payment platform.",
      achievements: [
        "Developed secure financial APIs for digital wallet operations: balance management, top-ups, peer-to-peer transfers, and merchant checkouts.",
        "Built comprehensive Admin Back-Office consoles for real-time transaction monitoring, fraud risk checks, and financial reconciliation.",
        "Integrated the payment gateway with multiple internal and external enterprise systems, guaranteeing ACID transaction integrity and zero data loss.",
        "Implemented high-performance caching and rate limiting with Redis to protect critical financial endpoints under peak traffic."
      ],
      technologies: ["Express.js", "Node.js", "PostgreSQL", "Payment Gateways", "Redis", "REST APIs"]
    },
    {
      company: "CloudNet Cambodia",
      role: "Fullstack Developer (Laravel & ERP)",
      period: "2018 – 2022",
      location: "Phnom Penh, Cambodia",
      badge: "Enterprise ERP & Web",
      description: "Led fullstack development of custom enterprise ERP applications and high-profile corporate web portals utilizing Laravel, PHP, and WordPress.",
      achievements: [
        "Architected and deployed a complete Bus Ticket Booking ERP System featuring dedicated Admin management and Counter Cashier ticketing portals, dynamic seat allocation, and route scheduling.",
        "Developed custom ERP solutions including a Wedding Photo Printing & Studio Management system and comprehensive School Management software.",
        "Engineered major corporate and institutional web platforms for prestigious clients including the Royal University of Law and Economics (RULE), Active People Microfinance, and Dai-ichi Life Insurance.",
        "Built custom APIs integrating Google Maps, payment services, SMS notifications, and managed underlying Linux server routing and infrastructure."
      ],
      technologies: ["Laravel", "PHP", "MySQL", "WordPress", "JavaScript", "Linux / Servers"]
    },
    {
      company: "IT Global",
      role: "IT Support & Web Design",
      period: "2017 – 2018",
      location: "Phnom Penh, Cambodia",
      badge: "Systems & Web",
      description: "Delivered responsive web design, CMS integrations, network setup, hardware troubleshooting, and client technical support.",
      achievements: [
        "Designed and maintained responsive landing pages and customized CMS platforms for business clients.",
        "Managed local network configurations, firewalls, and workstation hardware across the organization."
      ],
      technologies: ["HTML/CSS", "JavaScript", "CMS", "Network Infrastructure"]
    },
    {
      company: "Narita Vespa",
      role: "Graphic & Visual Designer",
      period: "2015 – 2016",
      location: "Phnom Penh, Cambodia",
      badge: "Design Foundation",
      description: "Created visual identities, brand illustrations, marketing materials, and digital graphics, forming a strong UI/UX design foundation.",
      achievements: [
        "Designed commercial brand assets and digital collaterals that elevated brand recognition.",
        "Applied user-centric visual design principles that now inform frontend UI development."
      ],
      technologies: ["Photoshop", "Illustrator", "Visual Design", "UI Layout"]
    }
  ],

  projects: [
    {
      id: "aba-hrms",
      title: "ABA Bank Enterprise HRMS Platform",
      category: "Enterprise Internal System",
      client: "ABA Bank",
      description: "A centralized workforce automation ecosystem powering daily operations for 5,000+ bank employees. Features multi-tier approval state machines for leaves, overtime calculations, shift scheduling, and biometric machine reconciliation.",
      metrics: "5,000+ Active Users • 99.9% Uptime • 6 Core Modules",
      tags: ["NestJS", "PostgreSQL", "React", "Redis", "RBAC", "Biometrics"],
      architecture: "Client Portal -> API Gateway -> Workflow State Machine -> PostgreSQL / Biometric Sync",
      featured: true,
      github: "https://github.com/vyrom"
    },
    {
      id: "umpay-wallet",
      title: "UMPAY Digital Wallet & Payment Platform",
      category: "Fintech & Payments",
      client: "Infinity Information",
      description: "Robust administrative and client backend services driving the UMPAY digital wallet ecosystem. Manages secure financial transactions, peer-to-peer transfers, cashier top-ups, and automated merchant reconciliation.",
      metrics: "Sub-50ms Payment Processing • Real-time Admin Console",
      tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Payment Gateways"],
      architecture: "Mobile/Web Client -> Security Layer -> Wallet Ledger Engine -> Payment Gateway",
      featured: true,
      github: "https://github.com/vyrom"
    },
    {
      id: "bus-ticket-erp",
      title: "Smart Bus Ticket Booking & Terminal ERP",
      category: "ERP & Ticketing System",
      client: "CloudNet Cambodia",
      description: "Comprehensive bus transportation ERP providing dual role capabilities: an Admin command center for route and fleet management, and a high-speed Counter Cashier POS interface for seat selection and ticket issuance.",
      metrics: "Multi-station Routing • Interactive Seat Mapping",
      tags: ["Laravel", "PHP", "MySQL", "REST API", "Blade", "POS"],
      architecture: "Counter POS / Web -> Laravel Core -> Seat Lock Engine -> MySQL",
      featured: true,
      github: "https://github.com/vyrom"
    },
    {
      id: "wedding-photo-erp",
      title: "Wedding Photo Printing & Studio Management ERP",
      category: "Custom ERP & Automation",
      client: "CloudNet Cambodia",
      description: "Specialized workflow automation ERP for high-volume wedding photo studios. Tracks orders from raw photo intake to color correction, lab printing stages, packaging, and client delivery.",
      metrics: "End-to-end Print Lab Tracking • Automated Status Alerts",
      tags: ["Laravel", "MySQL", "PHP", "Cloud Storage", "Workflow Engine"],
      architecture: "Studio Order -> Image Pipeline -> Lab Station Queue -> Client Delivery",
      featured: false,
      github: "https://github.com/vyrom"
    },
    {
      id: "enterprise-portals",
      title: "High-Traffic Corporate Web Platforms",
      category: "Institutional & Financial Portals",
      client: "RULE, Active People Finance, Dai-ichi Life",
      description: "Engineered high-performance web platforms for Cambodia's premier institutions including Royal University of Law and Economics (RULE), Active People Microfinance, and Dai-ichi Life Insurance.",
      metrics: "High Concurrency • SEO Optimized • Secure Forms",
      tags: ["WordPress", "PHP", "Custom APIs", "Responsive UI", "Security"],
      architecture: "CDN Edge -> Caching Layer -> Custom PHP Engine -> MySQL",
      featured: false,
      github: "https://github.com/vyrom"
    }
  ],

  events: [
    {
      id: "event-1",
      title: "Cambodia Fintech & Payment Security Summit",
      type: "Conference & Seminar",
      role: "Attendee & Participant",
      date: "2024",
      location: "Phnom Penh",
      description: "Explored emerging digital wallet protocols, financial API compliance, fraud prevention, and real-time transaction reconciliation in Southeast Asian fintech.",
      tag: "Fintech & Payments"
    },
    {
      id: "event-2",
      title: "Enterprise Architecture & HR Tech Knowledge Sharing",
      type: "Internal Tech Talk",
      role: "Speaker / Presenter",
      date: "2024",
      location: "ABA Bank Tech Hub",
      description: "Presented best practices on 'Architecting Multi-tier Approval State Machines and Biometric Punch Sync in Modern HRMS Platforms'.",
      tag: "Enterprise HRMS"
    },
    {
      id: "event-3",
      title: "BarCamp & Developer Community Meetups",
      type: "Tech Community",
      role: "Active Member",
      date: "2023 – 2024",
      location: "Phnom Penh",
      description: "Participated in workshops covering modern API design, microservices containerization with Docker, and fullstack Laravel performance optimizations.",
      tag: "Developer Ecosystem"
    },
    {
      id: "event-4",
      title: "High-Concurrency Database Optimization Workshop",
      type: "Technical Workshop",
      role: "Participant",
      date: "2023",
      location: "Phnom Penh",
      description: "Deep dive into PostgreSQL index tuning, connection pooling with PgBouncer, and Redis caching strategies for high-throughput enterprise systems.",
      tag: "Databases & DevOps"
    }
  ]
};
