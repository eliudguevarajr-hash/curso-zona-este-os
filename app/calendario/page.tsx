import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { courseSchedule, keyDates } from "@/data/courses";
import { meetings } from "@/data/meetings";

const groupedBlocks = [
  {
    month: "Marzo",
    items: keyDates.filter((item) => item.date.includes("marzo")),
  },
  {
    month: "Mayo",
    items: keyDates.filter((item) => item.date.includes("mayo")),
  },
  {
    month: "Junio y Julio",
    items: keyDates.filter((item) => item.date.includes("junio") || item.date.includes("julio")),
  },
  {
    month: "Agosto a Octubre",
    items: keyDates.filter(
      (item) =>
        item.date.includes("agosto") || item.date.includes("septiembre") || item.date.includes("octubre")
    ),
  },
];

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
            <div className="flex gap-4" key={block.slug}>
              <div className="flex flex-col items-center">
                <div className={`h-4 w-4 rounded-full ${block.type === "Receso" ? "bg-brand-300" : "bg-brand-700"}`} />
                {index !== courseSchedule.length - 1 ? <div className="mt-2 h-full w-px bg-brand-200" /> : null}
              </div>
              <div className="card flex-1 p-5">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
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

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Resumen mensual"
            title="Lectura rápida por periodo"
            description="Después de revisar la línea principal, aquí puedes ubicar cada etapa por mes."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {groupedBlocks.map((group) => (
              <div className="card p-5" key={group.month}>
                <h3 className="text-lg font-semibold text-brand-900">{group.month}</h3>
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <div className="border-b border-line pb-3 last:border-none" key={item.label}>
                      <p className="text-sm font-semibold text-brand-900">{item.label}</p>
                      <p className="mt-1 text-xs text-slate-700">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <SectionHeading
            eyebrow="Reuniones"
            title="Estado de Zoom"
            description="Los enlaces de Zoom todavía no están publicados. Aquí puedes ver las reuniones previstas."
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
