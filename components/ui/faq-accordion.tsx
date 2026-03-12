"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItem === index;

        return (
          <div key={item.question} className="card overflow-hidden">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenItem(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-base font-semibold text-brand-900">{item.question}</span>
              <ChevronDown className={cn("h-5 w-5 text-brand-700", isOpen && "rotate-180")} />
            </button>
            {isOpen ? (
              <div className="border-t border-line px-5 py-4 text-sm leading-7 text-slate-600">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
