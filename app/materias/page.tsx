import { PageShell } from "@/components/layout/page-shell";
import { CourseCard } from "@/components/ui/course-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { courseSchedule } from "@/data/courses";

export default function MateriasPage() {
  const visibleCourses = courseSchedule.filter((item) => item.type === "Materia");

  return (
    <PageShell
      eyebrow="Plan de estudios"
      title="Materias y programación académica"
      description="Consulta el desarrollo del curso por materia, fechas, duración y referencias básicas para el seguimiento del proceso académico."
    >
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Calendario académico"
          title="Tabla general del plan de estudios"
          description="Los horarios de clases estarán determinados en el calendario escolar del Departamento Educativo de la zona y por su Administrador."
        />
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-900 text-white">
                <tr>
                  <th className="px-4 py-4 font-medium">Bloque</th>
                  <th className="px-4 py-4 font-medium">Fechas</th>
                  <th className="px-4 py-4 font-medium">Duración</th>
                  <th className="px-4 py-4 font-medium">Tipo</th>
                  <th className="px-4 py-4 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {courseSchedule.map((course) => (
                  <tr className="border-b border-line bg-white" key={course.slug}>
                    <td className="px-4 py-4 font-semibold text-brand-900">{course.title}</td>
                    <td className="px-4 py-4 text-slate-700">{course.start} al {course.end}</td>
                    <td className="px-4 py-4 text-slate-700">{course.duration}</td>
                    <td className="px-4 py-4 text-slate-700">{course.type}</td>
                    <td className="px-4 py-4 text-slate-700">{course.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Vista por materia"
          title="Tarjetas del plan de estudios"
          description="Cada tarjeta resume información básica y campos listos para actualización futura."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Línea de tiempo"
          title="Secuencia del curso 2026"
          description="Vista resumida para ubicar materias y recesos durante el año académico."
        />
        <div className="space-y-4">
          {courseSchedule.map((course) => (
            <div className="card flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between" key={course.slug}>
              <div>
                <p className="eyebrow">{course.type}</p>
                <h3 className="mt-1 text-lg font-semibold text-brand-900">{course.title}</h3>
              </div>
              <div className="text-sm text-slate-700">
                {course.start} al {course.end} · {course.duration}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
