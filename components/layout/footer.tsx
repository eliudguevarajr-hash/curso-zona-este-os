import Link from "next/link";

import { contacts } from "@/data/contacts";
import { footerLinks, siteMeta } from "@/data/site";

export function Footer() {
  const primaryContact = contacts.find((contact) => contact.primary);

  return (
    <footer className="mt-20 border-t border-line bg-brand-900 text-brand-100">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <p className="font-display text-2xl text-white">{siteMeta.title}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.22em] text-brand-300">Convocatoria 2026</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-brand-100/90">
            Portal oficial de información, orientación y navegación para el Curso de Capacitación Ministerial 2026.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Secciones</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <Link key={item.href} className="text-sm hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Ayuda</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p>Contacto principal Zona Este</p>
            <p className="font-semibold text-white">{primaryContact?.person}</p>
            <a className="hover:text-white" href={`tel:${primaryContact?.phone}`}>
              {primaryContact?.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-4 text-xs text-brand-200">
          © 2026 Departamento Educativo – Zona Este. Sitio informativo oficial de la Convocatoria 2026.
        </div>
      </div>
    </footer>
  );
}
