export const personalInfo = {
  name: "Mohammad Saleh Askarzadeh",
  title: "Backend Developer",
  location: "Kerman, Iran",
  email: "mersadaskarzadeh@gmail.com",
  github: "https://github.com/SalehGoML",
  linkedin: "https://linkedin.com/in/mohammad-saleh-askarzadeh-go/",
  bio: "Backend developer with 1.5 years of experience in designing and developing RESTful APIs and gRPC services using Golang. Proficient with PostgreSQL, MySQL, and MongoDB. Skilled in Docker and Docker Compose for containerization, familiar with CI/CD pipelines and DevOps principles including monitoring, logging tools, and Infrastructure as Code. Also experienced in full-stack development with Next.js, React, and TypeScript. Knowledgeable in Linux, networking, and security fundamentals (Network+, Security+).",
};

export const skills = [
  {
    category: "Languages",
    items: ["Go (Advanced)", "TypeScript", "HTML", "CSS", "PHP (Basic)"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Backend & API",
    items: ["RESTful API", "gRPC", "Microservices", "WebSocket"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Docker",
      "Docker Compose",
      "Dockerfile",
      "CI/CD Pipelines",
      "Git",
      "Linux",
      "Monitoring & Logging",
      "Infrastructure as Code",
    ],
  },
  {
    category: "Concepts",
    items: [
      "System Design",
      "Cloud Native",
      "Network+",
      "Security+",
      "Scalable Architecture",
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  website: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Ros",
    role: "Developer",
    period: "Feb 2025 — Present",
    website: "https://rosbrand.ir",
    description:
      "Designing and developing the company website end-to-end using Next.js, React, and TypeScript on the frontend.",
  },
  {
    company: "Rafak",
    role: "Developer (Remote)",
    period: "Nov 2024 — Present",
    website: "https://pazireshdr.ir",
    description:
      "Developing a new version of an online doctor appointment platform (Paziresh Doctor) with new features. Working with Next.js, React, and TypeScript on the frontend and Golang on the backend. Building doctor club, health records, admin panels, and doctor panels. Familiar with WebSocket integration.",
  },
  {
    company: "Rahkare Sanat Avapardaz",
    role: "Golang Intern",
    period: "Jul 2024 — Feb 2025",
    website: "https://rahkarsanat.ir",
    description:
      "Learned Golang fundamentals and applied them through hands-on training tasks. Worked with MySQL, PostgreSQL, and MongoDB databases. Designed RESTful APIs and gRPC services. Explored Cloud Native and System Design principles, Microservice architecture, Docker and Docker Compose for containerization, and CI/CD deployment concepts.",
  },
  {
    company: "esperlos",
    role: "Frontend Developer",
    period: "Sep 2023 — Mar 2024",
    website: "https://esperlos.ir",
    description: "Worked with HTML, CSS, and PHP at a beginner level.",
  },
];

export const projects = [
  {
    title: "Paziresh Doctor",
    description:
      "Online appointment booking platform for medical reception. Built full-stack with Next.js, React, TypeScript on the frontend and Golang on the backend.",
    url: "https://pazireshdr.ir",
    tags: ["Full-Stack", "Next.js", "Golang", "Production"],
  },
  {
    title: "ROS",
    description:
      "End-to-end company website with user and admin dashboards. Built with Next.js, React, TypeScript on the frontend and Golang on the backend. Includes SEO optimization and production deployment.",
    url: "https://rosbrand.ir",
    tags: ["Full-Stack", "Next.js", "Golang", "Production"],
  },
];

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];