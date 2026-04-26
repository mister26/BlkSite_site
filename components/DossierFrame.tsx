"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const indexMarks = ["001", "SIG", "EV", "SUB"];

export function DossierFrame() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 hidden lg:block"
    >
      <div className="absolute left-8 top-8 bottom-8 w-px bg-white/[0.055]" />
      <div className="absolute right-8 top-8 bottom-8 w-px bg-white/[0.055]" />

      <div className="absolute left-8 top-8 h-px w-12 bg-white/10" />
      <div className="absolute right-8 top-8 h-px w-12 bg-white/10" />
      <div className="absolute left-8 bottom-8 h-px w-12 bg-white/10" />
      <div className="absolute right-8 bottom-8 h-px w-12 bg-white/10" />

      <div className="absolute right-5 top-1/2 h-56 -translate-y-1/2">
        <div className="h-full w-px bg-white/10" />
        <motion.div
          className="absolute left-0 top-0 h-full w-px origin-top bg-blacksite-redSoft"
          style={{ scaleY }}
        />
      </div>

      <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-col gap-8 font-mono text-[10px] uppercase text-blacksite-text/18">
        {indexMarks.map((mark) => (
          <span key={mark} className="-rotate-90">
            {mark}
          </span>
        ))}
      </div>

      <div className="absolute bottom-8 right-12 font-mono text-[10px] uppercase text-blacksite-text/18">
        public excerpt / limited surface
      </div>
    </div>
  );
}
