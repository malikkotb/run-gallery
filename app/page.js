"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Gallery from "@/components/gallery";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <section className="h-screen flex justify-center items-center">
        <p>Scroll Down</p>
      </section>
      <Gallery />
    </main>
  );
}
