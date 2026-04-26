"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

const principles = [
  {
    title: "Scope-Guarded",
    copy: "Blacksite keeps the allowed scope attached to the work so the operator does not have to trust memory mid-run.",
  },
  {
    title: "Local-First",
    copy: "The working record stays on the machine unless the operator chooses to move it into a submission.",
  },
  {
    title: "Evidence-First",
    copy: "A note only graduates into a finding after the evidence can be checked by hand and repeated later.",
  },
];

export function Principles() {
  return (
    <section
      id="principles"
      className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <SectionLabel eyebrow="OPERATING CONSTRAINTS" title="Principles" />
      <motion.div
        className="mt-8 grid gap-4 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
      >
        {principles.map((principle, index) => (
          <motion.article
            key={principle.title}
            className="rounded-lg border border-white/10 bg-white/[0.025] p-6 shadow-dossier backdrop-blur-sm transition hover:border-blacksite-red/45 hover:bg-white/[0.045] sm:p-7"
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="font-mono text-xs uppercase text-blacksite-redSoft/75">
              Rule 0{index + 1}
            </p>
            <h3 className="mt-9 text-2xl font-semibold text-blacksite-text">
              {principle.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-blacksite-muted">
              {principle.copy}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
