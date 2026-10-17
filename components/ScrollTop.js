"use client";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";

// Text-only scroll indicator: the pill fills as you read; click to go back to the top.
export default function ScrollTop() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 26 });
  const [pct, setPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => setPct(Math.round(v * 100)));
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 320));

  return (
    <motion.button
      type="button"
      className="scrolltop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      tabIndex={visible ? 0 : -1}
    >
      <motion.span className="scrolltop-fill" style={{ scaleX }} aria-hidden="true" />
      <span className="scrolltop-text">Back to top</span>
      <span className="scrolltop-pct">{pct}%</span>
    </motion.button>
  );
}
