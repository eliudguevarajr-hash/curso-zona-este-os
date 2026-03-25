type PortalPageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: string;
  actions?: React.ReactNode;
};

export function PortalPageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  actions,
}: PortalPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-200/80 bg-white/80 p-5 shadow-soft backdrop-blur lg:flex-row lg:items-end lg:justify-between">
      <div>
        {breadcrumb ? <p className="eyebrow">{breadcrumb}</p> : null}
        <p className="eyebrow mt-1">{eyebrow}</p>
        <h1 className="mt-2 font-display text-3xl text-brand-900">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-700">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}
