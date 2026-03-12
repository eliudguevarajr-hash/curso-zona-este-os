import { publishingChecklist } from "@/data/links";

export function PublishingStatus() {
  return (
    <div className="card p-6 sm:p-8">
      <p className="eyebrow">Estado de Publicación</p>
      <h2 className="mt-3 font-display text-3xl text-brand-900">Qué ya está disponible y qué sigue pendiente</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
        Esta lista evita confusión. Si un acceso oficial aún no ha sido publicado, aquí se muestra claramente como pendiente.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {publishingChecklist.map((item, index) => (
          <div className={`rounded-2xl border border-line p-4 ${index % 2 === 0 ? "tint-brand" : "tint-gold"}`} key={item.title}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-brand-900">{item.title}</h3>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                  item.status === "available" ? "bg-sage-100 text-sage-700" : "bg-gold-100 text-gold-700"
                }`}
              >
                {item.status === "available" ? "Disponible" : "Pendiente"}
              </span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-wide text-brand-600">{item.audience}</p>
            {item.note ? <p className="mt-3 text-sm leading-6 text-slate-700">{item.note}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
