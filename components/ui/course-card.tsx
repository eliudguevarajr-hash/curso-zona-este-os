import type { Course } from "@/data/courses";

import { ButtonLink } from "./button-link";

export function CourseCard({ course }: { course: Course }) {
  const isBreak = course.type === "Receso";

  return (
    <div className="card h-full p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{course.type}</p>
          <h3 className="mt-2 font-display text-2xl text-brand-900">{course.title}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isBreak ? "bg-amber-100 text-amber-800" : "bg-brand-100 text-brand-700"
          }`}
        >
          {course.status}
        </span>
      </div>
      <dl className="mt-5 grid gap-3 text-sm text-slate-700">
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt>Fechas</dt>
          <dd className="text-right font-medium text-ink">
            {course.start} al {course.end}
          </dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt>Duración</dt>
          <dd className="text-right font-medium text-ink">{course.duration}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt>Maestro / Instructor</dt>
          <dd className="text-right font-medium text-ink">{course.instructor}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt>Modalidad</dt>
          <dd className="text-right font-medium text-ink">{course.modality}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt>Classroom</dt>
          <dd className="text-right font-medium text-ink">{course.classroom}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt>Recursos</dt>
          <dd className="text-right font-medium text-ink">{course.resources}</dd>
        </div>
      </dl>
      <p className="mt-5 text-sm leading-7 text-slate-700">{course.description}</p>
      {!isBreak ? (
        <div className="mt-6">
          <ButtonLink href="/classroom" variant="secondary">
            Ver acceso de la materia
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
