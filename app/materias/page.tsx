import { PageShell } from "@/components/layout/page-shell";
import { CourseCard } from "@/components/ui/course-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { courseSchedule } from "@/data/courses";

export default function MateriasPage() {
  const visibleCourses = courseSchedule.filter((item) => item.type === "Materia");

  return (
    <PageShell
      eyebrow="Materias"
      title="Materias y programación académica"
      description="Consulta las materias del curso y sus fechas sin perderte entre varias vistas diferentes."
    >
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Resumen general"
          title="Tabla principal del plan de estudios"
          description="Aquí puedes ver el orden de las materias, sus fechas y el estado general del curso."
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
          eyebrow="Por materia"
          title="Detalle de cada materia"
          description="Usa estas tarjetas solo cuando necesites revisar una materia específica."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
