import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLACKSITE / You Found It",
};

export default function YouFoundIt() {
  return (
    <main className="min-h-svh bg-blacksite-bg px-5 py-6 text-blacksite-text sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[calc(100svh-3rem)] max-w-5xl flex-col justify-between border border-white/10 bg-blacksite-panel/70 p-5 shadow-dossier sm:p-8">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4 font-mono text-xs uppercase text-blacksite-muted sm:flex-row sm:items-center sm:justify-between">
          <span>FILE BS-404 // EARNED SURFACE</span>
          <span className="text-blacksite-redSoft/80">NICE. KEEP GOING.</span>
        </div>

        <div className="py-10">
          <p className="font-mono text-xs uppercase text-blacksite-redSoft/80">
            /you-found-it
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-7xl">
            You looked.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blacksite-muted">
            That counts. Robots told you not to come here, which is usually the
            fastest way to make someone type the path by hand.
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-black/45">
            <img
              src="https://media1.tenor.com/m/Vyg73kR334sAAAAd/jurassic-park-ah.gif"
              alt="Ah ah ah, you didn't say the magic word."
              className="h-auto w-full max-w-xl border-b border-white/10 object-cover"
            />
            <div className="p-4 font-mono text-xs uppercase text-blacksite-muted">
              &gt; access not granted. joke acknowledged.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[11px] uppercase text-blacksite-muted sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="text-blacksite-text transition hover:text-blacksite-redSoft focus:outline-none focus-visible:ring-2 focus-visible:ring-blacksite-redSoft"
          >
            Return to public excerpt
          </a>
          <span>PAGE 1 OF 1 // REV EGG</span>
        </div>
      </section>
    </main>
  );
}
