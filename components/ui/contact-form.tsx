"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card p-6">
      <h3 className="font-display text-2xl text-brand-900">Solicitud de ayuda</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        Formulario de demostración para la versión inicial. Puede conectarse a un servicio real en una
        fase posterior.
      </p>
      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <input className="form-control" placeholder="Nombre completo" required />
        <input className="form-control" placeholder="Teléfono" required />
        <input className="form-control sm:col-span-2" placeholder="Correo electrónico o medio de contacto" />
        <select className="form-control" defaultValue="Inscripción">
          <option>Inscripción</option>
          <option>Documentos</option>
          <option>Classroom</option>
          <option>Reuniones</option>
          <option>Otra duda</option>
        </select>
        <input className="form-control" placeholder="Zona" defaultValue="Zona Este" />
        <textarea
          className="form-control min-h-32 sm:col-span-2"
          placeholder="Describe tu duda o solicitud"
          required
        />
        <button
          className="inline-flex items-center justify-center rounded-2xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white ring-1 ring-transparent shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory sm:col-span-2"
          type="submit"
        >
          Enviar solicitud
        </button>
      </form>
      {submitted ? (
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-success">
          Tu solicitud se registró en esta interfaz de demostración. En fase 2 puede conectarse a correo,
          Forms o CRM.
        </p>
      ) : null}
    </div>
  );
}
