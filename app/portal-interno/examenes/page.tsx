import { PortalPageHeader } from "@/components/portal/portal-page-header";
import { portalQuizQuestions } from "@/lib/mock-data/portal";

export default function PortalQuizzesPage() {
  return (
    <div className="space-y-5">
      <PortalPageHeader
        breadcrumb="Portal Interno / Exámenes"
        eyebrow="Constructor de evaluación"
        title="Exámenes y Quizzes"
        description="Constructor inicial para banco de preguntas de opción múltiple con respuesta correcta y explicación."
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Nueva pregunta</p>
          <form className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Pregunta</label>
              <textarea className="form-control min-h-24" placeholder="Escribe el enunciado de la pregunta" />
            </div>
            {["A", "B", "C", "D"].map((option) => (
              <div key={option}>
                <label className="mb-2 block text-sm font-semibold text-brand-900">Opción {option}</label>
                <input className="form-control" placeholder={`Texto de la opción ${option}`} />
              </div>
            ))}
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Respuesta correcta</label>
              <select className="form-control" defaultValue="A">
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-brand-900">Explicación</label>
              <textarea className="form-control min-h-24" placeholder="Explicación o retroalimentación para la respuesta correcta" />
            </div>
          </form>
        </article>

        <article className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-5 shadow-soft backdrop-blur">
          <p className="eyebrow">Preguntas de ejemplo</p>
          <div className="mt-4 space-y-4">
            {portalQuizQuestions.map((question) => (
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4" key={question.id}>
                <h3 className="text-base font-semibold text-brand-900">{question.prompt}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {question.options.map((option) => (
                    <li key={option.key}>
                      {option.key}. {option.label}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold text-brand-800">Correcta: {question.correctAnswer}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{question.explanation}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
