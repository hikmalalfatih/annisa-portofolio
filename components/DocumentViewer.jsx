"use client";

import { useState } from "react";
import { Eye, X } from "lucide-react";

export default function DocumentViewer({ label, src }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08]"
        aria-expanded={open}
      >
        {open ? <X size={16} /> : <Eye size={16} />}
        {open ? "Close presentation" : label}
      </button>

      {open && (
        <div
          onContextMenu={(event) => event.preventDefault()}
          className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40"
        >
          <iframe
            title={label}
            src={`${src}#toolbar=0&navpanes=0`}
            className="h-[70vh] w-full"
          />
          <p className="px-4 py-3 text-xs leading-5 text-zinc-500">
            View-only preview — no download link is provided on this page.
          </p>
        </div>
      )}
    </div>
  );
}
