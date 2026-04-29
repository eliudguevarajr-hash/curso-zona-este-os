"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortalRoute = pathname.startsWith("/portal-interno");
  const isLoginRoute = pathname.startsWith("/login");

  if (isPortalRoute || isLoginRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">{children}</main>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-300 bg-[#e7eff5] px-4 py-3 shadow-[0_-10px_34px_rgba(17,32,42,0.14)] lg:hidden">
        <div className="mx-auto w-full max-w-7xl">
          <ButtonLink className="w-full" href="/inscripcion">
            Abrir Diagnósticos
          </ButtonLink>
        </div>
      </div>
      <Footer />
    </>
  );
}
