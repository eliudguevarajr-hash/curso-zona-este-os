"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../ui/button-link";
import { SiteLogo } from "../ui/site-logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-[#e7eff5]">
      <div className="container-shell grid min-h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2 lg:grid-cols-[auto_1fr]">
        <SiteLogo />

        <div className="hidden items-center justify-self-end gap-4 lg:flex xl:gap-6">
          <nav className="items-center">
            <div className="flex items-center gap-1 rounded-full border border-slate-300 bg-white px-2 py-1 shadow-sm">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  className={cn("nav-link whitespace-nowrap px-4 py-2 text-[13px]", pathname === item.href && "nav-link-active")}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <ButtonLink className="px-5" href="/inscripcion">
            Abrir Diagnósticos
          </ButtonLink>
        </div>

        <button
          aria-label="Abrir menú"
          className="justify-self-end rounded-2xl border border-line bg-white px-3 py-3 text-brand-900 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sand lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                className={cn("nav-link px-4 py-3", pathname === item.href && "nav-link-active")}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink className="mt-2" href="/inscripcion">
              Abrir Diagnósticos
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
