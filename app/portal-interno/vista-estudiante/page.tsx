import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { PortalSectionCard } from "@/components/portal/portal-section-card";
import { getStudentPreviewData } from "@/lib/portal/data";

export default async function StudentPreviewPage() {
  const { student, announcements, assignments, courses, resources, calendarItems } = await getStudentPreviewData();

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Vista del Estudiante"
        eyebrow="Vista previa protegida"
        title="Cómo vería esto un estudiante"
        description="Esta vista es solo para administración. Te permite revisar una experiencia más simple, guiada y amigable para alumnos con baja familiaridad tecnológica."
      />

      <section className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <PortalSectionCard eyebrow="Bienvenida" title={`Hola, ${student.fullName}`}>
          <div className="space-y-4">
            <p className="text-sm leading-7 text-slate-700">
              Este es un ejemplo del panel que vería un estudiante: claro, directo y enfocado en qué hacer ahora, qué materia sigue y qué tareas tiene pendientes.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl bg-brand-900 p-4 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-white/70">Materia actual</p>
                <p className="mt-2 text-base font-semibold">{student.currentCourse}</p>
              </div>
              <div className="rounded-3xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Progreso</p>
                <p className="mt-2 text-base font-semibold text-brand-900">{student.progressPercent}%</p>
              </div>
              <div className="rounded-3xl bg-white p-4 ring-1 ring-slate-200">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Estado</p>
                <p className="mt-2 text-base font-semibold text-brand-900">{student.status}</p>
              </div>
            </div>
          </div>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Siguiente paso" title="Lo más importante para el alumno">
          <ol className="space-y-3">
            <li className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-700">
              1. Revisar anuncios recientes del curso.
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-700">
              2. Entrar a la materia actual y ver la lección disponible.
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-700">
              3. Completar la tarea pendiente antes de la fecha límite.
            </li>
          </ol>
        </PortalSectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <PortalSectionCard eyebrow="Anuncios" title="Avisos recientes">
          <div className="space-y-3">
            {announcements.map((item) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={item.id}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{item.date}</p>
                <h3 className="mt-2 text-base font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </article>
            ))}
          </div>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Tareas" title="Pendientes del alumno">
          <div className="space-y-3">
            {assignments.map((assignment) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={assignment.id}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-base font-semibold text-brand-900">{assignment.title}</h3>
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                    {assignment.submissionStatus}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{assignment.course}</p>
                <p className="mt-1 text-sm text-slate-600">Fecha límite: {assignment.dueDate}</p>
              </article>
            ))}
          </div>
        </PortalSectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
        <PortalSectionCard eyebrow="Materias" title="Materias visibles para el alumno">
          <div className="space-y-3">
            {courses.map((course) => (
              <article className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={course.slug}>
                <h3 className="text-base font-semibold text-brand-900">{course.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{course.description}</p>
                <p className="mt-2 text-sm text-slate-600">{course.lessons.length} lecciones disponibles</p>
              </article>
            ))}
          </div>
        </PortalSectionCard>

        <PortalSectionCard eyebrow="Recursos y calendario" title="Apoyos rápidos">
          <div className="space-y-4">
            <div className="space-y-3">
              {resources.map((resource) => (
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={resource.id}>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-700">{resource.category}</p>
                  <p className="mt-2 text-sm font-semibold text-brand-900">{resource.title}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-brand-900">Próximas fechas</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {calendarItems.map((item) => (
                  <li key={item.id}>
                    {item.title}: {item.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PortalSectionCard>
      </section>
    </div>
  );
}
