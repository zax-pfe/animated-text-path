import Image from "next/image";
import Animatedtext from "@/components/animatedText";
import "../styles/homepage.css";

export default function Home() {
  return (
    <div className="page">
      <div className="animatedtext-container">
        <Animatedtext text="MOTION" classname="title" />

        <Animatedtext text="DESIGN" classname="title" />
      </div>
    </div>
  );
}
