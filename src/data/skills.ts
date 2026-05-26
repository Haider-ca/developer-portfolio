import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGithub,
  SiGitlab,
  SiVercel,
  SiPostman,
  SiFigma,
  SiLinux,
  SiSelenium,
  SiDotnet,
  SiSocketdotio,
  SiBootstrap,
  SiC,
  SiCplusplus,
  SiSharp,
  SiKotlin,
  SiSwift,
  SiPrisma,
  SiJsonwebtokens,
  SiRailway,
  SiXcode,
  SiSqlite,
} from "react-icons/si";

import {
  FaJava,
  FaAws,
  FaGitAlt,
  FaWindows,
  FaProjectDiagram,
  FaUsersCog,
  FaServer,
  FaApple,
  FaMicrosoft,
  FaNetworkWired,
  FaShieldAlt,
  FaSitemap,
} from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";

export type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

export type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "React Native", icon: TbBrandReactNative, color: "text-sky-500" },
      { name: "Expo", icon: SiReact, color: "text-slate-700" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-600" },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss, color: "text-blue-500" },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-800" },
      { name: "Python", icon: SiPython, color: "text-blue-600" },
      { name: "Java", icon: FaJava, color: "text-red-600" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "text-violet-600" },
      { name: "REST APIs", icon: FaServer, color: "text-slate-700" },
      { name: "WebSockets", icon: SiSocketdotio, color: "text-slate-900" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-slate-700" },
      { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-600" },
      { name: "Prisma", icon: SiPrisma, color: "text-slate-800" },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: SiC, color: "text-blue-600" },
      { name: "C++", icon: SiCplusplus, color: "text-blue-700" },
      { name: "C#", icon: SiSharp, color: "text-purple-600" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "Kotlin", icon: SiKotlin, color: "text-violet-600" },
      { name: "Swift", icon: SiSwift, color: "text-orange-500" },
      { name: "Python", icon: SiPython, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    ],
  },

  {
    title: "Database & Systems",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MySQL", icon: SiMysql, color: "text-sky-600" },
      { name: "SQLite", icon: SiSqlite, color: "text-blue-500" },
      { name: "Redis", icon: SiRedis, color: "text-red-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
      { name: "Windows", icon: FaWindows, color: "text-sky-500" },
      { name: "macOS", icon: FaApple, color: "text-slate-700" },
    ],
  },

  {
    title: "Tools & Engineering",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, color: "text-slate-900" },
      { name: "GitLab", icon: SiGitlab, color: "text-orange-600" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      { name: "Figma", icon: SiFigma, color: "text-pink-500" },
      { name: "Selenium", icon: SiSelenium, color: "text-green-700" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
      { name: "Azure", icon: FaMicrosoft, color: "text-blue-600" },
      { name: "Vercel", icon: SiVercel, color: "text-black" },
      { name: "Railway", icon: SiRailway, color: "text-purple-600" },
      { name: "Xcode", icon: SiXcode, color: "text-slate-700" },
    ],
  },

  {
    title: "Architecture & Leadership",
    skills: [
      { name: "Microservices", icon: FaProjectDiagram, color: "text-blue-700" },
      { name: "OOP", icon: FaServer, color: "text-slate-700" },
      { name: "MVC", icon: FaProjectDiagram, color: "text-indigo-600" },
      { name: "Agile/Scrum", icon: FaUsersCog, color: "text-cyan-600" },
      { name: "SDLC", icon: FaProjectDiagram, color: "text-violet-600" },
      { name: "CI/CD", icon: FaServer, color: "text-green-600" },
      { name: "QA Testing", icon: SiSelenium, color: "text-green-600" },
      { name: "Testing", icon: SiPostman, color: "text-orange-500" },
      { name: "API Gateway", icon: FaNetworkWired, color: "text-blue-600" },
      { name: "Security", icon: FaShieldAlt, color: "text-red-500" },
      { name: "System Design", icon: FaProjectDiagram, color: "text-indigo-600" },
      { name: "Scalable Architecture", icon: FaSitemap, color: "text-purple-600" },
      { name: "Technical Leadership", icon: FaUsersCog, color: "text-orange-600" },
    ],
  },
];