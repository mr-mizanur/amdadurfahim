"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Icon from "./Icon";
import { profile } from "@/lib/data";

const facts = [
  ["pin", profile.location],
  ["book", profile.university],
  ["briefcase", profile.company],
];

const socials = [
  ["facebook", "Facebook", profile.facebook],
  ["instagram", "Instagram", profile.instagram],
  ["whatsapp", "WhatsApp", profile.whatsapp],
];

export default function Rail() {
  return (
    <aside className="rail">
      <motion.figure
        className="portrait"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ delay: 1.55, duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
      >
        <Image
          src="/fahim.jpg"
          alt={`Portrait of ${profile.name}`}
          width={960}
          height={1280}
          priority
          sizes="(max-width: 1024px) 70vw, 280px"
        />
      </motion.figure>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <ul className="facts">
          {facts.map(([icon, text]) => (
            <li key={text}>
              <Icon name={icon} size={16} />
              <span>{text}</span>
            </li>
          ))}
          <li>
            <Icon name="phone" size={16} />
            <a href={`tel:${profile.phoneIntl}`}>{profile.phone}</a>
          </li>
        </ul>

        <ul className="socials">
          {socials.map(([icon, label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon name={icon} size={16} />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </aside>
  );
}
