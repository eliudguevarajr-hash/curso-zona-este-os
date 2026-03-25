type SummaryCardProps = {
  label: string;
  value: string | number;
  helpText: string;
};

export function SummaryCard({ label, value, helpText }: SummaryCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-brand-900">{value}</p>
      <p className="mt-2 text-sm text-slate-700">{helpText}</p>
    </article>
  );
}
