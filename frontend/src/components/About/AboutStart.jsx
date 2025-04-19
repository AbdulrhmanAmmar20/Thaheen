"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import imgSrc from "../../assets/fox_head.svg"; // تأكد من المسار

export default function AboutStart() {
  const containerRef = useRef(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const h1 = containerRef.current.querySelector("h1");
      if (!h1) return;

      const { words } = splitText(h1);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );

      setTimeout(() => {
        setShowImage(true);
      }, 1000);
    });
  }, []);

  return (
    <div
      className="w-full h-[80vh] flex items-center justify-center px-4 text-center relative"
      ref={containerRef}
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
        Level up your Learning with Thaheen
      </h1>

      {showImage && (
        <motion.img
          src={imgSrc}
          alt="Team"
          className="absolute right-0 -bottom-6 w-45 md:w-54 rotate-[-90deg]"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
          }}
        />
      )}

      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        visibility: hidden;
      }
      .split-word {
        will-change: transform, opacity;
      }
    `}</style>
  );
}
