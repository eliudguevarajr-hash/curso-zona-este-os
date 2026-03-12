import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteMeta } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.title} | ${siteMeta.subtitle}`,
  description: siteMeta.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
