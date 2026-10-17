"use client";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";

export default function Topbar() {
  return (
    <motion.nav
      className="topbar"
      aria-label="Sections"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.0, duration: 0.8 }}
    >
      {nav.map(([label, href]) => (
        <a key={href} href={href}>{label}</a>
      ))}
    </motion.nav>
  );
}
