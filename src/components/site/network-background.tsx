import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const nodes = [
  { x: 12, y: 26 },
  { x: 30, y: 12 },
  { x: 50, y: 30 },
  { x: 72, y: 16 },
  { x: 88, y: 34 },
  { x: 22, y: 62 },
  { x: 44, y: 76 },
  { x: 66, y: 58 },
  { x: 84, y: 74 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [2, 6],
  [6, 7],
  [7, 8],
  [3, 7],
  [4, 8],
  [1, 5],
];

export function NetworkBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 grid-lines opacity-[0.05]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/25 blur-[120px]" />
      <svg
        viewBox="0 0 100 90"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--electric)"
            strokeWidth={0.1}
            initial={reduce ? { opacity: 0.15 } : { pathLength: 0, opacity: 0 }}
            animate={reduce ? { opacity: 0.15 } : { pathLength: 1, opacity: 0.15 }}
            transition={{ duration: 2.2, delay: i * 0.09, ease: "easeInOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={0.55}
            fill="none"
            stroke="var(--navy)"
            strokeWidth={0.12}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              reduce
                ? { opacity: 0.25 }
                : { opacity: [0.16, 0.32, 0.16], scale: 1 }
            }
            transition={{
              duration: 7,
              delay: i * 0.15,
              repeat: reduce ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
