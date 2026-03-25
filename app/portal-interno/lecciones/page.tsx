import { PortalButton } from "@/components/portal/portal-button";
import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { portalCourses } from "@/lib/mock-data/portal";

export default function PortalLessonsPage() {
  const lessonOptions = portalCourses.flatMap((course) =>
    course.lessons.map((lesson) => ({ ...lesson, courseTitle: course.title })),
  );

  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Lecciones"
        eyebrow="Administración de Contenido"
        title="Lecciones"
        description="Interfaz preparada para crear, editar y organizar lecciones del portal interno."
        actions={<PortalButton href="/portal-interno/materias">Ver materias</PortalButton>}
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Formulario de lección</p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Título de la lección</label>
              <input className="form-control" placeholder="Ej. Introducción al módulo" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Resumen</label>
              <textarea className="form-control min-h-28" placeholder="Resumen breve de la lección" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Referencia bíblica / apoyo</label>
              <input className="form-control" placeholder="Ej. 1 Timoteo 4:12" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Video</label>
              <input className="form-control" placeholder="https://..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">PDF o recurso adjunto</label>
              <input className="form-control" placeholder="Nombre del archivo o enlace" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Visibilidad</label>
              <select className="form-control" defaultValue="Borrador">
                <option>Borrador</option>
                <option>Visible</option>
              </select>
            </div>
            <div className="flex flex-wrap gap-3">
              <PortalButton type="button">Guardar borrador</PortalButton>
              <PortalButton type="button" variant="secondary">
                Publicar más tarde
              </PortalButton>
            </div>
          </form>
        </article>

        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Lecciones existentes</p>
          <div className="mt-4 space-y-4">
            {lessonOptions.map((lesson) => (
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={lesson.id}>
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-brand-900">{lesson.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{lesson.courseTitle}</p>
                  </div>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                    {lesson.visibility}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">{lesson.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
