import { BackgroundField } from "@/components/BackgroundField";
import { DossierFrame } from "@/components/DossierFrame";
import { DossierPanel } from "@/components/DossierPanel";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { PublicExcerpt } from "@/components/PublicExcerpt";
import { SignalFlow } from "@/components/SignalFlow";
import { WhatItIs } from "@/components/WhatItIs";

export default function Home() {
  return (
    <>
      <BackgroundField />
      <DossierFrame />
      <main className="relative z-10 overflow-hidden">
        <Hero />
        <DossierPanel />
        <WhatItIs />
        <SignalFlow />
        <Principles />
        <PublicExcerpt />
      </main>
      <Footer />
    </>
  );
}
