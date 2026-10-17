"use client";
import { motion } from "framer-motion";

// One section: the hairline draws across when it enters view, then the body fades in.
export default function Block({ id, title, children, tone }) {
  return (
    <section className={`block${tone ? ` block-${tone}` : ""}`} id={id}>
      <motion.span
        className="block-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
      />
      <h2 className="block-title">{title}</h2>
      <motion.div
        className="block-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
