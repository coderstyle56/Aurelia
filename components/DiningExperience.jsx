// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const experiences = [
//   {
//     title: "Private Dining",
//     subtitle: "An Evening Entirely Yours",
//     description:
//       "Seats eight to sixteen. Reserved for proposals, milestones, and occasions that demand a room with no interruption. A dedicated sommelier and a bespoke menu crafted around your evening.",
//     detail: "Available 7 nights · Advance booking required",
//     img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop",
//   },
//   {
//     title: "Wine Collection",
//     subtitle: "Eleven Hundred Labels",
//     description:
//       "Our cellar holds over 1,100 labels, guided by Master Sommelier Elena Cross. From Montrachet to rare Barolo, every bottle is chosen to extend the meal, not merely accompany it.",
//     detail: "Wine pairing from £95 per person",
//     img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=85&auto=format&fit=crop",
//   },
//   {
//     title: "Rooftop Seating",
//     subtitle: "The City Below, the Sky Above",
//     description:
//       "Twelve seats on our glass-enclosed rooftop. A cocktail bar, live jazz on Fridays, and a view across London that changes everything about how dinner feels.",
//     detail: "Open April – October · Weather permitting",
//     img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85&auto=format&fit=crop",
//   },
//   {
//     title: "Live Music Nights",
//     subtitle: "Jazz, Candlelight, and Fine Wine",
//     description:
//       "Every Friday and Saturday evening, a jazz quartet plays from 8PM. No cover charge. The music is background, not performance — designed to deepen the evening, not compete with conversation.",
//     detail: "Friday & Saturday · From 8:00 PM",
//     img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85&auto=format&fit=crop",
//   },
// ];

// function ExperienceRow({ exp, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={inView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.6 }}
//       className={`grid grid-cols-1 lg:grid-cols-2 min-h-[480px] ${
//         isEven ? "" : "lg:[&>*:first-child]:order-2"
//       }`}
//     >
//       {/* Image */}
//       <motion.div
//         initial={{ opacity: 0, x: isEven ? -40 : 40 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//         className="relative overflow-hidden min-h-[360px]"
//       >
//         <div
//           className="absolute inset-0 bg-center bg-cover transition-transform duration-700 hover:scale-105"
//           style={{ backgroundImage: `url('${exp.img}')` }}
//         />
//         <div
//           className="absolute inset-0"
//           style={{
//             background: isEven
//               ? "linear-gradient(to right, transparent 55%, var(--ink) 100%)"
//               : "linear-gradient(to left, transparent 55%, var(--ink) 100%)",
//           }}
//         />
//       </motion.div>

//       {/* Text */}
//       <motion.div
//         initial={{ opacity: 0, x: isEven ? 40 : -40 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
//         className="flex flex-col justify-center px-6 sm:px-10 py-16 lg:px-16"
//         style={{ background: "var(--ink)" }}
//       >
//         <span
//           className="text-[9px] tracking-[0.35em] uppercase mb-4 block"
//           style={{ color: "var(--gold)" }}
//         >
//           {exp.subtitle}
//         </span>
//         <h3
//           className="font-display mb-5 leading-tight"
//           style={{
//             color: "var(--ivory)",
//             fontWeight: 400,
//             fontSize: "clamp(2rem, 3.5vw, 3rem)",
//           }}
//         >
//           {exp.title}
//         </h3>
//         <div className="mb-6" style={{ height: "1px", width: "40px", background: "var(--gold)" }} />
//         <p
//           className="text-[14px] leading-[1.9] mb-6"
//           style={{ color: "var(--ivory-dim)" }}
//         >
//           {exp.description}
//         </p>
//         <span
//           className="text-[11px] tracking-[0.15em] uppercase"
//           style={{ color: "var(--ivory-faint)" }}
//         >
//           {exp.detail}
//         </span>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function DiningExperience() {
//   const titleRef = useRef(null);
//   const titleInView = useInView(titleRef, { once: true });

