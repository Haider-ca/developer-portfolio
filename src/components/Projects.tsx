import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section bg-slate-50">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="section-label mb-0">Featured Projects</p>

        <a
          href="https://github.com/Haider-ca"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 font-semibold text-blue-600 sm:flex"
        >
          View All Projects <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}

                <span className="ml-auto text-blue-600 transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}