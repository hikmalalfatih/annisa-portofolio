import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/annisa-aulia-zahra/",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:nnisaulz17@gmail.com", icon: Mail },
  { label: "WhatsApp", href: "https://wa.me/6285695185969", icon: Phone },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="section-wrap flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="focus-ring w-fit rounded text-sm font-semibold text-zinc-200">
          Annisa <span className="gradient-text">AZ</span>
          <span className="ml-2 font-normal text-zinc-600">© 2026</span>
        </a>
        <div className="flex items-center gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <Icon size={15} />
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="focus-ring ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-zinc-300 transition-colors hover:bg-white/[0.12]">
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
