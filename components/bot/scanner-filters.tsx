import { Search, SlidersHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ScannerFilters() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted" />
          <Input className="pl-9" placeholder="Search symbol, chain or source..." />
        </div>
        <Button variant="secondary"><SlidersHorizontal className="mr-2 h-4 w-4" />Filters</Button>
        <Button variant="outline">Sort by score</Button>
      </CardContent>
    </Card>
  );
}
