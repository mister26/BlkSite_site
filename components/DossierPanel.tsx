"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

const metadata = [
  ["STATUS", "ACTIVE"],
  ["CLASS", "PRIVATE RESEARCH SYSTEM"],
  ["POSTURE", "LOCAL-FIRST"],
  ["MODE", "SUBMISSION TRACK"],
  ["ISSUED", "2026-04-21"],
  ["REVIEW", "PENDING"],
  ["OPERATOR", "REDACTED"],
  ["AFFILIATION", "REDACTED"],
  ["RECORD", "PUBLIC EXCERPT ONLY"],
];

export function DossierPanel() {
  return (
    <section
      id="dossier"
      className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <motion.div
        className="mb-8 border-y border-white/10 py-3 font-mono text-[11px] uppercase text-blacksite-muted"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>FILE BS-001 // REV 03 // CONTROLLED DISCLOSURE</span>
          <span className="text-blacksite-redSoft/80">
            ISSUED 2026-04-21 // REVIEW PENDING
          </span>
        </div>
      </motion.div>

      <SectionLabel eyebrow="BLACK FILE // METADATA" title="Dossier" />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="rounded-lg border border-white/10 bg-blacksite-panel/78 p-4 shadow-dossier backdrop-blur-md sm:p-6"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="border-b border-white/10 pb-3 font-mono text-xs uppercase text-blacksite-redSoft/80">
            BS-001 // Public excerpt
          </div>
          <dl className="mt-2 divide-y divide-white/10">
            {metadata.map(([label, value], index) => (
              <motion.div
                key={label}
                className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.45 }}
              >
                <dt className="font-mono text-xs uppercase text-blacksite-muted">
                  {label}
                </dt>
                <dd className="font-mono text-sm uppercase text-blacksite-text">
                  {value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative rounded-lg border border-white/10 bg-white/[0.025] p-6 shadow-dossier backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blacksite-red/70 to-transparent" />
          <p className="max-w-2xl text-lg leading-8 text-blacksite-muted sm:text-xl">
            Blacksite keeps the scoped target, working notes, evidence, and
            review trail inside one local record. A signal that cannot survive
            the dossier does not become a submission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
