import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" className="text-3xl font-black">
            H<span className="text-blue-500">A</span>
          </a>
          <p className="mt-2 text-sm text-white/60">
            © 2026 {PROFILE.name}. All rights reserved.
          </p>
        </div>

        <p className="text-sm text-white/70">
          Built with ❤️ using React, Tailwind CSS, and Framer Motion.
        </p>

        <div className="flex gap-3">
          <a className="icon-button" href={PROFILE.github}>
            <FaGithub />
          </a>
          <a className="icon-button" href={PROFILE.linkedin}>
            <FaLinkedin />
          </a>
          <a className="icon-button" href="#home">
            <ArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}