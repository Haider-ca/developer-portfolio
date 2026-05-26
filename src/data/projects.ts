export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Fall Protection Plan Mobile Application",

    description:
      "Industry-focused mobile application for creating digital fall protection plans with AI hazard detection, worksite diagrams, PDF export, annotations, and rescue procedure recommendations.",

    image: "/images/fpp.png",

    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AI",
    ],
  },

  {
    title: "EquiTip Platform Modernization",

    description:
      "Microservices-based modernization project focused on backend architecture redesign, JWT authentication, PostgreSQL migration, scalable APIs, and Python calculation services.",

    image: "/images/equitip.png",

    tags: [
      "Node.js",
      "PostgreSQL",
      "Microservices",
      "JWT",
      "Python",
    ],
  },

  {
    title: "Accessibility Intelligence System",

    description:
      "AI-driven accessibility research platform that analyzes wheelchair mobility conditions using mobile sensor data, GPS route tracking, analytics dashboards, scalable microservices architecture, and cloud-deployed accessibility risk evaluation systems.",

    image: "/images/accessibility.png",

    tags: [
      "React Native",
      "Next.js",
      "Node.js",
      "Microservices",
      "Railway",
      "AI",
    ],
  },

  {
    title: "PathPal Accessibility Platform",

    description:
      "Community-driven accessibility platform that helps users discover and share accessible locations using interactive maps, navigation, crowd-sourced POIs, route saving, accessibility-focused navigation, and real-time location services.",

    image: "/images/pathpal.png",

    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mapbox",
      "Accessibility",
      "Bootstrap",
    ],
  },

  {
    title: "Developer Portfolio Website",

    description:
      "Modern responsive portfolio website showcasing software projects, technical skills, experience, resume, and contact links using a clean developer-focused UI.",

    image: "/images/portfolio.png",

    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },

  {
    title: "Java Tawla (Backgammon) Game System",

    description:
      "Object-oriented Java implementation of the traditional Tawla/Backgammon game featuring turn-based gameplay, dice mechanics, rule validation, player management, and interactive desktop UI.",

    image: "/images/tawla-java.png",

    tags: [
      "Java",
      "OOP",
      "Algorithms",
      "Game Logic",
      "Java Swing",
    ],
  },
];