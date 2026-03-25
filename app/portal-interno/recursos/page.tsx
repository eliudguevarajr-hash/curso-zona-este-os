import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { portalResources } from "@/lib/mock-data/portal";

export default function PortalResourcesPage() {
  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Recursos"
        eyebrow="Biblioteca Interna"
        title="Recursos"
        description="Repositorio administrativo para PDFs, videos, formularios y guías del sistema interno."
      />

      <section className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="interactive-chip interactive-chip-active">Todos</span>
            <span className="interactive-chip interactive-chip-idle">PDFs</span>
            <span className="interactive-chip interactive-chip-idle">Videos</span>
            <span className="interactive-chip interactive-chip-idle">Formularios</span>
            <span className="interactive-chip interactive-chip-idle">Guías</span>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-brand-50">
            Subir recurso
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portalResources.map((resource) => (
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-4" key={resource.id}>
              <p className="eyebrow">{resource.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-brand-900">{resource.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{resource.description}</p>
              <span className="mt-4 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                {resource.tag}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
