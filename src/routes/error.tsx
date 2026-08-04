import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";
import { Section } from "@/components/site/primitives";

function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? error.statusText || "Something went wrong"
    : error instanceof Error
      ? error.message
      : "Something went wrong";

  return (
    <Section>
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-soft">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Unexpected error
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-navy">We hit a problem</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{message}</p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4" aria-hidden="true" /> Return home
          </Link>
        </div>
      </div>
    </Section>
  );
}

export default ErrorPage;
