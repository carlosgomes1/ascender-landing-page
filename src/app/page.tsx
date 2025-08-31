"use client";

import { Speacialty } from "@/sections/Specialty";
import { Review } from "@/sections/Review";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import Benefits from "@/sections/Benefits";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Benefits />
      <Speacialty />
      <Review />
      <Contact />
      <Footer />
    </main>
  );
}
