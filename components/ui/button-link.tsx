import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary" | "ghost";
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
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold";
  const variants = {
    primary: "bg-brand-800 text-white shadow-sm hover:bg-brand-900",
    secondary: "border border-slate-200 bg-white/90 text-brand-900 hover:border-brand-200 hover:bg-brand-50",
    ghost: "text-brand-900 hover:bg-brand-50",
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
