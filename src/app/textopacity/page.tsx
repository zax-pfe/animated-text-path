"use client";
// import Paragraph from "@/components/textopacity/Paragraph";
import Paragraph from "@/components/textopacity/Character";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

import "../../styles/textopacity/page.css";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="page-container">
      <div className="h-[100vh]" />
      <Paragraph
        text="ue rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fu"
      />
      <div className="h-[100vh]" />
    </div>
  );
}
