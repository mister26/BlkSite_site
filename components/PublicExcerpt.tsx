"use client";

import { motion } from "framer-motion";
import { ArtifactExcerpt } from "@/components/ArtifactExcerpt";
import { RedactedLine } from "@/components/RedactedLine";
import { SectionLabel } from "@/components/SectionLabel";

export function PublicExcerpt() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <SectionLabel eyebrow="PUBLIC RECORD" title="Public Excerpt" />

      <motion.article
        className="mt-8 rounded-lg border border-blacksite-red/24 bg-blacksite-panel/80 p-5 shadow-dossier backdrop-blur-md sm:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div className="grid gap-4 border-b border-white/10 pb-6 font-mono text-sm uppercase text-blacksite-text">
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">FILE</span>
            <span>BS-001</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">STATUS</span>
            <span>ACTIVE</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">ACCESS</span>
            <span>LIMITED DISCLOSURE</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">SUMMARY</span>
            <span>
              <span className="sr-only">redacted</span>
              <RedactedLine
                widthClass="w-64 max-w-full"
                copyText="you copied a redaction. that's not how redactions work. (this one's real though.)"
              />
            </span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">NOTE</span>
            <span>Public surface intentionally minimal.</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <span className="text-blacksite-muted">CHECK</span>
            <span>Additional details withheld. Operator review required.</span>
          </div>
        </div>

        <p className="mt-6 max-w-3xl whitespace-pre-line font-mono text-sm uppercase leading-7 text-blacksite-muted sm:text-base">
          Scoped review only.{"\n"}
          Evidence before claim.{"\n"}
          Release by approval.
        </p>

        <ArtifactExcerpt />
      </motion.article>
    </section>
  );
}
