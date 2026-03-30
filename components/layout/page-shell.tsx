import type { ReactNode } from "react";

import { SectionHeading } from "../ui/section-heading";

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="space-y-8 py-6 sm:space-y-10 sm:py-10 lg:py-12">
      <section className="container-shell">
        <div className="soft-panel overflow-hidden">
          <div className="surface-grid px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </div>
        </div>
      </section>
      <div className="container-shell">{children}</div>
    </div>
  );
}
