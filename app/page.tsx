import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { KeyDates } from "@/components/ui/key-dates";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { keyDates } from "@/data/courses";
import { processSequence } from "@/data/process";
import { announcements, quickLinks, siteMeta } from "@/data/site";

const audienceItems = ["Varones Bautizados", "Laicos", "Ayudas"];

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
                <ButtonLink className="w-full sm:w-auto" href="/inscripcion">
                  Comenzar Proceso
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

      <section className="container-shell mt-10 space-y-5">
        <SectionHeading
          eyebrow="Fechas clave"
          title="Solo recuerda esto"
          description="Toma estas fechas solo como referencia después de registrarte."
        />
        <KeyDates items={keyDates.slice(0, 3)} />
      </section>

      <section className="container-shell mt-10 space-y-5">
        <SectionHeading
          eyebrow="Apoyo"
          title="Consulta esto solo si lo necesitas"
          description="Estos accesos no sustituyen tu registro. Úsalos solo como apoyo."
        />
        <div className="card p-6 sm:p-8">
          <div className="space-y-4">
            {quickLinks.map((item) => (
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between" key={item.title}>
                <div>
                  <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{item.description}</p>
                </div>
                {item.external ? (
                  <a className="action-link" href={item.href} rel="noreferrer" target="_blank">
                    Abrir
                  </a>
                ) : (
                  <Link className="action-link" href={item.href}>
                    Abrir
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
