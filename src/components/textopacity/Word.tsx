import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "../../styles/textopacity/word.css";

interface paragraphProps {
  text: string;
}

export default function Paragraph(props: paragraphProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start start"],
  });
  const words = props.text.split(" ");
  return (
    <p className="word-container" ref={ref}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word range={[start, end]} progress={scrollYProgress} key={i}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface wordProps {
  range: number[];
  progress: MotionValue;
  children: React.ReactNode;
}

function Word(props: wordProps) {
  const opacity = useTransform(props.progress, props.range, [0, 1]);
  return (
    <span className="word">
      <span className="shadow">{props.children}</span>
      <motion.span style={{ opacity }}>{props.children}</motion.span>
    </span>
  );
}
