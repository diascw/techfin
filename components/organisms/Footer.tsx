"use client";

import Link from "next/link";
import { Dropdown } from "./Dropdown";
import { Logo } from "../atoms/logo";

export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © 2025 Techfin. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
            <Link
              href="https://docs.google.com/document/d/e/2PACX-1vT0pJW-rDbohrDtDXAIe9HbViUhLyW-rwWlNdez3f30tbF0S6ryHYjVfv_aEb9vytvrMgzqGbhkjSO2/pub"
              className="hover:text-foreground transition-colors"
              target="_blank"
            >
              Termos
            </Link>
            <Dropdown />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
