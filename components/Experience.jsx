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
    <section id="experience">
      <div className="section-wrap section-space">
        <Reveal>
          <SectionHeading
            eyebrow="Work experience"
            title={<>Where I&apos;ve made a <span className="gradient-text">difference.</span></>}
            description="Experience across business development, national planning, and public finance."
          />
        </Reveal>

        <div className="relative ml-2 space-y-9 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
          {experience.map((item, index) => (
            <Reveal key={item.organization} delay={index * 0.08}>
              <article className="relative py-2">
                <span className="absolute -left-[2.15rem] top-3 flex h-5 w-5 items-center justify-center text-blue-300 sm:-left-[3.15rem]">
                  <BriefcaseBusiness size={14} />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                    <p className="mt-1.5 text-sm font-medium text-blue-200">{item.organization}</p>
                  </div>
                  <span className="w-fit shrink-0 text-xs font-medium text-zinc-500">
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
