import { processStatus } from "@/data/process";

export function ProcessStatusBanner() {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-900 bg-brand-900 shadow-float">
      <div className="grid gap-px bg-brand-700 md:grid-cols-2">
        <div className="bg-brand-900 px-6 py-5 text-white">
          <p className="eyebrow-inverse">Fase Actual</p>
          <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-900">
            Abierta Actualmente
          </span>
          <h3 className="mt-2 text-2xl font-semibold text-white">{processStatus.currentPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-white/90">{processStatus.currentMessage}</p>
        </div>
        <div className="bg-brand-800 px-6 py-5 text-white">
          <p className="eyebrow-inverse">Próxima Fase</p>
          <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-900">
            Pendiente
          </span>
          <h3 className="mt-2 text-2xl font-semibold text-white">{processStatus.nextPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-white/90">{processStatus.nextMessage}</p>
        </div>
      </div>
    </div>
  );
}
