"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Block from "./Block";
import Icon from "./Icon";
import { profile, summary, experience, competencies, approach, skills } from "@/lib/data";

export function Profile() {
  return (
    <Block id="profile" title="Profile">
      {summary.map((p) => (
        <p className="prose" key={p}>{p}</p>
      ))}
    </Block>
  );
}

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <Block id="experience" title="Experience and education">
      <div className="timeline" ref={ref}>
        <span className="tl-track" aria-hidden="true" />
        <motion.span className="tl-fill" style={{ scaleY }} aria-hidden="true" />
        {experience.map((e) => (
          <article className="tl-item" key={e.title + e.org}>
            <p className="tl-period">{e.period}</p>
            <h3 className="tl-title">{e.title}</h3>
            <p className="tl-org">
              {e.orgUrl ? (
                <a href={e.orgUrl} target="_blank" rel="noreferrer">{e.org}</a>
              ) : (
                e.org
              )}
              , {e.place}
            </p>
            <p className="prose">{e.text}</p>
            {e.note && <p className="tl-note">{e.note}</p>}
          </article>
        ))}
      </div>
    </Block>
  );
}

export function Competencies() {
  return (
    <Block id="competencies" title="Core competencies">
      <ul className="rows">
        {competencies.map((c) => (
          <li className="row" key={c.title}>
            <span className="row-icon"><Icon name={c.icon} size={20} /></span>
            <div>
              <h3 className="row-title">{c.title}</h3>
              <p className="row-text">{c.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Block>
  );
}

export function Approach() {
  return (
    <Block id="approach" title="How I approach a hire">
      <ol className="steps">
        {approach.map((s, i) => (
          <li className="step" key={s.title}>
            <span className="step-n">{i + 1}</span>
            <div>
              <h3 className="row-title">{s.title}</h3>
              <p className="row-text">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Block>
  );
}

export function Skills() {
  return (
    <Block id="skills" title="Skills">
      <div className="skill-groups">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="skill-h">{g.group}</h3>
            <ul className="skill-list">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Block>
  );
}

const contactRows = [
  ["whatsapp", "WhatsApp", profile.phone, profile.whatsapp],
  ["phone", "Phone", profile.phone, `tel:${profile.phoneIntl}`],
  ["facebook", "Facebook", profile.facebookHandle, profile.facebook],
  ["instagram", "Instagram", `@${profile.instagramHandle}`, profile.instagram],
  ["globe", "Career Compass", "careercompassbd.com", profile.companyUrl],
];

export function Contact() {
  return (
    <Block id="contact" title="Contact" tone="dark">
      <p className="contact-lead">
        Hiring, collaborating, or just saying hello? The quickest way to reach me is WhatsApp.
      </p>
      <ul className="contact-list">
        {contactRows.map(([icon, label, value, href]) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer">
              <span className="contact-ico"><Icon name={icon} size={18} /></span>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Block>
  );
}
