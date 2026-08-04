function LoadingPage() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center px-6 py-20" aria-live="polite" aria-busy="true">
      <div className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground shadow-soft">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-electric" aria-hidden="true" />
        Loading SYNTROXI
      </div>
    </div>
  );
}

export default LoadingPage;
