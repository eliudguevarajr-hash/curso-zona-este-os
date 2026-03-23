import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { courseSchedule } from "@/data/courses";
import { meetings } from "@/data/meetings";

export default function CalendarioPage() {
  return (
    <PageShell
      eyebrow="Calendario"
      title="Calendario y Materias"
      description="Aquí están las fechas principales, la secuencia de materias y el estado de reuniones futuras."
    >
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Fechas principales"
          title="Calendario General del Curso"
          description="Sigue el orden del proceso y ubica cada bloque académico dentro del año escolar."
        />
        <div className="space-y-4">
          {courseSchedule.map((block, index) => (
            <div className="flex gap-3 sm:gap-4" key={block.slug}>
              <div className="flex flex-col items-center">
                <div className={`h-4 w-4 rounded-full ${block.type === "Receso" ? "bg-brand-300" : "bg-brand-700"}`} />
                {index !== courseSchedule.length - 1 ? <div className="mt-2 h-full w-px bg-brand-200" /> : null}
              </div>
              <div className="card flex-1 p-4 sm:p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                      {block.type === "Receso" ? "Receso" : "Materia"}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-brand-900">{block.title}</h3>
                  </div>
                  <p className="text-sm text-slate-700">
                    {block.start} al {block.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-5">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Zoom"
            title="Estado de reuniones"
            description="Los enlaces todavía no están publicados."
          />
          <div className="card divide-y divide-slate-200/80 overflow-hidden">
            {meetings.map((meeting, index) => (
              <div
                className={`grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center ${
                  index % 2 === 0 ? "tint-brand" : "tint-mist"
                }`}
                key={meeting.title}
              >
                <div>
                  <h3 className="text-base font-semibold text-brand-900">{meeting.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">
                    {meeting.date} · {meeting.time}
                  </p>
                </div>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700">
                  Pendiente
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
