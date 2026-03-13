import { processStatus } from "@/data/process";

export function ProcessStatusBanner() {
  return (
    <div className="card p-5 tint-mist">
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Fase Actual</p>
          <h3 className="mt-2 text-xl font-semibold text-brand-900">{processStatus.currentPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{processStatus.currentMessage}</p>
        </div>
        <div>
          <p className="eyebrow">Próxima Fase</p>
          <h3 className="mt-2 text-xl font-semibold text-brand-900">{processStatus.nextPhase}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{processStatus.nextMessage}</p>
        </div>
      </div>
    </div>
  );
}
