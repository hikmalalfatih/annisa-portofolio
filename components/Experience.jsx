import Image from "next/image";
import { BriefcaseBusiness } from "lucide-react";
import Reveal from "./Reveal";
import DocumentViewer from "./DocumentViewer";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    organization: "Coordinating Ministry for Infrastructure and Regional Development",
    logo: "/logos/logo-kemenkoinfra.png",
    role: "Staff Secretary, Deputy Coordinating Minister for Basic Infrastructure",
    period: "Nov 2025 - May 2026",
    achievements: [
      "Coordinated 60+ technical meetings with ministries, local governments, internal divisions, and stakeholders to support project monitoring and evaluation.",
      "Prepared technical reports, meeting minutes, and documentation for 80+ multi-stakeholder discussions, supporting coordination and decision-making.",
      "Created the D3 strategic plan presentation, 2025 performance report, official visit reports, and other reports.",
    ],
    document: {
      label: "View the Renstra D3 2025-2029 presentation",
      src: "/Paparan_Renstra_D3_rev.pdf",
      title: "Harmonization of the Deputy for Basic Infrastructure Coordination Strategic Plan 2025-2029",
      summary: "April 2026 · 24 pages · Harmonization of the Deputy strategic plan with the Coordinating Ministry strategic plan.",
      outputs: [
        "2025 performance report",
        "Official visit reports and other reports",
      ],
    },
  },
  {
    organization: "PT Anugerah Tiga Warna",
    role: "Business Development Manager",
    period: "Jan 2025 - Oct 2025",
    achievements: [
      "Created social media campaigns and marketing strategies that supported 50+ product sales across Indonesia.",
      "Developed the company profile and business strategy using market research to identify prospective clients.",
      "Reviewed purchase orders for compliance with financial policies, procedures, and contractual requirements, and managed 10+ weekly appointments with new and existing clients.",
    ],
  },
  {
    organization: "Ministry of National Development Planning (Bappenas)",
    logo: "/logos/logo-bappenas.png",
    role: "Research Assistant",
    period: "Sep 2023 - Aug 2024",
    achievements: [
      "Organized and analyzed the Workshop Methodology Foresight Renstra Bappenas 2025-2029 with 100 Ministry employees.",
      "Prepared notes for technical meetings on IKK LAN assessment, bureaucratic reform, and IPPN assessment across ministries and institutions.",
      "Recorded documents required for approval of functional department formation and assisted a bureaucratic reform meeting with 120 Ministry employees.",
    ],
  },
  {
    organization: "Ministry of Finance",
    logo: "/logos/logo-kemenkeu.png",
    role: "Internship",
    period: "Mar 2023 - May 2023",
    achievements: [
      "Organized the Directorate General of Budget Town Hall Meeting with 800 Ministry employees, attended by the Minister of Finance.",
      "Analyzed the mapping of Minister of State Apparatus Utilization and Bureaucratic Reform Regulation No. 1 of 2023 and No. 7 of 2022.",
      "Joined discussions on organizational and governance reviews, including an innovation proposal for a mineral and coal information system across ministries and institutions.",
    ],
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
              <article className="glass-card relative rounded-2xl p-6 sm:p-8">
                <span className="absolute -left-[2.15rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/25 bg-[#111116] text-blue-300 sm:-left-[3.15rem]">
                  <BriefcaseBusiness size={14} />
                </span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {item.logo && (
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1">
                        <Image
                          src={item.logo}
                          alt={`${item.organization} logo`}
                          width={44}
                          height={44}
                          className="h-full w-full object-contain"
                        />
                      </span>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                      <p className="mt-1.5 text-sm font-medium text-blue-200">{item.organization}</p>
                    </div>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-400">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm leading-7 text-zinc-400">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                {item.document && (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">Selected work</p>
                    <h4 className="mt-2 text-base font-semibold leading-6 text-white">{item.document.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.document.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {item.document.outputs.map((output) => (
                        <li key={output} className="flex gap-3 text-sm leading-6 text-zinc-400">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                          {output}
                        </li>
                      ))}
                    </ul>
                    <DocumentViewer label={item.document.label} src={item.document.src} />
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
