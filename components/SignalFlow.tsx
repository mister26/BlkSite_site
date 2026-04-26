"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

const flow = [
  {
    label: "scope",
    copy: "Start with the rules in view.",
  },
  {
    label: "worklog",
    copy: "Track what changed while testing.",
  },
  {
    label: "evidence",
    copy: "Keep the proof beside the note.",
  },
  {
    label: "submission",
    copy: "Ship the finding only after review.",
  },
];

export function SignalFlow() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <SectionLabel eyebrow="FILTER FIELD" title="Signal over noise." />
          <motion.p
            className="mt-6 max-w-xl text-base leading-7 text-blacksite-muted sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            Pick a target. Keep the scope beside the work. Capture evidence
            while testing, then submit only the finding that still holds up when
            reviewed.
          </motion.p>
        </div>

        <motion.ol
          className="relative grid gap-3 sm:grid-cols-4"
          aria-label="Blacksite workflow"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-gradient-to-r from-blacksite-red/15 via-blacksite-red/55 to-blacksite-red/15 sm:block" />
          {flow.map((step, index) => (
            <motion.li
              key={step.label}
              className="group relative rounded-lg border border-white/10 bg-blacksite-panel/74 p-4 backdrop-blur-sm transition hover:border-blacksite-red/45 hover:bg-white/[0.045]"
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="font-mono text-xs text-blacksite-redSoft/75">
                0{index + 1}
              </span>
              <span className="mt-9 block font-mono text-sm uppercase text-blacksite-text">
                {step.label}
              </span>
              <span className="mt-3 block text-sm leading-5 text-blacksite-muted">
                {step.copy}
              </span>
              <span
                className={
                  step.label === "evidence"
                    ? "mt-4 block h-1.5 w-1.5 rounded-full bg-blacksite-redSoft shadow-[0_0_18px_rgba(224,82,102,0.65)] motion-safe:animate-[status-pulse_4.5s_ease-in-out_infinite]"
                    : "mt-4 block h-1.5 w-8 bg-white/12"
                }
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
