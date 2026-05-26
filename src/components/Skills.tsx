import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <div id="skills" className="w-full">
      <p className="section-label">Technical Skills</p>

      <div className="grid gap-5 xl:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg"
          >
            <h3 className="mb-5 text-lg font-bold text-slate-950">
              {group.title}
            </h3>

            <div className="grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  title={skill.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-xl ${skill.color} transition duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-md`}
                  >
                    <skill.icon />
                  </div>

                  <span className="text-center text-[10px] font-semibold leading-4 text-slate-600">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}