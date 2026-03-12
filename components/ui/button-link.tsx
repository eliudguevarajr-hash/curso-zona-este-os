import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "panel" | "panelSecondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  external,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const shared =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ring-1 ring-transparent shadow-sm transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sand";
  const variants = {
    primary: "bg-brand-800 text-white hover:bg-brand-900 hover:shadow-md",
    secondary: "border border-brand-200 bg-white text-brand-900 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md",
    ghost: "border border-brand-200 bg-white/90 text-brand-900 hover:border-brand-300 hover:bg-brand-50 hover:shadow-md",
    panel: "bg-white text-brand-900 hover:bg-brand-50 hover:shadow-md",
    panelSecondary: "border border-brand-100/40 bg-brand-50 text-brand-900 hover:border-white/50 hover:bg-white hover:shadow-md",
  };

  if (external) {
    return (
      <a
        className={cn(shared, variants[variant], className)}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link className={cn(shared, variants[variant], className)} href={href}>
      {children}
    </Link>
  );
}
