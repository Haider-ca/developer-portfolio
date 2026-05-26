import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "../data/constants";

export default function Contact() {
  return (
    <section id="contact" className="section bg-white pt-0">
      <div className="relative overflow-hidden rounded-2xl bg-blue-700 p-8 text-white shadow-2xl lg:p-12">
        <img
          src={PROFILE.contactBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-blue-900/75" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em]">
            Let’s Work Together
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight">
            Open to Software Development Opportunities
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/90">
            Interested in full-stack development, mobile applications, backend
            systems, microservices architecture, AI-assisted platforms, and
            scalable software engineering projects.
          </p>

          <div className="mt-8 space-y-4 text-base">
            <p className="flex items-center gap-3">
              <Mail size={20} />
              {PROFILE.email}
            </p>

            <p className="flex items-center gap-3">
              <Phone size={20} />
              {PROFILE.phone}
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={20} />
              {PROFILE.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary border-white/40"
            >
              GitHub <ArrowRight size={18} />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary border-white/40"
            >
              LinkedIn <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}