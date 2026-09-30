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
          <div className="h-full py-2 sm:py-4">
            <p className="text-base leading-8 text-zinc-300">
              With a background in Public Administration and Human Resource Management, I bring together an understanding of public policy, organizational dynamics, and people development. I enjoy turning research and collaboration into practical ideas that help organizations grow.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 py-2">
                  <span className="shrink-0 text-blue-200">
                    <Icon size={17} />
                  </span>
                  <span className="text-sm text-zinc-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="left">
          <div className="h-full py-2 sm:py-4">
            <h3 className="text-lg font-semibold text-white">Skills &amp; tools</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">A toolkit for thoughtful research and effective collaboration.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium text-zinc-300 transition-colors hover:text-blue-200"
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
