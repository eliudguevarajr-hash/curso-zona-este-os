"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { ResourceCategory, ResourceItem } from "@/data/resources";
import { ButtonLink } from "./button-link";
import { cn } from "@/lib/utils";

export function ResourcesBrowser({
  categories,
  items,
}: {
  categories: ResourceCategory[];
  items: ResourceItem[];
}) {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "Todas">("Todas");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === "Todas" || item.category === activeCategory;
      const haystack = `${item.title} ${item.description} ${item.category} ${item.type}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, items, query]);

  return (
    <div className="space-y-6">
      <div className="card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium",
                activeCategory === "Todas"
                  ? "bg-brand-700 text-white"
                  : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              )}
              onClick={() => setActiveCategory("Todas")}
              type="button"
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium",
                  activeCategory === category
                    ? "bg-brand-700 text-white"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                )}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-xl border border-line bg-white px-10 py-3 text-sm outline-none ring-brand-200 focus:ring"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar recurso, categoría o tipo"
              value={query}
            />
          </label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <div key={item.title} className="card flex h-full flex-col p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {item.category}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {item.type}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-900">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-7 text-slate-700">{item.description}</p>
            <div className="mt-5">
              <ButtonLink href={item.href} external={item.href.startsWith("http")} variant="secondary">
                Abrir recurso
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="card p-8 text-center">
          <h3 className="text-lg font-semibold text-brand-900">No hay resultados</h3>
          <p className="mt-2 text-sm text-slate-700">
            Ajusta la búsqueda o cambia la categoría para encontrar el recurso que necesitas.
          </p>
        </div>
      ) : null}
    </div>
  );
}
