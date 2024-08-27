import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "../../styles/textpop/AnimatedParagraph.css";

interface paragraphProps {
  text: string;
}

export default function Paragraph(props: paragraphProps) {
  const words = props.text.split(" ");
  return (
    <p className="word-container">
      {words.map((word, i) => {
        return <Word key={i}>{word}</Word>;
      })}
    </p>
  );
}

interface wordProps {
  children: React.ReactNode;
}

function Word(props: wordProps) {
  const characters =
    typeof props.children === "string" ? props.children.split("") : [""];

  return (
    <span className="test">
      {characters.map((char, i) => {
        return <span className="test">{char}</span>;
      })}
    </span>
  );
}

// interface charProps {
//   children: React.ReactNode;
// }

// function Char(props: charProps) {
//   return <span>{props.children}</span>;
// }
