import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS, PROFILE } from "../data/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-3xl font-black tracking-tight text-white">
          H<span className="text-blue-500">A</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/80 transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-400 md:flex"
        >
          View Resume <Download size={16} />
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-semibold text-white/80"
              >
                {link.label}
              </a>
            ))}

            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white"
            >
              View Resume <Download size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}