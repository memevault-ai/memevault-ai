import { docsContent } from "@/data/docs.content";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function DocsContent() {
  const sections = [
    ["Architecture", docsContent.architecture],
    ["Product Thesis", docsContent.thesis],
    ["Scanner Logic", docsContent.scanner],
    ["Treasury Logic", docsContent.treasury],
    ["Roadmap", docsContent.roadmap],
  ];

  return (
    <div className="space-y-4">
      {sections.map(([title, content]) => (
        <Card key={title}>
          <CardHeader><h3 className="text-lg font-semibold">{title}</h3></CardHeader>
          <CardContent><p className="text-sm leading-7 text-muted">{content}</p></CardContent>
        </Card>
      ))}
    </div>
  );
}
