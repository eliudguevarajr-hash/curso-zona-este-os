import { processStatus } from "@/data/process";

export function ProcessStatusBanner() {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-300 bg-brand-wash shadow-float">
      <div className="grid gap-px bg-white/10 md:grid-cols-2">
        <div className="bg-white/8 px-6 py-5 text-white">
          <p className="eyebrow-inverse">Fase Actual</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{processStatus.currentPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-white/90">{processStatus.currentMessage}</p>
        </div>
        <div className="bg-white/12 px-6 py-5 text-white">
          <p className="eyebrow-inverse">Próxima Fase</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{processStatus.nextPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-white/90">{processStatus.nextMessage}</p>
        </div>
      </div>
    </div>
  );
}
