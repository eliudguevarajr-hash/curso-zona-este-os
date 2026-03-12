import Image from "next/image";
import Link from "next/link";

import { siteMeta } from "@/data/site";

type SiteLogoProps = {
  href?: string;
  variant?: "header" | "footer";
};

export function SiteLogo({ href = "/", variant = "header" }: SiteLogoProps) {
  const header = variant === "header";

  const content = (
    <div className={`flex items-center ${header ? "gap-2.5" : "gap-3"}`}>
      <Image
        alt="Logo Departamento Educativo Zona Este"
        className={header ? "h-11 w-11 object-contain" : "h-14 w-14 object-contain"}
        height={56}
        priority={header}
        src="/logo.png"
        width={56}
      />
      <div className={header ? "min-w-0" : "max-w-sm"}>
        <p className={`font-display leading-tight ${header ? "text-[1.02rem] text-brand-900 whitespace-nowrap" : "text-2xl text-white"}`}>
          {siteMeta.title}
        </p>
        <p className={`text-xs uppercase tracking-[0.18em] ${header ? "text-gold-600" : "text-gold-200"}`}>
          Convocatoria 2026
        </p>
      </div>
    </div>
  );

  return <Link href={href}>{content}</Link>;
}
