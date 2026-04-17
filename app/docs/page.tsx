import { SectionHeader } from "@/components/layout/section-header";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsContent } from "@/components/docs/docs-content";

export default function DocsPage() {
  return (
    <div className="space-y-6 pb-10">
      <SectionHeader
        eyebrow="Docs"
        title="Protocol documentation"
        description="Architecture, product thesis, scanner logic, treasury logic and roadmap in a clean reader UI."
      />
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <DocsSidebar />
        <DocsContent />
      </div>
    </div>
  );
}
