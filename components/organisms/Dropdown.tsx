"use client";

import Link from "next/link";
import { useState } from "react";

export function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-foreground transition-colors"
      >
        Suporte
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-background border rounded shadow-lg z-10">
          <Link
            href="mailto:techfin@gmail.com"
            className="block px-4 py-2 hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            E-mail
          </Link>
          <Link
            href="https://wa.me/5531985880803"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </Link>
        </div>
      )}
    </div>
  );
}
