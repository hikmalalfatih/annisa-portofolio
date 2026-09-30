import { ArrowUpRight, Award, FileText } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    type: "Achievement",
    year: "2023",
    title: "Gold Medal at International Science and Invention Fair 2023",
    detail: "From Indonesian Young Scientist Association (IYSA).",
    icon: Award,
    accent: "blue",
  },
  {
    type: "Project",
    year: "2025",
    title: "Publishing Scientific Article on Q1 Emerald",
    detail: "Dynamic Capabilities of Work Innovative Behavior in Islamic Digital Banking Service.",
    icon: FileText,
    accent: "violet",
  },
  {
    type: "Project",
    year: "2024",
    title: "Publishing Scientific Article on Sinta 3 JIAP",
    detail: "Quality Optimisation of Electronic-Based Goverment Systems.",
    icon: FileText,
    accent: "blue",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrap section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Projects & achievements"
            title={<>Curiosity, put into <span className="gradient-text">practice.</span></>}
            description="Selected milestones and research projects."
          />
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            const iconTone =
              item.accent === "violet"
                ? "text-violet-200"
                : "text-blue-200";
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group flex h-full min-h-[260px] flex-col py-2 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className={`flex h-11 w-11 items-center ${iconTone}`}>
                      <Icon size={19} />
                    </span>
                    <span className="text-sm font-medium text-zinc-500">{item.year}</span>
                  </div>
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">{item.type}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{item.detail}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
                    Selected work <ArrowUpRight size={13} />
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
