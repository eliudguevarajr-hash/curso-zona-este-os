"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileStack,
  GraduationCap,
  LayoutDashboard,
  NotebookPen,
  Settings,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const portalNav = [
  { href: "/portal-interno", label: "Panel Administrativo", icon: LayoutDashboard },
  { href: "/portal-interno/estudiantes", label: "Estudiantes", icon: Users },
  { href: "/portal-interno/materias", label: "Materias", icon: BookOpen },
  { href: "/portal-interno/lecciones", label: "Lecciones", icon: NotebookPen },
  { href: "/portal-interno/tareas", label: "Tareas", icon: ClipboardCheck },
  { href: "/portal-interno/examenes", label: "Exámenes", icon: GraduationCap },
  { href: "/portal-interno/anuncios", label: "Anuncios", icon: Bell },
  { href: "/portal-interno/recursos", label: "Recursos", icon: FileStack },
  { href: "/portal-interno/calendario", label: "Calendario", icon: CalendarDays },
  { href: "/portal-interno/configuracion", label: "Configuración", icon: Settings },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-[2rem] border border-brand-200/70 bg-white/85 p-4 shadow-soft backdrop-blur">
      <div className="mb-4 rounded-3xl bg-brand-900 px-4 py-4 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Portal Interno</p>
        <h2 className="mt-2 text-lg font-semibold">Departamento Educativo: Zona Este</h2>
        <p className="mt-1 text-sm text-white/80">Acceso administrativo privado</p>
      </div>

      <nav className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {portalNav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold transition",
                active
                  ? "bg-brand-100 text-brand-900 ring-1 ring-brand-200"
                  : "text-slate-700 hover:bg-brand-50 hover:text-brand-900",
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
