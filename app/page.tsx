import { ButtonLink } from "@/components/ui/button-link";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { processSequence } from "@/data/process";
import { siteMeta } from "@/data/site";

const audienceItems = ["Varones Bautizados", "Laicos", "Ayudas"];

export default function HomePage() {
  return (
    <div className="pb-6 sm:pb-8">
      <section className="container-shell pt-6 sm:pt-10 lg:pt-12">
        <div className="soft-panel overflow-hidden">
          <div className="grid gap-7 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-10">
            <div className="lg:order-2">
              <p className="eyebrow">Centro oficial de información</p>
              <h1 className="mt-3 font-display text-[2rem] leading-tight text-brand-900 sm:mt-4 sm:text-5xl lg:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-3 text-base font-semibold text-brand-700 sm:mt-4 sm:text-xl">{siteMeta.subtitle}</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-800 sm:mt-6 sm:text-base sm:leading-8">
                Esta etapa tiene una sola ruta. Sigue el orden que aparece primero en esta página.
              </p>

              <div className="mt-6 rounded-2xl border border-brand-200 bg-white p-4 sm:mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Deben completar esta etapa</p>
                <div className="mt-3 grid gap-2">
                  {audienceItems.map((item) => (
                    <div className="rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-900" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <ProcessStatusBanner />
              </div>
            </div>

            <div className="grid gap-4 lg:order-1">
              <div className="rounded-3xl border-2 border-brand-700 bg-white p-5 shadow-soft sm:p-6">
                <p className="eyebrow">Primero mira esta ruta</p>
                <h2 className="mt-2 font-display text-3xl text-brand-900">Haz esto en orden</h2>
                <p className="mt-3 text-sm leading-7 text-slate-800">
                  No saltes pasos. Si ya subiste tus documentos, empieza en el Paso 2.
                </p>
                <div className="mt-5 grid gap-3">
                  {processSequence.map((item, index) => (
                    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-4" key={item.title}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{item.step}</p>
                          <h3 className="mt-1 text-base font-semibold text-brand-900">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-800">{item.description}</p>
                        </div>
                        <ButtonLink
                          className="w-full shrink-0 sm:w-auto"
                          disabled={item.status !== "available"}
                          external={item.external}
                          href={item.href}
                          variant={index === 0 ? "secondary" : "primary"}
                        >
                          {item.buttonLabel}
                        </ButtonLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-200 bg-white p-4">
                <p className="text-sm leading-6 text-slate-800">
                  Después de completar los diagnósticos y tener tus documentos enviados, no llenes otro formulario para la entrevista. El equipo de Zona Este te contactará.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
