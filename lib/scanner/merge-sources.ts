import flap from "@/data/tokens.flap.json";
import fourmeme from "@/data/tokens.fourmeme.json";

export function mergeSources() {
  return [...flap, ...fourmeme];
}
