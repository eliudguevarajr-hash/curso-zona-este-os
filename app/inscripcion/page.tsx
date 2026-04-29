import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { processSequence } from "@/data/process";

export default function InscripcionPage() {
  return (
    <PageShell
      eyebrow="Diagnósticos"
      title="Completa todo en esta página"
      description="Sigue el orden de abajo. Si ya subiste documentos, empieza en el Paso 2. Si no estás seguro, sube tus documentos ahora."
    >
      <section>
        <div className="rounded-3xl border-2 border-brand-700 bg-white p-5 shadow-soft sm:p-6 lg:p-8">
          <p className="eyebrow">Primero mira esta ruta</p>
          <h2 className="mt-2 font-display text-3xl text-brand-900">No omitas ningún paso</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-800">
            Completa los 3 diagnósticos esta semana. Los documentos solo se suben si todavía no los has enviado.
          </p>

          <div className="mt-6 grid gap-4">
            {processSequence.map((item, index) => (
              <div
                className={`rounded-2xl border p-4 sm:p-5 ${
                  index === 0 ? "border-brand-700 bg-brand-800 text-white" : "border-brand-200 bg-brand-50 text-brand-900"
                }`}
                key={item.title}
              >
                <div className="grid gap-4 lg:grid-cols-[120px_1fr_auto] lg:items-center">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${index === 0 ? "text-white" : "text-brand-700"}`}>
                      {item.step}
                    </p>
                    <span
                      className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        item.status === "available"
                          ? index === 0
                            ? "bg-white text-brand-900"
                            : "bg-brand-100 text-brand-800"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {item.status === "available" ? "Abierta actualmente" : "Pendiente"}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${index === 0 ? "text-white" : "text-brand-900"}`}>{item.title}</h3>
                    <p className={`mt-2 text-sm leading-7 ${index === 0 ? "text-white" : "text-slate-800"}`}>{item.description}</p>
                  </div>
                  <ButtonLink
                    className="w-full lg:w-auto"
                    disabled={item.status !== "available"}
                    external={item.external}
                    href={item.href}
                    variant={index === 0 ? "panel" : "primary"}
                  >
                    {item.buttonLabel}
                  </ButtonLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <ProcessStatusBanner />
      </section>

      <section className="mt-8 sm:mt-10">
        <div className="rounded-2xl border border-brand-200 bg-white p-5 sm:p-6">
          <p className="eyebrow">Después</p>
          <h2 className="mt-2 text-xl font-semibold text-brand-900">Espera el contacto para la entrevista formal</h2>
          <p className="mt-3 text-sm leading-7 text-slate-800">
            Cuando completes los 3 diagnósticos y tengas tus documentos enviados, nuestro equipo te contactará. No necesitas llenar otro formulario para la entrevista.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
