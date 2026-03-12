import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { CtaPanel } from "@/components/ui/cta-panel";
import { InfoCard } from "@/components/ui/info-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { classroomCourses, classroomOverview, classroomSteps } from "@/data/classroom";

export default function ClassroomPage() {
  return (
    <PageShell eyebrow="Google Classroom" title="Uso oficial de Classroom" description="Google Classroom es la plataforma para tareas, entregas, actividad de clase y comunicación académica cuando aplique.">
      <section className="grid gap-4 md:grid-cols-3">
        {classroomOverview.map((item) => (
          <InfoCard key={item} title="Información clave" description={item} accent="bg-brand-500" />
        ))}
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Guía rápida" title="¿Cómo utilizar Classroom?" description="Este sitio no sustituye Classroom. Aquí solo encuentras orientación y enlaces para llegar a tu clase." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {classroomSteps.map((step, index) => (
            <div className="card p-5" key={step}>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">{index + 1}</span>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading eyebrow="Accesos por materia" title="Clases disponibles" description="Actualiza estos códigos o enlaces cuando el equipo académico defina los accesos finales." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {classroomCourses.map((course) => (
            <div className="card p-5" key={course.title}>
              <h3 className="text-lg font-semibold text-brand-900">{course.title}</h3>
              <p className="mt-3 text-sm text-slate-600">Código o referencia: {course.code}</p>
              <div className="mt-5">
                <ButtonLink href={course.href} external variant="secondary">Entrar a Classroom</ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <CtaPanel
          title="Si tienes problemas de acceso, no te detengas"
          description="Verifica tu clase asignada, confirma el código o enlace y busca apoyo con el responsable de tu zona si tu acceso no funciona correctamente."
          actions={[
            { label: "Ir a Ayuda", href: "/ayuda" },
            { label: "Ver Recursos", href: "/recursos" },
          ]}
        />
      </section>
    </PageShell>
  );
}
