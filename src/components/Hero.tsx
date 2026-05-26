import { ArrowRight, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 text-white"
    >
      <img
        src={PROFILE.heroBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="relative mx-auto min-h-[calc(100vh-6rem)] max-w-7xl px-6 py-16">
        <motion.div
          className="relative z-20 flex min-h-[calc(100vh-14rem)] max-w-2xl flex-col justify-center"
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8, ease: "easeOut",
          }}
        >
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            {PROFILE.role}
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I’m
            <br />
            <span className="block max-w-full break-words text-blue-500 sm:whitespace-nowrap">
              {PROFILE.name}
            </span>
          </h1>

          <p className="mt-8 max-w-[520px] text-lg leading-9 text-white/85">
            I build scalable web and mobile applications, backend systems, and
            secure microservices with clean architecture and great user
            experience.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary">
              View My Work <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Let’s Connect <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12">
            <p className="mb-4 text-sm text-white/80">Connect with me</p>

            <div className="flex gap-4">
              <a className="icon-button" href={PROFILE.github}>
                <FaGithub />
              </a>

              <a className="icon-button" href={PROFILE.linkedin}>
                <FaLinkedin />
              </a>

              <a className="icon-button" href={`mailto:${PROFILE.email}`}>
                <Mail />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none relative z-10 mx-auto mt-12 h-[420px] w-full max-w-sm overflow-hidden rounded-3xl sm:h-[520px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[calc(100%-2rem)] lg:w-[52%] lg:max-w-none lg:rounded-none"
          initial={{
            opacity: 0,
            x: 120,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 2.4,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          <img
            src={PROFILE.heroImage}
            alt={PROFILE.name}
            className="h-full w-full object-cover object-center lg:absolute lg:bottom-0 lg:right-0"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute bottom-8 left-1/2 z-30 w-[90%] max-w-xs -translate-x-1/2 rounded-2xl border border-white/20 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl lg:bottom-16 lg:left-auto lg:right-6 lg:w-auto lg:max-w-none lg:translate-x-0">
          <p className="flex items-center gap-3 text-white">
            <MapPin className="text-blue-400" />
            {PROFILE.location}
          </p>

          <p className="mt-4 flex items-center gap-3 text-white">
            <span className="h-3 w-3 rounded-full bg-green-400" />
            Available for work
          </p>
        </div>
      </div>
    </section>
  );
}