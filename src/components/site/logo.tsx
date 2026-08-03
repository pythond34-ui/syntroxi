import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="SYNTROXI"
      width={180}
      height={60}
      loading="eager"
      decoding="async"
      className={cn("h-16 w-[180px] object-contain sm:h-20", className)}
    />
  );
}
