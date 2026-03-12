import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { DocumentsCard } from "@/components/ui/documents-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stepper } from "@/components/ui/stepper";
import {
  registrationCtas,
  registrationNotes,
  registrationSteps,
  requiredDocuments,
} from "@/data/inscripcion";
import { managedLinks } from "@/data/links";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripción"
      title="Inscripción y Matriculación"
      description="Esta página debe ayudarte a completar el proceso en orden, sin confusión y sin perder ningún paso importante."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Empieza aquí</p>
          <h2 className="mt-3 font-display text-3xl text-white">Haz una sola cosa a la vez</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-50">
            Primero consigue tu solicitud firmada. Después realiza tu registro en línea. Luego prepara tu expediente físico.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink
              href={managedLinks.registrationForm.href}
              external={managedLinks.registrationForm.external}
              variant="panel"
              disabled={managedLinks.registrationForm.status !== "available"}
            >
              Registro en Línea
            </ButtonLink>
            <ButtonLink
              href={managedLinks.inscriptionRequestPdf.href}
              external={managedLinks.inscriptionRequestPdf.external}
              variant="panelSecondary"
              disabled={managedLinks.inscriptionRequestPdf.status !== "available"}
            >
              Ver Solicitud
            </ButtonLink>
          </div>
          <p className="mt-4 text-xs leading-6 text-brand-100">
            {managedLinks.registrationForm.note}
          </p>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Accesos rápidos</p>
          <div className="mt-4 grid gap-3">
            {registrationCtas.map((cta, index) => (
              <div className={`rounded-2xl p-4 ${index % 2 === 0 ? "tint-brand" : "tint-gold"}`} key={cta.label}>
                <ButtonLink
                  href={cta.href}
                  external={cta.external}
                  variant="secondary"
                  disabled={cta.status !== "available"}
                >
                  {cta.label}
                </ButtonLink>
                {cta.note ? <p className="mt-3 text-xs leading-6 text-slate-600">{cta.note}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Completa estos pasos en orden"
          description="La página debe sentirse como una ruta simple de seguimiento y no como una lista larga de instrucciones."
        />
        <Stepper steps={registrationSteps} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Notas Importantes"
          title="Lo que no debes olvidar"
          description="Estas dos indicaciones ayudan a evitar retrasos o errores durante la matriculación."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {registrationNotes.map((note, index) => (
            <div className={`card p-5 ${index === 0 ? "tint-brand" : "tint-sage"}`} key={note}>
              <p className="text-sm leading-7 text-slate-700">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12" id="documentos">
        <DocumentsCard documents={requiredDocuments} />
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Si ya terminaste el registro, continúa con tus documentos"
          description="No necesitas memorizar todo el proceso. Solo avanza en este orden: solicitud firmada, registro en línea, documentos y seguimiento del calendario."
          actions={[
            { label: "Ver Documentos", href: "/inscripcion#documentos" },
            { label: "Ver Calendario", href: "/calendario" },
            { label: "Obtener Ayuda", href: "/ayuda" },
          ]}
        />
      </section>
    </PageShell>
  );
}
