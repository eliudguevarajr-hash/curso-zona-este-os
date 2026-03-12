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
    <div className="space-y-12 py-10 sm:py-14">
      <section className="container-shell">
        <div className="card overflow-hidden">
          <div className="bg-soft-grid bg-[size:22px_22px] px-6 py-12 sm:px-10">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </div>
        </div>
      </section>
      <div className="container-shell">{children}</div>
    </div>
  );
}
