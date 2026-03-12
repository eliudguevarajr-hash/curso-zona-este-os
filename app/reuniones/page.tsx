import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { meetings, zoomTips } from "@/data/meetings";

export default function ReunionesPage() {
  return (
    <PageShell
      eyebrow="Reuniones y Zoom"
      title="Reuniones y sesiones en vivo"
      description="Usa esta página para consultar reuniones publicadas o confirmar que el acceso de Zoom todavía está pendiente."
    >
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Próximas reuniones"
          title="Agenda programada"
          description="Cuando los enlaces oficiales de Zoom sean publicados, aparecerán aquí."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {meetings.map((meeting) => (
            <div className="card p-6" key={meeting.title}>
              <h3 className="text-lg font-semibold text-brand-900">{meeting.title}</h3>
              <dl className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt>Fecha</dt>
                  <dd>{meeting.date}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Hora</dt>
                  <dd>{meeting.time}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>ID</dt>
                  <dd>{meeting.meetingId}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-7 text-slate-700">{meeting.notes}</p>
              <p className="mt-3 text-xs leading-6 text-slate-600">
                {meeting.linkStatus === "available"
                  ? "Enlace disponible."
                  : "Enlace pendiente de publicación. Revisa esta página más adelante o consulta Ayuda si tienes dudas."}
              </p>
              <div className="mt-5">
                <ButtonLink
                  href={meeting.href}
                  external={meeting.external}
                  variant="secondary"
                  disabled={meeting.linkStatus !== "available"}
                >
                  Abrir Zoom
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Cómo ingresar</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
            <p>1. Ubica el enlace oficial de tu reunión.</p>
            <p>2. Verifica fecha y hora antes de entrar.</p>
            <p>3. Ingresa con tu nombre completo para facilitar la identificación.</p>
            <p>4. Si usas Meeting ID, escríbelo exactamente como fue publicado.</p>
          </div>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Antes de entrar</p>
          <div className="mt-4 grid gap-4">
            {zoomTips.map((tip) => (
              <InfoCard key={tip} title="Recomendación" description={tip} accent="bg-brand-400" />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
