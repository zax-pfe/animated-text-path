"use client";
import lego1 from "../../images/lego1.png";
import lego2 from "../../images/lego2.png";
import lego3 from "../../images/lego3.png";
import lego4 from "../../images/lego4.png";
import Line from "@/components/parallaxtext/Phrase";
import Lenis from "@studio-freight/lenis";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform } from "framer-motion";

export default function Page() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="h-[100vh]"></div>
      <div ref={container}>
        <Line
          image={lego1}
          text="super text for paralax to test damn"
          left="-55%"
          progress={scrollYProgress}
          direction="left"
        ></Line>
        <Line
          image={lego2}
          text="super text for paralax to test damn"
          left="-35%"
          progress={scrollYProgress}
          direction="right"
        ></Line>
        <Line
          image={lego3}
          text="super text for paralax to test damn"
          left="-15%"
          progress={scrollYProgress}
          direction="left"
        ></Line>
      </div>
      <div className="h-[100vh]"></div>
    </div>
  );
}
