export const portfolioData = {
  hero: {
    title: "Hi, I'm [Your Name]",
    subtitle: "Backend Developer & Systems Architect",
    description: "I specialize in designing and building scalable, secure, and performant backend systems. From microservices to database optimization, I love solving complex infrastructure challenges.",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
  },
  about: {
    bio: "With a strong foundation in computer science and a passion for distributed systems, I have spent the last few years developing robust APIs, managing complex databases, and ensuring high availability for web applications. I thrive in environments where performance and reliability are paramount.",
    highlights: [
      "Expertise in RESTful and GraphQL API design",
      "Strong background in database tuning (SQL & NoSQL)",
      "Experience with containerization and cloud deployments",
      "Focus on clean code, automated testing, and CI/CD"
    ]
  },
  skills: {
    languages: ["Python", "Go", "Node.js", "Java", "SQL"],
    frameworks: ["Express", "FastAPI", "Spring Boot", "Django"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    infrastructure: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
  },
  projects: [
    {
      title: "High-Throughput Analytics API",
      description: "Designed and implemented an analytics ingestion API capable of handling 10k+ requests per second. Utilized Go for the API layer and Kafka for message queuing to ensure zero data loss.",
      techStack: ["Go", "Kafka", "PostgreSQL", "Redis"],
      link: "https://github.com",
      architecture: "Client -> Go API -> Kafka -> Consumer -> DB",
    },
    {
      title: "Microservices Auth Gateway",
      description: "Built a centralized authentication and authorization gateway for a microservices ecosystem using JWT and Redis for token blacklisting. Reduced auth latency by 40%.",
      techStack: ["Node.js", "Express", "Redis", "Docker"],
      link: "https://github.com",
      architecture: "Client -> Auth Gateway -> Downstream Services",
    },
    {
      title: "Database Migration CLI",
      description: "Created a custom CLI tool in Python to manage complex, multi-tenant database migrations across hundreds of schemas safely and predictably.",
      techStack: ["Python", "Typer", "PostgreSQL"],
      link: "https://github.com",
      architecture: "CLI -> DB Engine",
    }
  ],
  contact: {
    email: "hello@example.com",
    message: "I'm always open to discussing backend architecture, system design, or new opportunities."
  }
};
