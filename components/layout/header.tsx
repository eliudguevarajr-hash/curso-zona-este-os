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
                "nav-link",
                pathname === item.href && "nav-link-active"
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
          className="rounded-2xl border border-line bg-white px-3 py-3 text-brand-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory lg:hidden"
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
                  "nav-link px-4 py-3",
                  pathname === item.href && "nav-link-active"
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
