import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

interface paragraphProps {
  text: string;
}

export default function Paragraph(props: paragraphProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });
  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  });

  return (
    <motion.div ref={ref} style={{ opacity: scrollYProgress }}>
      {props.text}
    </motion.div>
  );
}
