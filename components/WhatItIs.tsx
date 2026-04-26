"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/SectionLabel";

export function WhatItIs() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionLabel eyebrow="PLAIN ENGLISH" title="What it is" />
        <motion.div
          className="rounded-lg border border-white/10 bg-blacksite-panel/72 p-6 shadow-dossier backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="max-w-3xl text-lg leading-8 text-blacksite-muted sm:text-xl">
            Blacksite is a local research workspace for bug bounty and
            self-audit work. A scoped target enters the dossier, evidence stays
            attached to the record, and release waits until review is complete.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
