import { ButtonLink } from "@/components/ui/button-link";

export function DocumentsCard({
  documents,
  uploadHref,
  uploadExternal,
}: {
  documents: string[];
  uploadHref: string;
  uploadExternal?: boolean;
}) {
  return (
    <div className="card p-6 sm:p-8">
      <div className="mb-6 border-b border-dashed border-line pb-4">
        <p className="eyebrow">Documentos</p>
        <h3 className="mt-2 font-display text-3xl text-brand-900">Documentos que debes subir</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-700">
          Reúne este expediente y, después de completar tu registro, súbelo en el formulario oficial de documentos.
        </p>
        <div className="mt-4">
          <ButtonLink href={uploadHref} external={uploadExternal} variant="secondary">
            Abrir formulario de documentos
          </ButtonLink>
        </div>
      </div>
      <ol className="space-y-4 text-sm text-slate-700">
        {documents.map((document, index) => (
          <li key={document} className="flex gap-4 border-b border-dashed border-line pb-4 last:border-none">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-semibold text-brand-700">
              {index + 1}
            </span>
            <span className="leading-7">{document}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
