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
      "Prepared Performance Agreements, Key Performance Indicators, Action Plans, and Employee Performance Targets, and produced the ministry's 2025 annual performance report and monthly activity reports; the 2025 report recorded an overall organizational performance score of 110.87% against targets, with 3 of 5 key indicators exceeding 100% achievement.",
      "Coordinated 60+ technical meetings with ministries, local governments, and internal divisions to support monitoring of infrastructure priority programs.",
      "Documented 80+ multi-stakeholder discussions through minutes and technical reports, supporting leadership decision-making and follow-up.",
      "Prepared technical training materials on performance evaluation, government report writing, and the strategic plan presentation, and arranged 10+ business trips, liaising with hotels and travel providers.",
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
    period: "Aug 2025 - Sep 2026",
    achievements: [
      "Built business development strategy and company profile from market research targeting apartments, offices, and commercial buildings.",
      "Designed social media campaigns and marketing strategy that generated approximately 150 sales across Indonesia over 14 months, including 50+ sales within the first 5 months, through 10+ weekly client meetings.",
      "Managed end-to-end sales pipeline, client database, and PO compliance review.",
      "Liaised with internal operations and external stakeholders to ensure smooth onboarding of new clients.",
    ],
  },
  {
    organization: "Universitas Brawijaya",
    logo: "/logos/logo-ub.png",
    role: "Personal Assistant to the Chair of the Management Master Program",
    period: "Jan 2025 - Jul 2025",
    achievements: [
      "Supported academic quality assurance through accurate data entry for the monitoring and evaluation of 10 master's course portfolios.",
      "Coordinated 2 online and offline academic and non-academic events for the postgraduate program.",
      "Assisted a community-service project by designing presentation materials and drafting articles on organizational-behavior training for teachers at SMK Yadika Bangil.",
    ],
  },
  {
    organization: "Ministry of National Development Planning (Bappenas)",
    logo: "/logos/logo-bappenas.png",
    role: "Research Assistant",
    period: "Sep 2023 - Aug 2024",
    achievements: [
      "Supported organizational restructuring by preparing documentation for the formation of functional positions after delayering, including job analysis, job descriptions, and workload analysis; the documentation was applied to echelon III–IV levels across all Bappenas work units.",
      "Researched the post-delayering functional position work system through 15 in-depth interviews; the recommendations were followed up as issues informing the strategic plan of the Bureau of Organization and Governance.",
      "Facilitated and analyzed the Foresight Strategic Plan workshop (Renstra 2025–2029) for 100 ministry employees; issues identified through foresight methodology were revisited and incorporated into the finalized Renstra 2025–2029.",
      "Documented technical meetings on organizational performance evaluation (IKK, RB, and IPPN assessments) and supported bureaucratic reform sessions with 120 employees.",
    ],
  },
  {
    organization: "Ministry of Finance",
    logo: "/logos/logo-kemenkeu.png",
    role: "Internship",
    period: "Mar 2023 - May 2023",
    achievements: [
      "Analyzed and mapped MenPAN-RB Regulations No. 1/2023 and No. 7/2022 on functional positions and bureaucratic reform to support HR policy compliance.",
      "Organized a Town Hall for 800 employees attended by the Minister of Finance, covering protocol, logistics, and coordination.",
      "Supported the organization and governance team on an innovation proposal for the Directorate General's innovation competency.",
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

