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
      title="Calendario y materias"
      description="Aquí están las fechas principales, la secuencia de materias y el estado de reuniones futuras."
    >
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Fechas principales"
          title="Calendario general del curso"
          description="Sigue el orden del proceso y ubica cada bloque académico dentro del año escolar."
        />
        <div className="space-y-4">
          {courseSchedule.map((block, index) => (
            <div className="flex gap-4" key={block.slug}>
              <div className="flex flex-col items-center">
                <div className={`h-4 w-4 rounded-full ${block.type === "Receso" ? "bg-amber-400" : "bg-brand-700"}`} />
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
                  <p className="text-sm text-slate-700">{block.start} al {block.end}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Resumen mensual"
          title="Lectura rápida por periodo"
          description="Después de revisar la línea principal, aquí puedes ubicar cada etapa por mes."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {groupedBlocks.map((group) => (
            <div className="card p-6" key={group.month}>
              <h3 className="font-display text-2xl text-brand-900">{group.month}</h3>
              <div className="mt-5 space-y-4">
                {group.items.map((item) => (
                  <div className="flex items-start justify-between gap-4 border-b border-line pb-4 last:border-none" key={item.label}>
                    <div>
                      <p className="text-sm font-semibold text-brand-900">{item.label}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-brand-600">{item.kind}</p>
                    </div>
                    <p className="text-right text-sm text-slate-700">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Reuniones"
          title="Estado de reuniones y Zoom"
          description="Los enlaces de Zoom se publicarán más adelante. Aquí puedes revisar las reuniones previstas."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {meetings.map((meeting, index) => (
            <div className={`card p-6 ${index === 1 ? "tint-gold" : index === 2 ? "tint-sage" : "tint-brand"}`} key={meeting.title}>
              <h3 className="text-lg font-semibold text-brand-900">{meeting.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{meeting.date} · {meeting.time}</p>
              <p className="mt-3 text-xs leading-6 text-slate-600">{meeting.notes}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold-700">
                Enlace pendiente de publicación
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
