import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { managedLinks } from "@/data/links";
import { processSequence } from "@/data/process";

const diagnosticCards = [
  {
    step: "Paso 1",
    title: "Diagnóstico Vocacional",
    description: "Completa este formulario de manera individual esta semana.",
    href: managedLinks.vocationalDiagnosticForm.href,
    external: managedLinks.vocationalDiagnosticForm.external,
  },
  {
    step: "Paso 2",
    title: "Diagnóstico Ministerial",
    description: "Después del primero, completa este segundo formulario de manera individual.",
    href: managedLinks.ministerialDiagnosticForm.href,
    external: managedLinks.ministerialDiagnosticForm.external,
  },
  {
    step: "Paso 3",
    title: "Diagnóstico de Liderazgo y Servicio",
    description: "Completa este tercer formulario para cerrar tu etapa de diagnósticos.",
    href: managedLinks.leadershipDiagnosticForm.href,
    external: managedLinks.leadershipDiagnosticForm.external,
  },
];

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Diagnósticos"
      title="Documentos y diagnósticos"
      description="Si aún no subiste tus documentos, hazlo ahora. Después completa los 3 diagnósticos en orden esta misma semana."
    >
      <ProcessStatusBanner />

      <section className="mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Antes de seguir"
          title="¿Te faltan documentos?"
          description="Este paso es solo para estudiantes que todavía no han subido sus documentos."
        />
        <div className="brand-panel p-5 sm:p-6 lg:p-8">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow-inverse">Documentos pendientes</p>
              <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">Sube tus documentos si aún no lo has hecho</h2>
              <p className="mt-4 text-sm leading-7 text-white/90">
                Si ya enviaste tus documentos, no repitas este paso. Continúa con los 3 diagnósticos.
              </p>
            </div>
            <ButtonLink
              className="w-full md:w-auto"
              href={managedLinks.documentUploadForm.href}
              external={managedLinks.documentUploadForm.external}
              variant="panel"
            >
              Subir Documentos
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Acción requerida"
          title="Estos son los únicos formularios que debes completar ahora"
          description="Hazlos individualmente y no dejes ninguno pendiente."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {diagnosticCards.map((item, index) => (
            <div className={`${index === 0 ? "brand-panel" : "card"} h-full p-5 sm:p-6 lg:p-8`} key={item.title}>
              <p className={index === 0 ? "eyebrow-inverse" : "eyebrow"}>{item.step}</p>
              <h2 className={`mt-3 font-display text-2xl ${index === 0 ? "text-white" : "text-brand-900"}`}>{item.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-white/90" : "text-slate-700"}`}>{item.description}</p>
              <ButtonLink
                className="mt-6 w-full sm:w-auto"
                href={item.href}
                external={item.external}
                variant={index === 0 ? "panel" : "secondary"}
              >
                Abrir Diagnóstico
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 space-y-5 sm:mt-10" id="pasos">
        <SectionHeading
          eyebrow="Camino"
          title="Este es el orden correcto"
          description="Completa los 3 diagnósticos y después espera el contacto de nuestro equipo."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {processSequence.map((item, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[100px_1fr_auto] md:items-center ${
                index === 0 ? "tint-brand" : index < 3 ? "tint-mist" : "bg-slate-50"
              }`}
              key={item.title}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{item.step}</p>
                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                    item.status === "available" ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {item.status === "available" ? "Abierta actualmente" : "Pendiente"}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
              <ButtonLink
                className="w-full md:w-auto"
                href={item.href}
                external={item.external}
                variant={index === 0 ? "primary" : "secondary"}
                disabled={item.status !== "available"}
              >
                {item.buttonLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <div className="card p-5 sm:p-6 lg:p-8 tint-mist">
          <p className="eyebrow">Importante</p>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <p>Cada estudiante debe completar los 3 formularios esta semana de manera individual.</p>
            <p>Una vez que completes los 3 diagnósticos, serás contactado por nuestro equipo para realizar la entrevista formal.</p>
            <p>La entrevista será el último paso antes de ser ingresado al Ciclo Escolar 2026.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
