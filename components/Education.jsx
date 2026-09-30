import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const education = [
  {
    institution: "Universitas Brawijaya",
    programs: [
      { degree: "Master Human Resource Management", result: "GPA: 4.00/4.00" },
      { degree: "Bachelor Public Administration", result: "GPA: 3.85/4.00" },
    ],
  },
  {
    institution: "Universitas Indonesia",
    programs: [
      {
        degree: "Bachelor 5th Semester Student Exchange in Public Administration",
        result: "GPA: 3.87/4.00",
      },
    ],
  },
  {
    institution: "Universitas Padjadjaran",
    programs: [
      {
        degree: "Bachelor 4th semester student exchange in Public Administration",
        result: "GPA: 4.00/4.00",
      },
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-wrap section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Education"
          title={<>Learning that <span className="gradient-text">moves me forward.</span></>}
          description="Academic foundations and exchange experiences that continue to shape my perspective."
        />
      </Reveal>

      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.institution} delay={index * 0.08} className={index === 0 ? "md:col-span-2" : ""}>
            <article className="h-full py-2">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center text-violet-200">
                  <GraduationCap size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-white">{item.institution}</h3>
                  <div className="mt-4 space-y-4">
                    {item.programs.map((program) => (
                      <div key={program.degree} className="border-l border-white/10 pl-4">
                        <p className="text-sm leading-6 text-zinc-300">{program.degree}</p>
                        <p className="mt-1.5 text-xs font-medium text-blue-200">{program.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
