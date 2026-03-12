"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { ResourceCategory, ResourceItem } from "@/data/resources";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

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
                "interactive-chip",
                activeCategory === "Todas" ? "interactive-chip-active" : "interactive-chip-idle"
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
                  "interactive-chip",
                  activeCategory === category ? "interactive-chip-active" : "interactive-chip-idle"
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
              className="form-control pl-10"
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
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                {item.type}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-brand-900">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-7 text-slate-700">{item.description}</p>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                  item.status === "available"
                    ? "bg-sage-100 text-sage-700"
                    : "bg-gold-100 text-gold-700"
                }`}
              >
                {item.status === "available" ? "Disponible" : "Pendiente"}
              </span>
            </div>
            {item.note ? <p className="mt-3 text-xs leading-6 text-slate-600">{item.note}</p> : null}
            <div className="mt-5">
              <ButtonLink
                href={item.href}
                external={item.href.startsWith("http")}
                variant="secondary"
                disabled={item.status !== "available"}
              >
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
