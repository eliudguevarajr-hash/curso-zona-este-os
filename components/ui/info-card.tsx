import Link from "next/link";
import { ChevronRight } from "lucide-react";

type InfoCardProps = {
  title: string;
  description: string;
  href?: string;
  accent?: string;
};

export function InfoCard({ title, description, href, accent = "bg-brand-700" }: InfoCardProps) {
  const content = (
    <div className="card h-full p-6">
      <div className={`mb-5 h-1.5 w-14 rounded-full ${accent}`} />
      <h3 className="font-display text-[1.65rem] leading-tight text-brand-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {href ? (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
          Continuar <ChevronRight className="h-4 w-4" />
        </div>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
