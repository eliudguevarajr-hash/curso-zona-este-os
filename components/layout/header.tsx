"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation, siteMeta } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/button-link";
import { SiteLogo } from "../ui/site-logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[rgba(248,246,241,0.86)] backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <SiteLogo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "rounded-2xl px-3 py-2 text-sm font-medium",
                pathname === item.href ? "bg-brand-100 text-brand-900" : "text-slate-600 hover:bg-white/70"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/inscripcion">Iniciar inscripción</ButtonLink>
        </div>

        <button
          aria-label="Abrir menú"
          className="rounded-2xl border border-line bg-white/80 p-3 lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white/95 lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  pathname === item.href ? "bg-brand-100 text-brand-900" : "text-slate-700 hover:bg-brand-50"
                )}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink className="mt-2" href="/inscripcion">
              Iniciar inscripción
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
