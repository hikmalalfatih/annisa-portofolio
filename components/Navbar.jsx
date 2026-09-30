"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <a
          href="#home"
          onClick={closeMenu}
          className="focus-ring rounded-lg text-lg font-bold tracking-tight"
          aria-label="Annisa Aulia Zahra home"
        >
          Annisa Aulia Zahra
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring rounded text-sm text-zinc-300 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-zinc-200 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        {isOpen ? (
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-[calc(100%+0.5rem)] p-3 md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="focus-ring block px-4 py-3 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
