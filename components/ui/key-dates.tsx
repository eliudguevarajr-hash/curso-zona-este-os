type DateItem = {
  label: string;
  date: string;
  kind: string;
};

export function KeyDates({ items }: { items: DateItem[] }) {
  return (
    <div className="card divide-y divide-slate-200/80 overflow-hidden">
      {items.map((item) => (
        <div
          key={`${item.label}-${item.date}`}
          className="grid gap-2 px-5 py-4 sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-3"
        >
          <span className="rounded-full bg-brand-50 px-3 py-1 text-center text-xs font-semibold text-brand-700">
            {item.kind}
          </span>
          <h3 className="text-base font-semibold text-brand-900">{item.label}</h3>
          <p className="text-sm text-slate-700 sm:text-right">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
