import Link from "next/link";

import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import { ButtonLink } from "@/components/ui/button-link";
import { KeyDates } from "@/components/ui/key-dates";
import { ProcessStatusBanner } from "@/components/ui/process-status-banner";
import { SectionHeading } from "@/components/ui/section-heading";
import { keyDates } from "@/data/courses";
import { processSequence } from "@/data/process";
import { announcements, quickLinks, siteMeta } from "@/data/site";

const audienceItems = ["Varones Bautizados", "Laicos", "Ayudas"];
const openSteps = processSequence.slice(0, 2);

export default function HomePage() {
  return (
    <div className="pb-6 sm:pb-8">
      <section className="container-shell pt-6 sm:pt-10 lg:pt-12">
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid grid gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:px-10">
            <div>
              <p className="eyebrow">Centro oficial de información</p>
              <h1 className="mt-3 font-display text-[2rem] leading-tight text-brand-900 sm:mt-4 sm:text-5xl lg:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-3 text-base text-brand-700 sm:mt-4 sm:text-xl">{siteMeta.subtitle}</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 sm:mt-6 sm:text-base sm:leading-8">
                Este portal te muestra exactamente qué hacer ahora para completar tu proceso sin pasos extra.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
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

      <section className="container-shell mt-8 grid gap-4 sm:mt-10">
        {announcements.map((item) => (
          <AnnouncementBanner item={item} key={item.title} />
        ))}
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Pasos"
          title="Haz solo estos dos pasos"
          description="Este es el proceso abierto actualmente. Hazlo en este orden."
        />
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="brand-panel h-full p-5 sm:p-6 lg:p-8">
            <p className="eyebrow-inverse">{openSteps[0].step}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{openSteps[0].title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/90">{openSteps[0].description}</p>
            <ButtonLink
              className="mt-5 w-full sm:w-auto"
              href={openSteps[0].href}
              external={openSteps[0].external}
              variant="panel"
            >
              {openSteps[0].buttonLabel}
            </ButtonLink>
          </div>

          <div className="card h-full p-5 sm:p-6 lg:p-8">
            <p className="eyebrow">{openSteps[1].step}</p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-900">{openSteps[1].title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{openSteps[1].description}</p>
            <p className="mt-3 text-sm font-medium text-brand-800">Haz este paso inmediatamente después del registro.</p>
            <ButtonLink
              className="mt-5 w-full sm:w-auto"
              href={openSteps[1].href}
              external={openSteps[1].external}
              variant="secondary"
            >
              {openSteps[1].buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Fechas clave"
          title="Solo recuerda esto"
          description="Toma estas fechas solo como referencia general del curso."
        />
        <KeyDates items={keyDates.slice(0, 3)} />
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Apoyo"
          title="Consulta esto solo si lo necesitas"
          description="Estos accesos son solo de referencia mientras completas tu proceso."
        />
        <div className="card p-5 sm:p-6">
          <div className="space-y-3">
            {quickLinks.map((item) => (
              <div
                className="flex flex-col gap-2 border-b border-dashed border-line pb-3 last:border-none last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                key={item.title}
              >
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-brand-900 sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.description}</p>
                </div>
                {item.external ? (
                  <a className="action-link shrink-0" href={item.href} rel="noreferrer" target="_blank">
                    Abrir
                  </a>
                ) : (
                  <Link className="action-link shrink-0" href={item.href}>
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
