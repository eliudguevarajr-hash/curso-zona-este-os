import Link from "next/link";
import { Search } from "lucide-react";

import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalStudents } from "@/lib/portal/data";

export default async function PortalStudentsPage() {
  const students = await getPortalStudents();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Estudiantes"
        eyebrow="Gestión Académica"
        title="Estudiantes"
        description="Consulta el listado interno de alumnos, su materia actual, estado y porcentaje de avance."
      />

      <PortalSectionCard>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input className="form-control pl-11" placeholder="Buscar estudiante por nombre o contacto" />
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="interactive-chip interactive-chip-active">Todos</span>
            <span className="interactive-chip interactive-chip-idle">Activos</span>
            <span className="interactive-chip interactive-chip-idle">En revisión</span>
            <span className="interactive-chip interactive-chip-idle">Pendientes</span>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-slate-500">
              <tr>
                <th className="pb-3 pr-4 font-semibold">Nombre completo</th>
                <th className="pb-3 pr-4 font-semibold">Estado</th>
                <th className="pb-3 pr-4 font-semibold">Materia actual</th>
                <th className="pb-3 pr-4 font-semibold">Progreso</th>
                <th className="pb-3 pr-4 font-semibold">Contacto</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80">
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="py-4 pr-4">
                    <Link className="font-semibold text-brand-900 hover:text-brand-700" href={`/portal-interno/estudiantes/${student.id}`}>
                      {student.fullName}
                    </Link>
                  </td>
                  <td className="py-4 pr-4">{student.status}</td>
                  <td className="py-4 pr-4">{student.currentCourse}</td>
                  <td className="py-4 pr-4">{student.progressPercent}%</td>
                  <td className="py-4 pr-4">{student.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PortalSectionCard>
    </div>
  );
}
