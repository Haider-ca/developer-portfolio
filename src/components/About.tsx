import {
  ArrowRight,
  Code2,
  Laptop,
  ShieldCheck,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Laptop,
    title: "10+ Years",
    text: "IT Support & Technical Troubleshooting Experience",
  },
  {
    icon: Code2,
    title: "BCIT CST",
    text: "Computer Systems Technology Diploma",
  },
  {
    icon: ShieldCheck,
    title: "Full-Stack",
    text: "Mobile, Web, Backend & Microservices",
  },
  {
    icon: Users,
    title: "Technical Lead",
    text: "Agile Team Collaboration & Architecture Coordination",
  },
];

export default function About() {
  return (
    <div id="about" className="w-full">
      <p className="section-label">About Me</p>

      <h2 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
        Full-Stack & Mobile Application Developer
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-slate-600">
        Full-stack and mobile application developer with a Bachelor’s degree in
        Software Engineering and a diploma in Computer Systems Technology (CST)
        from BCIT.
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
        Experienced in React Native, Expo, TypeScript, JavaScript, Node.js,
        Express.js, Python, PostgreSQL, MongoDB, REST APIs, JWT
        authentication, WebSockets, Docker, GitHub, and AI-integrated
        applications.
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
        Passionate about building scalable software systems, backend
        architectures, mobile applications, AI-assisted platforms, and
        microservices-based solutions with strong focus on clean architecture,
        performance, maintainability, and user experience.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {highlights.map((item) => (
          <div key={item.title} className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <item.icon size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-1 text-base leading-7 text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <a href="#projects" className="btn-light mt-10">
        View Projects <ArrowRight size={18} />
      </a>
    </div>
  );
}