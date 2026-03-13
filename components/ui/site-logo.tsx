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
        className={header ? "h-10 w-10 object-contain sm:h-11 sm:w-11" : "h-11 w-11 object-contain sm:h-12 sm:w-12"}
        height={56}
        priority={header}
        src="/logo.png"
        width={56}
      />
      <div className="min-w-0">
        <p
          className={`font-display leading-tight ${
            header
              ? "text-[0.96rem] text-brand-900 sm:text-[1.02rem] sm:whitespace-nowrap"
              : "text-[1.02rem] text-white sm:text-[1.12rem] lg:text-[1.2rem] xl:text-[1.3rem] sm:whitespace-nowrap"
          }`}
        >
          {siteMeta.title}
        </p>
        <p className={`text-xs uppercase tracking-[0.18em] ${header ? "text-brand-500" : "text-white/90"}`}>
          Convocatoria 2026
        </p>
      </div>
    </div>
  );

  return <Link href={href}>{content}</Link>;
}
