"use client";

import Footer from "@/components/Footer";
import { useEffect } from "react";
import "../../styles/textpath.css";
import Lenis from "@studio-freight/lenis";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="textpath-page">
      <div className="content" />
      <Footer />
    </div>
  );
}
