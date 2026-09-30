import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="page-shell relative flex min-h-[760px] items-center pt-28 sm:min-h-[820px]">
      <div className="grid-pattern pointer-events-none absolute inset-0 -z-10" />
      <div className="section-wrap grid items-center gap-14 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-4 py-2 text-xs font-medium text-blue-200">
            <Sparkles size={14} aria-hidden="true" />
            Open to meaningful opportunities
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Annisa Aulia Zahra.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-zinc-200 sm:text-xl">
            Policy Analyst, Human Resources, Business and Organization Development.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
            Detail-oriented professionals with a strong interest in Administrative Operations & Secretarial Support, Human Resources Management, Policy Analysis & Strategy, Risk Management and Business & Organizational Development (BOD)
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(168,85,247,0.3)]"
            >
              Contact Me
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/Annisa-Aulia-Zahra-CV.pdf"
              download
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
          <a
            href="#about"
            className="focus-ring mt-12 inline-flex items-center gap-2 rounded text-sm text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Discover more
            <ArrowDown size={14} />
          </a>
        </Reveal>

        <Reveal className="relative mx-auto w-full max-w-[390px] lg:ml-auto" delay={0.12} direction="left">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-transparent blur-3xl" />
          <div className="glass-card relative aspect-[0.88] overflow-hidden rounded-[2rem] p-3">
            <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.45rem] border border-white/[0.07] bg-[#101015]">
              <Image
                src="/annisa.JPEG"
                alt="Annisa Aulia Zahra"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 390px"
                className="object-cover object-[50%_38%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Focus areas</p>
                <p className="mt-1 text-sm font-medium text-zinc-100">Policy · People · Progress</p>
              </div>
              <div className="absolute right-7 top-7 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_18px_#3b82f6]" />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-3 rounded-xl border border-white/10 bg-[#121217]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-7">
            <p className="text-xs text-zinc-500">Grounded in</p>
            <p className="mt-1 text-sm font-semibold text-zinc-100">Public Administration</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
