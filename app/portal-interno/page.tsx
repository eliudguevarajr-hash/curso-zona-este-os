import { QuickActionCard } from "@/components/portal/quick-action-card";
import { PortalButton } from "@/components/portal/portal-button";
import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { SummaryCard } from "@/components/portal/summary-card";
import { getPortalDashboardData } from "@/lib/portal/data";

export default async function PortalDashboardPage() {
  const { summary, announcements } = await getPortalDashboardData();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Panel Administrativo"
        eyebrow="Dashboard"
        title="Panel Administrativo"
        description="Centro de control interno para administrar estudiantes, materias, tareas, anuncios y recursos del curso ministerial."
        actions={
          <>
            <PortalButton href="/portal-interno/lecciones">Crear nueva lección</PortalButton>
            <PortalButton href="/portal-interno/anuncios" variant="secondary">
              Crear anuncio
            </PortalButton>
          </>
        }
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Total de estudiantes" value={summary.totalStudents} helpText="Alumnos y registros internos actuales." />
        <SummaryCard label="Materias activas" value={summary.activeCourses} helpText="Módulos listos para seguimiento y contenido." />
        <SummaryCard label="Tareas pendientes" value={summary.pendingAssignments} helpText="Elementos por revisar o calificar." />
        <SummaryCard label="Anuncios" value={summary.announcements} helpText="Publicaciones internas visibles para el equipo." />
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <PortalSectionCard eyebrow="Acciones rápidas" title="Gestión inmediata">
          <div className="grid gap-4 md:grid-cols-2">
            <QuickActionCard
              title="Crear nueva lección"
              description="Prepara el contenido académico, referencias, video y visibilidad."
              href="/portal-interno/lecciones"
              buttonLabel="Ir a Lecciones"
            />
            <QuickActionCard
              title="Subir material"
              description="Organiza PDFs, videos, formularios y guías internas del curso."
              href="/portal-interno/recursos"
              buttonLabel="Ir a Recursos"
            />
            <QuickActionCard
              title="Crear anuncio"
              description="Publica información administrativa para el equipo y futuros roles."
              href="/portal-interno/anuncios"
              buttonLabel="Ir a Anuncios"
            />
            <QuickActionCard
              title="Revisar progreso"
              description="Consulta estatus, avance y seguimiento general de estudiantes."
              href="/portal-interno/estudiantes"
              buttonLabel="Ir a Estudiantes"
            />
          </div>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Actividad interna" title="Anuncios recientes">
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
