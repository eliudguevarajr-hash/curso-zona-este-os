import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { KeyDates } from "@/components/ui/key-dates";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { keyDates } from "@/data/courses";
import { roleCards } from "@/data/home";
import { managedLinks } from "@/data/links";
import { processSequence } from "@/data/process";
import { announcements, quickLinks, siteMeta } from "@/data/site";

const audienceItems = [
  "Varones bautizados en proceso de Aspirante",
  "Hermanos con reconocimiento de Obrero Laico",
  "Hermanos con jerarquía de Ayuda",
];

export default function HomePage() {
  return (
    <div className="pb-8">
      <section className="container-shell pt-8 sm:pt-12">
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">Centro oficial de información</p>
              <h1 className="mt-4 font-display text-[2.35rem] leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-4 text-lg text-brand-700 sm:text-xl">{siteMeta.subtitle}</p>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-700 sm:text-base">
                Este portal te muestra qué hacer ahora, qué acceso está habilitado y a quién contactar si necesitas ayuda.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  className="w-full sm:w-auto"
                  href={managedLinks.registrationForm.href}
                  external={managedLinks.registrationForm.external}
                >
                  Comenzar Proceso
                </ButtonLink>
                <ButtonLink className="w-full sm:w-auto" href="/ayuda" variant="secondary">
                  Necesito Ayuda
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-4">
              <ProcessStatusBanner />
              <div className="brand-panel p-5">
                <p className="eyebrow-inverse">Quiénes pueden participar</p>
                <div className="mt-4 grid gap-3">
                  {audienceItems.map((item) => (
                    <div className="panel-step" key={item}>
                      <p className="panel-step-copy">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell mt-10 grid gap-4">
        {announcements.map((item) => (
          <AnnouncementBanner item={item} key={item.title} />
        ))}
      </section>

      <section className="container-shell mt-10 space-y-5">
        <SectionHeading
          eyebrow="Rutas"
          title="Empieza por aquí"
          description="Por ahora solo necesitas registrarte o pedir ayuda."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {roleCards.map((card, index) => (
            <div className={`card p-6 ${index === 1 ? "tint-mist" : "tint-brand"}`} key={card.title}>
              <h3 className="text-xl font-semibold text-brand-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{card.description}</p>
              <div className="mt-5">
                <ButtonLink href={card.href} variant="secondary">
                  Continuar
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-10 space-y-5">
        <SectionHeading
          eyebrow="Pasos"
          title="Sigue este camino"
          description="Este es el proceso que debes seguir en este momento."
        />
        <div className="card divide-y divide-slate-200/80 overflow-hidden">
          {processSequence.map((item, index) => (
            <div
              className={`grid gap-3 px-5 py-4 md:grid-cols-[100px_1fr_auto] md:items-center ${
                index % 2 === 0 ? "tint-brand" : "tint-mist"
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
                variant="secondary"
                disabled={item.status !== "available"}
              >
                {item.buttonLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <SectionHeading
            eyebrow="Fechas clave"
            title="Solo recuerda esto"
            description="Estas fechas son suficientes para empezar."
          />
          <KeyDates items={keyDates.slice(0, 3)} />
        </div>

        <div className="space-y-5">
          <SectionHeading
            eyebrow="Accesos oficiales"
            title="Abre lo esencial"
            description="Aquí encuentras lo principal sin buscar en más páginas."
          />
          <div className="card divide-y divide-slate-200/80 overflow-hidden">
            {quickLinks.map((item, index) => (
              <div
                className={`grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center ${
                  index % 2 === 0 ? "tint-brand" : "tint-mist"
                }`}
                key={item.title}
              >
                <div>
                  <div className="flex flex-wrap items-start gap-3">
                    <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                        item.status === "available" ? "bg-brand-100 text-brand-700" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {item.status === "available" ? "Abierta actualmente" : "Pendiente"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
                </div>
                <ButtonLink
                  className="w-full md:w-auto"
                  href={item.href}
                  external={item.external}
                  variant="secondary"
                  disabled={item.status !== "available"}
                >
                  {item.status === "available" ? "Abrir" : "Pendiente"}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
