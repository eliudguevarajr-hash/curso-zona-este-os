import { PageShell } from "@/components/layout/page-shell";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/data/faq";

export default function FAQPage() {
  return (
    <PageShell eyebrow="Preguntas frecuentes" title="Respuestas rápidas para dudas comunes" description="Esta sección reúne las aclaraciones más importantes sobre la convocatoria, la inscripción, el curso y los accesos digitales.">
      <FAQAccordion items={faqItems} />
    </PageShell>
  );
}
