const items = ["Architecture", "Product Thesis", "Scanner Logic", "Treasury Logic", "Roadmap"];

export function DocsSidebar() {
  return (
    <aside className="panel p-4">
      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">Sections</div>
      <div className="space-y-2">
        {items.map((item) => <div key={item} className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-foreground">{item}</div>)}
      </div>
    </aside>
  );
}
