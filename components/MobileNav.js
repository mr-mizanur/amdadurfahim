"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon";
import { nav, profile } from "@/lib/data";

const brand = profile.name.split(" ").slice(-1)[0];
const EASE = [0.76, 0, 0.24, 1];

// Phone and tablet navigation: a fixed bar with a Menu button that opens a full-screen menu.
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1025px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    // wait for the menu to slide away, then scroll to the section
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 480);
  };

  return (
    <>
      <motion.div
        className={`mbar${open ? " is-open" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        <a
          href="#top"
          className="mbar-brand"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {brand}
        </a>
        <button
          type="button"
          className="mbar-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="mbar-lines" aria-hidden="true" />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <nav className="menu-links" aria-label="Sections">
              {nav.map(([label, href], i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={(e) => go(e, href)}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="menu-foot"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <a className="btn btn-solid" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={18} /> Message on WhatsApp
              </a>
              <a className="btn btn-line" href={`tel:${profile.phoneIntl}`}>
                <Icon name="phone" size={17} /> Call {profile.phone}
              </a>
              <div className="menu-social">
                <a href={profile.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <Icon name="facebook" size={17} />
                </a>
                <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Icon name="instagram" size={17} />
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <Icon name="whatsapp" size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
