"use client";
import "../styles/footer.css";
import { motion } from "framer-motion";

import { useScroll, MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Footer() {
  const container = useRef<HTMLDivElement>(null);
  const texts = useRef<(SVGTextPathElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        if (text) {
          text.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
        }
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-40" viewBox="0 0 250 90">
        <path
          fill="none"
          // stroke="black"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
          id="curve"
        />
        <text className="text-footer">
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                ref={(ref) => {
                  texts.current[i] = ref;
                }}
                key={i}
                href="#curve"
                startOffset={i * 40 + "%"}
              >
                Chouette path animation non ?
              </textPath>
            );
          })}
        </text>
      </svg>
      <Logos scrollYProgress={scrollYProgress} />
    </div>
  );
}

function Logos({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);
  return (
    <div className="logos-container">
      <motion.div style={{ y }} className="logos">
        pas mal hein mon gars ?
      </motion.div>
    </div>
  );
}
