import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalAssignments } from "@/lib/portal/data";

export default async function PortalAssignmentsPage() {
  const assignments = await getPortalAssignments();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Tareas"
        eyebrow="Revisión Académica"
        title="Tareas"
        description="Vista de administración para revisar entregas, estatus de revisión y futura calificación."
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <PortalSectionCard eyebrow="Listado de tareas" title="Entregas y revisión">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 text-slate-500">
                <tr>
                  <th className="pb-3 pr-4 font-semibold">Título</th>
                  <th className="pb-3 pr-4 font-semibold">Materia</th>
                  <th className="pb-3 pr-4 font-semibold">Fecha límite</th>
                  <th className="pb-3 pr-4 font-semibold">Estatus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80">
                {assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td className="py-4 pr-4">{assignment.title}</td>
                    <td className="py-4 pr-4">{assignment.course}</td>
                    <td className="py-4 pr-4">{assignment.dueDate}</td>
                    <td className="py-4 pr-4">{assignment.submissionStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Panel de revisión" title="Ejemplo de calificación">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
            <h3 className="text-lg font-semibold text-brand-900">Ensayo doctrinal breve</h3>
            <p className="mt-2 text-sm text-slate-700">Alumno: Israel Ramírez Cruz</p>
            <p className="mt-2 text-sm text-slate-700">Estado: Recibida</p>
            <div className="mt-4 space-y-3">
              <label className="block text-sm font-semibold text-brand-900">Observación</label>
              <textarea className="form-control min-h-28" placeholder="Comentarios de revisión o retroalimentación" />
              <label className="block text-sm font-semibold text-brand-900">Calificación</label>
              <input className="form-control" placeholder="Ej. 9.0" />
            </div>
          </div>
        </PortalSectionCard>
      </section>
    </div>
  );
}
