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

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Inscripcion"
      title="Inscripcion y Matriculacion"
      description="Esta pagina debe ayudarte a completar el proceso en orden, sin confusion y sin perder ningun paso importante."
    >
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="brand-panel p-6 sm:p-8">
          <p className="eyebrow text-brand-100">Empieza aqui</p>
          <h2 className="mt-3 font-display text-3xl text-white">Haz una sola cosa a la vez</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-50">
            Primero consigue tu solicitud firmada. Despues realiza tu registro en linea. Luego prepara tu expediente fisico.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="https://example.com/registro" external className="bg-white text-brand-900 hover:bg-brand-50">
              Registro en Linea
            </ButtonLink>
            <ButtonLink
              href="https://example.com/solicitud-inscripcion.pdf"
              external
              variant="secondary"
              className="border-white/35 bg-white/15 text-white hover:bg-white/25"
            >
              Ver Solicitud
            </ButtonLink>
          </div>
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow">Accesos rapidos</p>
          <div className="mt-4 grid gap-3">
            {registrationCtas.map((cta, index) => (
              <div className={`rounded-2xl p-4 ${index % 2 === 0 ? "tint-brand" : "tint-gold"}`} key={cta.label}>
                <ButtonLink href={cta.href} external={cta.external} variant="secondary">
                  {cta.label}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Completa estos pasos en orden"
          description="La pagina debe sentirse como una ruta simple de seguimiento y no como una lista larga de instrucciones."
        />
        <Stepper steps={registrationSteps} />
      </section>

      <section className="mt-12 space-y-5">
        <SectionHeading
          eyebrow="Notas Importantes"
          title="Lo que no debes olvidar"
          description="Estas dos indicaciones ayudan a evitar retrasos o errores durante la matriculacion."
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
          title="Si ya terminaste el registro, continua con tus documentos"
          description="No necesitas memorizar todo el proceso. Solo avanza en este orden: solicitud firmada, registro en linea, documentos y seguimiento del calendario."
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
