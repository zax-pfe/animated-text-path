"use client";
import "../styles/animatedtext.css";

interface AnimatedTextProps {
  text: string;
  classname: string;
}

const lettersVariants = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 0.2 } },
};
const wordsVariants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

import { motion } from "framer-motion";

export default function Animatedtext(props: AnimatedTextProps) {
  return (
    <div className="text-container">
      <div className={`text base ${props.classname}`}>{props.text}</div>
      <div className="square">
        <motion.div
          className={`words-container ${props.classname}`}
          variants={textVariants}
          initial="hidden"
          animate="show"
        >
          {props.text.split(" ").map((word, wordIndex) => (
            <div className="word" key={wordIndex}>
              {word.split("").map((letter, letterIndex) => (
                <motion.div
                  variants={lettersVariants}
                  key={letterIndex}
                  className="letter"
                >
                  {letter}
                </motion.div>
              ))}
              <span className="space">&nbsp;</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
