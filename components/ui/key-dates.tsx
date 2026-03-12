type DateItem = {
  label: string;
  date: string;
  kind: string;
};

export function KeyDates({ items }: { items: DateItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={`${item.label}-${item.date}`} className="card p-5">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {item.kind}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-brand-900">{item.label}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.date}</p>
        </div>
      ))}
    </div>
  );
}
