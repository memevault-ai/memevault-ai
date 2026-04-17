import { docsContent } from "@/data/docs.content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DocsAccordion() {
  const items = [
    ["Architecture", docsContent.architecture],
    ["Scanner Logic", docsContent.scanner],
    ["Treasury Logic", docsContent.treasury],
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {items.map(([title, content]) => (
        <Card key={title}>
          <CardHeader><h3 className="font-semibold">{title}</h3></CardHeader>
          <CardContent><p className="text-sm text-muted">{content}</p></CardContent>
        </Card>
      ))}
    </div>
  );
}
