export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      <p className="max-w-3xl text-sm text-muted md:text-base">{description}</p>
    </div>
  );
}
