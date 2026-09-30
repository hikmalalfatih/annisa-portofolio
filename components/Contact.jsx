"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Linkedin, LoaderCircle, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const directLinks = [
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/annisa-aulia-zahra/",
    icon: Linkedin,
  },
  {
    label: "Email",
    value: "nnisaulz17@gmail.com",
    href: "mailto:nnisaulz17@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Start a conversation",
    href: "https://wa.me/6285695185969",
    icon: Phone,
  },
];

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent. Please try again.");
      }

      form.reset();
      setStatus({ type: "success", message: "Thanks for reaching out. Your message has been sent." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section id="contact" className="section-wrap section-space">
      <Reveal>
        <SectionHeading
          eyebrow="Get in touch"
          title={<>Let&apos;s build something <span className="gradient-text">meaningful.</span></>}
          description="Let's collaborate! Feel free to reach out."
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="glass-card h-full rounded-3xl p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Let&apos;s connect</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Have a project, opportunity, or idea in mind? I&apos;d love to hear from you.
            </p>
            <div className="mt-7 space-y-2">
              {directLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="focus-ring group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-white/[0.07] hover:bg-white/[0.035]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-200">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-zinc-200">{label}</span>
                    <span className="mt-0.5 block truncate text-xs text-zinc-500">{value}</span>
                  </span>
                  <ArrowUpRight size={15} className="text-zinc-600 transition-colors group-hover:text-zinc-300" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="left">
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-7 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-zinc-300">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className="mt-2.5 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                />
              </label>
              <label className="block text-sm font-medium text-zinc-300">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="you@example.com"
                  className="mt-2.5 w-full rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-zinc-300">
              Message
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                placeholder="Tell me a little about what you have in mind..."
                className="mt-2.5 w-full resize-y rounded-xl border border-white/[0.09] bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/10"
              />
            </label>
            <div aria-live="polite" className="min-h-6">
              {status.message ? (
                <p className={`mt-3 flex items-start gap-2 text-sm ${status.type === "error" ? "text-rose-300" : "text-emerald-300"}`}>
                  {status.type === "success" ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> : null}
                  {status.message}
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="focus-ring mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status.type === "loading" ? (
                <>
                  <LoaderCircle size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
