import { AlertCircle, Info } from "lucide-react";

import type { Announcement } from "@/data/site";
import { cn } from "@/lib/utils";

export function AnnouncementBanner({ item }: { item: Announcement }) {
  const warning = item.tone === "warning";

  return (
    <div
      className={cn(
        "card flex items-start gap-4 p-5",
        warning ? "border-gold-200 tint-gold" : "border-brand-100 tint-brand"
      )}
    >
      <div
        className={cn(
          "rounded-full p-2",
          warning ? "bg-gold-100 text-gold-700" : "bg-brand-100 text-brand-700"
        )}
      >
        {warning ? <AlertCircle className="h-5 w-5" /> : <Info className="h-5 w-5" />}
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-brand-900">{item.title}</p>
        <p className="text-sm leading-6 text-slate-800">{item.detail}</p>
      </div>
    </div>
  );
}
