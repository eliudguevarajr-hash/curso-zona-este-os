type Step = {
  title: string;
  description: string;
};

export function Stepper({ steps }: { steps: Step[] }) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
              {index + 1}
            </div>
            {index !== steps.length - 1 ? <div className="mt-3 h-full w-px bg-brand-200" /> : null}
          </div>
          <div className="card flex-1 p-5">
            <h3 className="text-lg font-semibold text-brand-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
