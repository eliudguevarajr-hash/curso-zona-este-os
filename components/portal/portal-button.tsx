import Link from "next/link";

import { cn } from "@/lib/utils";

type PortalButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function PortalButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
}: PortalButtonProps) {
  const styles = {
    primary: "bg-brand-800 text-white hover:bg-brand-900",
    secondary: "border border-brand-200 bg-white text-brand-900 hover:bg-brand-50",
    ghost: "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-white",
  };

  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5";

  if (href) {
    return (
      <Link className={cn(base, styles[variant], className)} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, styles[variant], className)} type={type}>
      {children}
    </button>
  );
}
