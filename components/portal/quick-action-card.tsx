import { ArrowRight } from "lucide-react";

import { PortalButton } from "@/components/portal/portal-button";

type QuickActionCardProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export function QuickActionCard({ title, description, href, buttonLabel }: QuickActionCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
      <h3 className="text-lg font-semibold text-brand-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
      <PortalButton className="mt-4" href={href} variant="secondary">
        {buttonLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </PortalButton>
    </article>
  );
}
