import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("h-10 w-full rounded-xl border border-border bg-black/20 px-3 text-sm outline-none ring-0 placeholder:text-muted focus:border-accent", props.className)} />;
}
