import Link from "next/link";

import { contacts } from "@/data/contacts";
import { footerLinks } from "@/data/site";
import { SiteLogo } from "../ui/site-logo";

export function Footer() {
  const primaryContact = contacts.find((contact) => contact.primary);

  return (
    <footer className="mt-20 border-t border-line bg-brand-wash text-brand-100">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
        <div>
          <SiteLogo variant="footer" />
          <p className="mt-4 max-w-xl text-sm leading-7 text-brand-100/90">
            Portal oficial de informacion para la Convocatoria y Curso de Capacitacion Ministerial 2026.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">Lo principal</h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <Link key={item.href} className="text-sm text-brand-50 hover:text-white" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-100">Contacto principal</h3>
          <div className="mt-4 space-y-2 text-sm">
            <p className="text-brand-50">Zona Este</p>
            <p className="font-semibold text-white">{primaryContact?.person}</p>
            <a className="text-brand-50 hover:text-white" href={`tel:${primaryContact?.phone}`}>
              {primaryContact?.phone}
            </a>
            <p className="pt-2 text-brand-100">Si tienes duda, comienza en la seccion de Ayuda.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-4 text-xs text-brand-200">
          © 2026 Departamento Educativo - Zona Este. Sitio informativo oficial de la Convocatoria 2026.
        </div>
      </div>
    </footer>
  );
}
