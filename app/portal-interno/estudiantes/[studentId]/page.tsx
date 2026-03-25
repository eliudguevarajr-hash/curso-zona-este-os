import { notFound } from "next/navigation";

import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalStudentById } from "@/lib/portal/data";

type StudentDetailPageProps = {
  params: Promise<{ studentId: string }>;
};

export default async function StudentDetailPage({ params }: StudentDetailPageProps) {
  const { studentId } = await params;
  const student = await getPortalStudentById(studentId);

  if (!student) {
    notFound();
  }

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Estudiantes / Detalle"
        eyebrow="Perfil Interno"
        title={student.fullName}
        description="Vista de ejemplo para seguimiento individual del alumno dentro del portal administrativo."
      />

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <PortalSectionCard eyebrow="Resumen" title="Información principal">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-brand-900">Estado</dt>
              <dd className="mt-1 text-slate-700">{student.status}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Materia actual</dt>
              <dd className="mt-1 text-slate-700">{student.currentCourse}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Progreso</dt>
              <dd className="mt-1 text-slate-700">{student.progressPercent}%</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Contacto</dt>
              <dd className="mt-1 text-slate-700">{student.contact}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-900">Zona</dt>
              <dd className="mt-1 text-slate-700">{student.zone}</dd>
            </div>
          </dl>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Seguimiento" title="Espacios preparados">
          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
              <h3 className="text-base font-semibold text-brand-900">Observaciones internas</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Espacio preparado para notas administrativas, acuerdos de seguimiento y observaciones del equipo docente.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4">
              <h3 className="text-base font-semibold text-brand-900">Historial académico</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Aquí podrá mostrarse el progreso por materia, calificaciones y entregas cuando se conecte la base de datos.
              </p>
            </div>
          </div>
        </PortalSectionCard>
      </section>
    </div>
  );
}
