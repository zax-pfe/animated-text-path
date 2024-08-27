import Image from "next/image";
import Animatedtext from "@/components/letterbottotop/animatedText";
import "../styles/homepage.css";

export default function Home() {
  return (
    <div className="page">
      <div className="animatedtext-container">
        <Animatedtext text="MOTION houlala" classname="title" />

        <Animatedtext text="DESIGN" classname="title" />
      </div>
    </div>
  );
}
