import positions from "@/data/treasury.positions.json";

export function getRotationOverview() {
  const totalAllocation = positions.reduce((acc, item) => acc + item.allocation, 0);
  const weightedConfidence = positions.reduce((acc, item) => acc + item.confidence * item.allocation, 0) / totalAllocation;
  return {
    totalAllocation,
    weightedConfidence: Math.round(weightedConfidence),
    activeCount: positions.filter((item) => item.status === "active").length,
  };
}
