"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";

const words = profile.name.split(" ");

// Intro animation: only the name, letter by letter. No icons.
export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1700);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  let n = 0;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          role="status"
          aria-label={`Loading ${profile.name}`}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="loader-name" aria-hidden="true">
            {words.map((w, wi) => (
              <span className="loader-word" key={w + wi}>
                {w.split("").map((ch, ci) => (
                  <motion.span
                    key={ci}
                    style={{ display: "inline-block" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 + n++ * 0.035, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <motion.p
            className="loader-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {profile.role}, {profile.company}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
