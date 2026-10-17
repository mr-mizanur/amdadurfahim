"use client";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { profile } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1];
const T0 = 1.6; // starts as the loader lifts

const line = (i) => ({
  initial: { y: "105%" },
  animate: { y: 0 },
  transition: { delay: T0 + i * 0.12, duration: 1, ease: EASE },
});

const fade = (d) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: T0 + d, duration: 0.9, ease: "easeOut" },
});

export default function Hero() {
  return (
    <header className="hero" id="top">
      <h1 className="name">
        <span className="mask"><motion.span {...line(0)}>Amdadur</motion.span></span>
        <span className="mask"><motion.span {...line(1)}>Rahman Fahim</motion.span></span>
      </h1>

      <motion.p className="role" {...fade(0.5)}>
        {profile.role} at{" "}
        <a href={profile.companyUrl} target="_blank" rel="noreferrer">{profile.company}</a>, {profile.location}
      </motion.p>

      <motion.p className="statement" {...fade(0.7)}>{profile.statement}</motion.p>

      <motion.div className="actions" {...fade(0.9)}>
        <a className="btn btn-solid" href={profile.whatsapp} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={18} /> Message on WhatsApp
        </a>
        <a className="btn btn-line" href={`tel:${profile.phoneIntl}`}>
          <Icon name="phone" size={17} /> Call {profile.phone}
        </a>
      </motion.div>
    </header>
  );
}
