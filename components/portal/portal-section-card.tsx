type PortalSectionCardProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function PortalSectionCard({
  eyebrow,
  title,
  description,
  children,
  className,
}: PortalSectionCardProps) {
  return (
    <section className={`rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur ${className ?? ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="mt-2 text-xl font-semibold text-brand-900">{title}</h2> : null}
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={title || description || eyebrow ? "mt-4" : ""}>{children}</div>
    </section>
  );
}
