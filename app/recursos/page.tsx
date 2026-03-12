import { PageShell } from "@/components/layout/page-shell";
import { PublishingStatus } from "@/components/ui/publishing-status";
import { ResourcesBrowser } from "@/components/ui/resources-browser";
import { SectionHeading } from "@/components/ui/section-heading";
import { resourceCategories, resourceItems } from "@/data/resources";

export default function RecursosPage() {
  return (
    <PageShell
      eyebrow="Biblioteca de recursos"
      title="Recursos, formatos y accesos"
      description="Repositorio central de archivos, formularios y accesos de consulta para el proceso de convocatoria y curso."
    >
      <section className="space-y-6">
        <PublishingStatus />
      </section>

      <section className="mt-12 space-y-6">
        <SectionHeading
          eyebrow="Explorador de recursos"
          title="Busca por categoría o palabra clave"
          description="Los accesos disponibles se pueden abrir de inmediato. Los que aún no estén publicados se muestran como pendientes para evitar confusión."
        />
        <ResourcesBrowser categories={resourceCategories} items={resourceItems} />
      </section>
    </PageShell>
  );
}
