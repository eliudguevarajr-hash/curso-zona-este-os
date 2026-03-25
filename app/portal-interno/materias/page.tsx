import Link from "next/link";

import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getPortalCourses } from "@/lib/portal/data";

export default async function PortalCoursesPage() {
  const courses = await getPortalCourses();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Materias"
        eyebrow="Contenido Académico"
        title="Materias"
        description="Administra módulos, materiales, lecciones, evaluaciones y tareas por cada materia interna."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {courses.map((course) => (
          <PortalSectionCard className="" key={course.slug}>
            <p className="eyebrow">Módulo</p>
            <h3 className="mt-2 text-xl font-semibold text-brand-900">{course.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{course.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-brand-800">{course.lessons.length} lecciones</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">{course.files.length} archivos</span>
            </div>
            <Link className="action-link mt-5" href={`/portal-interno/materias/${course.slug}`}>
              Ver módulo completo
            </Link>
          </PortalSectionCard>
        ))}
      </section>
    </div>
  );
}
