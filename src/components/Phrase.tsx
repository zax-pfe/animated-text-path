import { StaticImageData } from "next/image";
import Image from "next/image";
import "../styles/phrase.css";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform, progress } from "framer-motion";

interface PhrasesProps {
  text: string;
  image: StaticImageData;
}

interface LineProps {
  text: string;
  image: StaticImageData;
  left: string;
  progress: MotionValue;
  direction: string;
}

function Phrase(props: PhrasesProps) {
  return (
    <div className="phrase-container">
      <div className="phrase-text">{props.text}</div>
      <Image className="phrase-image" src={props.image} alt="lego logo" />
    </div>
  );
}

export default function Line(props: LineProps) {
  const dir = props.direction == "left" ? -1 : 1;
  const x = useTransform(props.progress, [0, 1], [-200 * dir, 200 * dir]);
  return (
    <motion.div className="line-container" style={{ left: props.left, x }}>
      <Phrase image={props.image} text={props.text}></Phrase>
      <Phrase image={props.image} text={props.text}></Phrase>
      <Phrase image={props.image} text={props.text}></Phrase>
    </motion.div>
  );
}
