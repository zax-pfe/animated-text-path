import {
  motion,
  MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import "../../styles/textpop/AnimatedParagraph.css";

const paragraphVariant = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      staggerChildren: 0.01,
    },
  },
};

const charVariant = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

interface paragraphProps {
  text: string;
}

export default function Paragraph(props: paragraphProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });

  const words = props.text.split(" ");
  return (
    <motion.div
      variants={paragraphVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      ref={ref}
      className="square"
    >
      <div className="word-container">
        {words.map((word, i) => (
          <div key={i} className="words">
            {word.split("").map((char, i) => (
              <motion.div key={i} variants={charVariant}>
                {char}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
