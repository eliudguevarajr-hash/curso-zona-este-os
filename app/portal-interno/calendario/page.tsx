import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalCalendarItems } from "@/lib/portal/data";

export default async function PortalCalendarPage() {
  const calendarItems = await getPortalCalendarItems();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Calendario"
        eyebrow="Planeación Interna"
        title="Calendario"
        description="Calendario interno para fechas de inicio, entregas, reuniones y diagnósticos del sistema académico."
      />

      <PortalSectionCard>
        <div className="space-y-4">
          {calendarItems.map((item) => (
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-5" key={item.id}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="eyebrow">{item.type}</p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-900">{item.title}</h3>
                </div>
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">{item.date}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.notes}</p>
            </article>
          ))}
        </div>
      </PortalSectionCard>
    </div>
  );
}