//   return (
//     <section className="overflow-hidden" style={{ background: "var(--ink)" }}>
//       {/* Header */}
//       <div ref={titleRef} className="text-center py-20 sm:py-24 px-6">
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={titleInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-[10px] tracking-[0.35em] uppercase block mb-5"
//           style={{ color: "var(--gold)" }}
//         >
//           Beyond the Plate
//         </motion.span>
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={titleInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.1 }}
//           className="font-display leading-none"
//           style={{
//             color: "var(--ivory)",
//             fontWeight: 400,
//             fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
//           }}
//         >
//           The Aurelia Experience
//         </motion.h2>
//       </div>

//       {/* Rows */}
//       <div className="divide-y" style={{ borderColor: "rgba(201,169,110,0.08)" }}>
//         {experiences.map((exp, i) => (
//           <ExperienceRow key={exp.title} exp={exp} index={i} />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    title: "Private Dining",
    subtitle: "An Evening Entirely Yours",
    description:
      "Seats eight to sixteen. Reserved for proposals, milestones, and occasions that demand a room with no interruption. A dedicated sommelier and a bespoke menu crafted around your evening.",
    detail: "Available 7 nights · Advance booking required",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Wine Collection",
    subtitle: "Eleven Hundred Labels",
    description:
      "Our cellar holds over 1,100 labels, guided by Master Sommelier Elena Cross. From Montrachet to rare Barolo, every bottle is chosen to extend the meal, not merely accompany it.",
    detail: "Wine pairing from £95 per person",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Rooftop Seating",
    subtitle: "The City Below, the Sky Above",
    description:
      "Twelve seats on our glass-enclosed rooftop. A cocktail bar, live jazz on Fridays, and a view across London that changes everything about how dinner feels.",
    detail: "Open April – October · Weather permitting",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=85&auto=format&fit=crop",
  },
  {
    title: "Live Music Nights",
    subtitle: "Jazz, Candlelight, and Fine Wine",
    description:
      "Every Friday and Saturday evening, a jazz quartet plays from 8PM. No cover charge. The music is background, not performance — designed to deepen the evening, not compete with conversation.",
    detail: "Friday & Saturday · From 8:00 PM",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85&auto=format&fit=crop",
  },
];

function ExperienceRow({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "520px",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}
      className="experience-row"
    >
      {/* Image — always first in DOM, order flipped via CSS for odd rows */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          overflow: "hidden",
          order: isEven ? 1 : 2,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${exp.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 700ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Gradient — always fades toward the text side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isEven
              ? "linear-gradient(to right, transparent 50%, var(--ink) 100%)"
              : "linear-gradient(to left, transparent 50%, var(--ink) 100%)",
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "var(--ink)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(2.5rem, 5vw, 5rem) clamp(2rem, 4vw, 4.5rem)",
          order: isEven ? 2 : 1,
        }}
      >
        {/* Eyebrow */}
        <span
          style={{
            display: "block",
            fontSize: "9px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}
        >
          {exp.subtitle}
        </span>

        {/* Title */}
        <h3
          className="font-display"
          style={{
            color: "var(--ivory)",
            fontWeight: 400,
            fontSize: "clamp(2rem, 3vw, 3rem)",
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}
        >
          {exp.title}
        </h3>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            width: "40px",
            background: "var(--gold)",
            marginBottom: "1.5rem",
            opacity: 0.8,
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.9,
            color: "var(--ivory-dim)",
            marginBottom: "1.5rem",
            maxWidth: "52ch",
          }}
        >
          {exp.description}
        </p>

        {/* Detail */}
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ivory-faint)",
          }}
        >
          {exp.detail}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function DiningExperience() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="overflow-hidden" style={{ background: "var(--ink)" }}>

      {/* ── Header ── */}
      <div
        ref={titleRef}
        style={{
          textAlign: "center",
          padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "block",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.25rem",
          }}
        >
          Beyond the Plate
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display"
          style={{
            color: "var(--ivory)",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1,
          }}
        >
          The Aurelia Experience
        </motion.h2>
      </div>

      {/* ── Rows ── */}
      <div>
        {experiences.map((exp, i) => (
          <ExperienceRow key={exp.title} exp={exp} index={i} />
        ))}
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 1023px) {
          .experience-row {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
          }
          .experience-row > *:first-child {
            order: 1 !important;
            min-height: 320px;
          }
          .experience-row > *:last-child {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}