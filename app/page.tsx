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
const openSteps = processSequence.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-6 sm:pb-8">
      <section className="container-shell pt-6 sm:pt-10 lg:pt-12">
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid grid gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:px-10">
            <div>
              <p className="eyebrow">Centro oficial de información</p>
              <h1 className="mt-3 font-display text-[2rem] leading-tight text-brand-900 sm:mt-4 sm:text-5xl lg:text-6xl">
                {siteMeta.title}
              </h1>
              <p className="mt-3 text-base text-brand-700 sm:mt-4 sm:text-xl">{siteMeta.subtitle}</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 sm:mt-6 sm:text-base sm:leading-8">
                Esta semana debes completar los 3 diagnósticos individuales. No necesitas hacer otro paso antes de eso.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <ButtonLink className="w-full sm:w-auto" href="/inscripcion">
                  Abrir Diagnósticos
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-4">
              <ProcessStatusBanner />
              <div className="brand-panel p-5">
                <p className="eyebrow-inverse">Quiénes deben completar esta etapa</p>
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
          title="Completa estos 3 diagnósticos"
          description="Hazlos en este orden y completa los 3 durante esta semana."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {openSteps.map((item, index) => (
            <div className={`${index === 0 ? "brand-panel" : "card"} h-full p-5 sm:p-6`} key={item.title}>
              <p className={index === 0 ? "eyebrow-inverse" : "eyebrow"}>{item.step}</p>
              <h3 className={`mt-3 text-2xl font-semibold ${index === 0 ? "text-white" : "text-brand-900"}`}>{item.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${index === 0 ? "text-white/90" : "text-slate-700"}`}>{item.description}</p>
              <ButtonLink
                className="mt-5 w-full sm:w-auto"
                href={item.href}
                external={item.external}
                variant={index === 0 ? "panel" : "secondary"}
              >
                {item.buttonLabel}
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Después de los diagnósticos"
          title="Entrevista formal"
          description="Cuando completes los 3 formularios, nuestro equipo te contactará para realizar la entrevista final."
        />
        <div className="card p-5 sm:p-6 lg:p-8 tint-mist">
          <p className="text-sm leading-7 text-slate-700">
            No necesitas llenar otro formulario para la entrevista. Solo asegúrate de completar correctamente los 3 diagnósticos de esta semana.
          </p>
        </div>
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Fechas clave"
          title="Solo como referencia"
          description="Estas fechas son apoyo general del curso y no cambian el orden de la etapa actual."
        />
        <KeyDates items={keyDates.slice(0, 3)} />
      </section>

      <section className="container-shell mt-8 space-y-5 sm:mt-10">
        <SectionHeading
          eyebrow="Apoyo"
          title="Consulta esto solo si lo necesitas"
          description="Estos accesos son apoyo adicional mientras completas tus diagnósticos."
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
