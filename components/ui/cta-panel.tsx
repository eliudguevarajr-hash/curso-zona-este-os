import { ButtonLink } from "./button-link";

type Action = {
  label: string;
  href: string;
  external?: boolean;
};

export function CtaPanel({
  title,
  description,
  actions,
}: {
  title: string;
  description: string;
  actions: Action[];
}) {
  return (
    <div className="card overflow-hidden">
      <div className="grid gap-6 bg-brand-wash px-6 py-8 text-white sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow text-brand-200">Siguiente paso</p>
          <h3 className="mt-2 font-display text-3xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-100">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {actions.map((action) => (
            <ButtonLink
              key={action.label}
              href={action.href}
              external={action.external}
              variant={action.external ? "secondary" : "primary"}
              className={
                action.external
                  ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                  : "bg-white text-brand-900 hover:bg-brand-50"
              }
            >
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </div>
  );
}
