export default function NotFound() {
  return (
    <main className="min-h-svh bg-blacksite-bg px-5 py-6 text-blacksite-text sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-5xl flex-col justify-between border border-white/10 bg-blacksite-panel/70 p-5 shadow-dossier sm:p-8">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4 font-mono text-xs uppercase text-blacksite-muted sm:flex-row sm:items-center sm:justify-between">
          <span>BLACKSITE / OUT OF SCOPE</span>
          <span className="text-blacksite-redSoft/80">PATH NOT IN ENGAGEMENT</span>
        </div>

        <div className="py-10">
          <p className="font-mono text-xs uppercase text-blacksite-redSoft/80">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-7xl">
            Out of scope.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blacksite-muted">
            This path is not part of the public excerpt. Check the dossier,
            verify the route, and do not submit this as a finding.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[11px] uppercase text-blacksite-muted sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="text-blacksite-text transition hover:text-blacksite-redSoft focus:outline-none focus-visible:ring-2 focus-visible:ring-blacksite-redSoft"
          >
            Return to scope
          </a>
          <span>PUBLIC EXCERPT // LIMITED SURFACE</span>
        </div>
      </section>
    </main>
  );
}
