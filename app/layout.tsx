import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ButtonLink } from "@/components/ui/button-link";
import { siteMeta } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.title} | ${siteMeta.subtitle}`,
  description: siteMeta.description,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="pb-24 lg:pb-0">{children}</main>
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-[rgba(243,243,239,0.96)] px-4 py-3 backdrop-blur lg:hidden">
          <div className="mx-auto w-full max-w-7xl">
            <ButtonLink className="w-full" href="/inscripcion">
              Comenzar Proceso
            </ButtonLink>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
