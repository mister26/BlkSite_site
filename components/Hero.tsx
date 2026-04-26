"use client";

import { motion } from "framer-motion";
import { FileStamp } from "@/components/FileStamp";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[76svh] w-full max-w-7xl flex-col justify-start px-5 py-5 sm:justify-between sm:px-8 sm:py-8 lg:px-10">
      <FileStamp />
      <nav
        aria-label="Project"
        className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 font-mono text-xs uppercase text-blacksite-muted"
      >
        <span>Redacted Project</span>
        <span className="hidden text-blacksite-redSoft/80 sm:inline">
          Public surface
        </span>
      </nav>

      <motion.div
        className="max-w-4xl py-12 sm:py-16 lg:py-20"
        initial={false}
        animate={{ opacity: [0.9, 1], y: [10, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <p className="font-mono text-xs uppercase text-blacksite-redSoft/85">
          PUBLIC EXCERPT // BS-001
        </p>
        <h1 className="mt-5 text-5xl font-semibold leading-none text-blacksite-text sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
          BLACKSITE
        </h1>
        <p className="mt-7 max-w-[20rem] text-2xl font-medium leading-tight text-blacksite-text/92 sm:max-w-none sm:text-4xl">
          Private offensive security research.
        </p>
        <p className="mt-4 flex max-w-[21rem] flex-wrap gap-x-3 gap-y-1 font-mono text-sm uppercase text-blacksite-muted sm:max-w-none sm:text-base">
          <span>Scoped.</span>
          <span>Local.</span>
          <span>Evidence-bound.</span>
        </p>
        <p className="mt-7 max-w-[21rem] text-base leading-7 text-blacksite-muted sm:max-w-2xl sm:text-lg">
          A controlled workspace for target selection and findings that survive
          review.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#dossier"
            className="rounded-lg border border-blacksite-red/45 bg-blacksite-red/12 px-5 py-3 text-sm font-medium text-blacksite-text shadow-redline transition hover:border-blacksite-redSoft hover:bg-blacksite-red/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blacksite-redSoft focus-visible:ring-offset-2 focus-visible:ring-offset-blacksite-bg"
          >
            View Dossier
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-blacksite-text/85 transition hover:border-white/24 hover:bg-white/[0.06] hover:text-blacksite-text focus:outline-none focus-visible:ring-2 focus-visible:ring-blacksite-redSoft focus-visible:ring-offset-2 focus-visible:ring-offset-blacksite-bg"
          >
            Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hidden gap-3 border-y border-white/10 py-3 font-mono text-[11px] uppercase text-blacksite-muted sm:grid sm:grid-cols-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.6 }}
      >
        <span>Scope ledger</span>
        <span className="sm:text-center">Local record</span>
        <span className="sm:text-center">Evidence log</span>
        <span className="sm:text-right">Submission draft</span>
      </motion.div>
    </section>
  );
}
