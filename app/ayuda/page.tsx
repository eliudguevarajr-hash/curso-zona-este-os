import { PageShell } from "@/components/layout/page-shell";
import { ContactForm } from "@/components/ui/contact-form";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contacts, supportAreas } from "@/data/contacts";

export default function AyudaPage() {
  return (
    <PageShell eyebrow="Ayuda y contacto" title="Orientación y soporte por zona" description="Encuentra apoyo según el tipo de duda y comunica tu situación al responsable que corresponda.">
      <section className="space-y-6">
        <SectionHeading eyebrow="Atención por tema" title="Tipos de ayuda disponibles" description="La atención está organizada para responder con claridad a las necesidades más frecuentes del proceso." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportAreas.map((area) => (
            <InfoCard key={area.title} title={area.title} description={area.description} accent="bg-brand-600" />
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Contactos por zona" title="Directorio de responsables" description="La Zona Este aparece priorizada, pero también se incluyen referencias de otras zonas y del departamento nacional para dudas o aclaraciones." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((contact) => (
            <div className={`card p-6 ${contact.primary ? "border-brand-300 bg-brand-50/70" : ""}`} key={contact.phone}>
              {contact.primary ? (
                <span className="rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">Prioritario</span>
              ) : null}
              <h3 className="mt-4 text-lg font-semibold text-brand-900">{contact.zone}</h3>
              <p className="mt-2 text-sm text-slate-600">{contact.person}</p>
              <a className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-900" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <ContactForm />
      </section>
    </PageShell>
  );
}
