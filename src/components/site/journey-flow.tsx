import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { journeySteps } from "@/lib/site-data";
import { Reveal } from "./primitives";
import { cn } from "@/lib/utils";

/**
 * "From Lead to Closed Deal" — a horizontal rail that plays through the
 * journey steps defined in site-data.
 */
export function JourneyFlow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % journeySteps.length), 2200);
    return () => clearInterval(id);
  }, [paused]);

  const step = journeySteps[active];

  return (
    <Reveal>
      <div
        className="rounded-[2rem] border border-border bg-card px-5 py-10 shadow-soft md:px-10 md:py-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex flex-wrap items-start justify-center gap-3 overflow-hidden pb-2 md:gap-4">
          {journeySteps.map((s, i) => {
            const done = i < active;
            const current = i === active;
            return (
              <div key={s.label} className="flex min-w-[84px] items-start sm:min-w-[96px]">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full max-w-[96px] flex-col items-center gap-3 text-center sm:max-w-[112px]"
                >
                  <motion.span
                    animate={{
                      scale: current ? 1.08 : 1,
                      borderColor: done || current ? "var(--electric)" : "var(--border)",
                      backgroundColor: current ? "var(--electric)" : "var(--card)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border"
                  >
                    <s.icon
                      className={cn(
                        "h-5 w-5 transition-colors duration-300",
                        current
                          ? "text-primary-foreground"
                          : done
                            ? "text-electric"
                            : "text-muted-foreground",
                      )}
                    />
                  </motion.span>
                  <span
                    className={cn(
                      "text-xs font-medium leading-tight transition-colors duration-300",
                      current || done ? "text-navy" : "text-muted-foreground",
                    )}
                  >
                    {s.label}
                  </span>
                </button>

                {i < journeySteps.length - 1 ? (
                  <div className="mt-6 hidden h-px w-6 shrink-0 bg-border sm:block sm:w-8 md:w-10">
                    <motion.div
                      className="h-px bg-electric"
                      animate={{ width: done ? "100%" : "0%" }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-xl rounded-2xl border border-border bg-secondary/50 px-6 py-5 text-center"
        >
          <p className="eyebrow">{step.kind}</p>
          <p className="mt-2 text-sm leading-relaxed text-navy-soft">{step.detail}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}
