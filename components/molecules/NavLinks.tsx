"use client";

import type React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "relative text-sm font-medium text-muted-foreground",
        "hover:text-foreground transition-colors",
        "after:absolute after:bottom-0 after:left-0 after:right-0",
        "after:h-0.5 after:bg-primary after:origin-left",
        "after:scale-x-0 hover:after:scale-x-100",
        "after:transition-transform after:duration-300 after:ease-out",
        "pb-1"
      )}
    >
      {children}
    </Link>
  );
}
