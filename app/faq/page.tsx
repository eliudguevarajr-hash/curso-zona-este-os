import { PageShell } from "@/components/layout/page-shell";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/data/faq";

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="Preguntas frecuentes"
      title="Respuestas rápidas para dudas comunes"
      description="Usa esta página para resolver dudas puntuales sin recorrer todo el sitio."
    >
      <FAQAccordion items={faqItems} />
    </PageShell>
  );
}
