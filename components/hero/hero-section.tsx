import Link from "next/link";
import { ArrowRight, Bot, Coins, Radar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const points = [
  { icon: Radar, label: "Live scanner simulation" },
  { icon: Coins, label: "Treasury rotation engine" },
  { icon: ShieldCheck, label: "Reserve & distribution logic" },
  { icon: Bot, label: "Architecture-ready product shell" },
];

export function HeroSection() {
  return (
    <section className="panel overflow-hidden">
      <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-accent">
            Product demo · live simulation
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Premium terminal for meme coin scanning, treasury rotation and simulated distributions.
          </h1>
          <p className="max-w-2xl text-base text-muted md:text-lg">
            memevault-ai is presented as a product demo, live simulation, architecture-ready scanner and treasury rotation prototype.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/bot-live"><Button size="lg">Open Bot Live <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/docs"><Button variant="secondary" size="lg">Read docs</Button></Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {points.map((point) => (
            <Card key={point.label}>
              <CardContent className="flex h-full items-center gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent"><point.icon className="h-5 w-5" /></div>
                <div className="font-medium">{point.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
