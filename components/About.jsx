import { Activity, Brain, Compass, UsersRound } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  "Qualitative & Quantitative Research",
  "Microsoft Office",
  "Google Workspace",
  "SPSS",
  "STATA",
  "Canva",
  "Problem Solving",
  "Analytical Thinking",
  "Adaptability",
  "Interpersonal Skills",
  "Leadership",
  "SEM-PLS",
  "Team Work"
];

const strengths = [
  { icon: Brain, label: "Research-led thinking" },
  { icon: UsersRound, label: "People-centered work" },
  { icon: Activity, label: "Evidence-based analysis" },
  { icon: Compass, label: "Purposeful development" },
];

export default function About() {
  return (
    <section id="about" className="section-wrap section-space">
      <Reveal>
        <SectionHeading
          eyebrow="A little about me"
          title={<>Ideas into <span className="gradient-text">meaningful impact.</span></>}
          description="A multidisciplinary perspective shaped by public service, research, and people development."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="glass-card h-full rounded-3xl p-7 sm:p-9">
            <p className="text-base leading-8 text-zinc-300">
              With a background in Public Administration and Human Resource Management, I bring together an understanding of public policy, organizational dynamics, and people development. I enjoy turning research and collaboration into practical ideas that help organizations grow.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-200">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="left">
          <div className="glass-card h-full rounded-3xl p-7 sm:p-9">
            <h3 className="text-lg font-semibold text-white">Skills &amp; tools</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">A toolkit for thoughtful research and effective collaboration.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-blue-400/30 hover:text-blue-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
