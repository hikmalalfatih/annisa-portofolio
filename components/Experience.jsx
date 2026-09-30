import { BriefcaseBusiness } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    organization: "PT Anugerah Tiga Warna",
    role: "Business Development Manager",
    period: "Jun 2025 - Present",
    description:
      "Managed over 10 appointments weekly with new and existing clients. Built up massive database of past and current clients and conducted market analysis to source for potential customers.",
  },
  {
    organization: "Ministry of National Development Planning (Bappenas)",
    role: "Research Assistant",
    period: "Sep 2023 - Aug 2024",
    description:
      "Organized and Analyzed Workshop Methodology Foresight Renstra Bappenas 2025-2029 with 100 employees.",
  },
  {
    organization: "Ministry Of Finance",
    role: "Internship",
    period: "Mar 2023 - May 2023",
    description:
      "Organized the Town Hall Meeting of the Directorate General of Budget with 800 employees of the Ministry of Finance and attended by the Minister of Finance.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-y border-white/[0.04] bg-white/[0.012]">
      <div className="section-wrap section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Work experience"
            title={<>Where I&apos;ve made a <span className="gradient-text">difference.</span></>}
            description="Experience across business development, national planning, and public finance."
          />
        </Reveal>

        <div className="relative ml-2 space-y-5 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal key={item.organization} delay={index * 0.08}>
              <article className="glass-card relative rounded-2xl p-6 sm:p-8">
                <span className="absolute -left-[2.15rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/25 bg-[#111116] text-blue-300 sm:-left-[3.15rem]">
                  <BriefcaseBusiness size={14} />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                    <p className="mt-1.5 text-sm font-medium text-blue-200">{item.organization}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
