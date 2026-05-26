import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="section-label">Experience</p>

        <div className="space-y-10">
          {experiences.map((item) => (
            <div
              key={item.title}
              className="grid gap-4 sm:grid-cols-[48px_1fr_auto]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {item.title.includes("BCIT") ||
                  item.title.includes("Academic") ||
                  item.company.includes("BCIT") ? (
                  <GraduationCap size={20} />
                ) : (
                  <BriefcaseBusiness size={20} />
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="text-sm font-semibold text-blue-600">
                  {item.company}
                </p>

                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}