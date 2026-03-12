import { PageShell } from "@/components/layout/page-shell";
import { CtaPanel } from "@/components/ui/cta-panel";
import { InfoCard } from "@/components/ui/info-card";
import { KeyDates } from "@/components/ui/key-dates";
import { SectionHeading } from "@/components/ui/section-heading";
import { convocatoriaAudience, convocatoriaSections, outcomeNotes, processCards } from "@/data/convocatoria";
import { keyDates } from "@/data/courses";
import { managedLinks } from "@/data/links";

export default function ConvocatoriaPage() {
  return (
    <PageShell
      eyebrow="Convocatoria oficial"
      title="Convocatoria del Curso 2026"
      description="Lee esta página solo si quieres confirmar quién puede participar, qué incluye el proceso y qué fechas debes seguir."
    >
      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Dirigido a</p>
          <p className="mt-4 text-base leading-8 text-slate-700">{convocatoriaAudience}</p>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Fechas clave</p>
          <h3 className="mt-3 font-display text-3xl text-brand-900">Ventana principal</h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
            <p><span className="font-semibold text-ink">Convocatoria:</span> 05 al 28 de marzo de 2026</p>
            <p><span className="font-semibold text-ink">Inicio de clases:</span> 03 de mayo de 2026</p>
            <p><span className="font-semibold text-ink">Prórroga:</span> No hay prórroga</p>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Lo principal"
          title="Lo que debes saber antes de iniciar"
          description="Esta parte resume lo más importante sin obligarte a leer textos largos."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {convocatoriaSections.map((section) => (
            <InfoCard key={section.title} title={section.title} description={section.content} accent="bg-brand-600" />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Resultado del curso</p>
          <h3 className="mt-2 font-display text-3xl text-brand-900">Certificado y promedio final</h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
            {outcomeNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Etapas adicionales</p>
          <div className="mt-4 grid gap-4">
            {processCards.map((card) => (
              <InfoCard key={card.title} title={card.title} description={card.description} href={card.href} accent="bg-warning" />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Fechas"
          title="Fechas principales del proceso"
          description="Estas fechas te ayudan a ubicar el avance general de la convocatoria y del curso."
        />
        <KeyDates items={keyDates.slice(0, 8)} />
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Si ya confirmaste que puedes participar, sigue con Inscripción"
          description="El siguiente paso práctico es entrar a Inscripción para abrir formularios, revisar solicitud y preparar tus documentos."
          actions={[
            { label: "Ir a Inscripción", href: "/inscripcion" },
            {
              label: managedLinks.registrationForm.status === "available" ? "Abrir Registro de Aspirante" : "Registro Pendiente",
              href: managedLinks.registrationForm.href,
              external: managedLinks.registrationForm.external,
            },
          ]}
        />
      </section>
    </PageShell>
  );
}
