"use client";
import "../styles/animatedtext.css";

interface AnimatedTextProps {
  text: string;
  classname: string;
}

const textVariants = {
  initial: { y: 100 },
  visible: { y: 0 },
};

import { motion } from "framer-motion";

export default function Animatedtext(props: AnimatedTextProps) {
  return (
    <div className="text-container">
      <div className={`text base ${props.classname}`}>{props.text}</div>
      <div className="square">
        <motion.div
          className="text"
          variants={textVariants}
          initial="initial"
          animate="visible"
        >
          {props.text}
        </motion.div>
      </div>
    </div>
  );
}
