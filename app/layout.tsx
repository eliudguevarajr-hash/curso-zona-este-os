import type { Metadata } from "next";

import { AppChrome } from "@/components/layout/app-chrome";
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
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
