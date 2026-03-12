import { PageShell } from "@/components/layout/page-shell";
import { PublishingStatus } from "@/components/ui/publishing-status";
import { ResourcesBrowser } from "@/components/ui/resources-browser";
import { SectionHeading } from "@/components/ui/section-heading";
import { resourceCategories, resourceItems } from "@/data/resources";

export default function RecursosPage() {
  return (
    <PageShell
      eyebrow="Recursos"
      title="Recursos y accesos oficiales"
      description="Aquí se concentran los documentos, formularios y accesos que ya fueron publicados oficialmente."
    >
      <section className="space-y-6">
        <PublishingStatus />
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Explorador"
          title="Busca el recurso que necesitas"
          description="Usa esta sección para abrir un documento o formulario específico sin recorrer varias páginas."
        />
        <ResourcesBrowser categories={resourceCategories} items={resourceItems} />
      </section>
    </PageShell>
  );
}
