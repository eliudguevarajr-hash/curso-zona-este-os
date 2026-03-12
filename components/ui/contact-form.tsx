"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card p-6">
      <h3 className="font-display text-2xl text-brand-900">Solicitud de ayuda</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        Formulario de demostración para la versión inicial. Puede conectarse a un servicio real en una fase posterior.
      </p>
      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <input className="rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring" placeholder="Nombre completo" required />
        <input className="rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring" placeholder="Teléfono" required />
        <input className="rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring sm:col-span-2" placeholder="Correo electrónico o medio de contacto" />
        <select className="rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring" defaultValue="Inscripción">
          <option>Inscripción</option>
          <option>Documentos</option>
          <option>Classroom</option>
          <option>Reuniones</option>
          <option>Otra duda</option>
        </select>
        <input className="rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring" placeholder="Zona" defaultValue="Zona Este" />
        <textarea
          className="min-h-32 rounded-xl border border-line px-4 py-3 text-sm outline-none ring-brand-200 focus:ring sm:col-span-2"
          placeholder="Describe tu duda o solicitud"
          required
        />
        <button className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800 sm:col-span-2" type="submit">
          Enviar solicitud
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-success">
          Tu solicitud se registró en esta interfaz de demostración. En fase 2 puede conectarse a correo, Forms o CRM.
        </p>
      ) : null}
    </div>
  );
}
