import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalAnnouncements } from "@/lib/portal/data";

export default async function PortalAnnouncementsPage() {
  const announcements = await getPortalAnnouncements();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Anuncios"
        eyebrow="Comunicación Interna"
        title="Anuncios"
        description="Panel interno para crear avisos administrativos y futuras publicaciones por audiencia."
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <PortalSectionCard eyebrow="Nuevo anuncio" title="Redacción">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Título</label>
              <input className="form-control" placeholder="Título del anuncio" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Audiencia</label>
              <input className="form-control" placeholder="Ej. Administración, Educadores, Estudiantes" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Contenido</label>
              <textarea className="form-control min-h-32" placeholder="Redacta el cuerpo del anuncio" />
            </div>
          </form>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Feed administrativo" title="Publicaciones actuales">
          <div className="space-y-4">
            {announcements.map((item) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={item.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{item.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
                <p className="mt-3 text-xs font-medium text-slate-500">Audiencia: {item.audience}</p>
              </article>
            ))}
          </div>
        </PortalSectionCard>
      </section>
    </div>
  );
}
