// "use client";
// import { motion } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// export default function Hero() {
//   const scrollDown = () => {
//     document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-center bg-cover"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85&auto=format&fit=crop')`,
//         }}
//       />

//       {/* Deep layered overlay */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(to bottom, rgba(10,9,6,0.55) 0%, rgba(10,9,6,0.3) 40%, rgba(10,9,6,0.7) 80%, rgba(10,9,6,0.98) 100%)",
//         }}
//       />

//       {/* Subtle vignette sides */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(10,9,6,0.6) 100%)",
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         {/* Eyebrow */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           className="flex items-center justify-center gap-4 mb-8"
//         >
//           <span className="gold-line" />
//           <span
//             className="text-[10px] tracking-[0.35em] uppercase"
//             style={{ color: "var(--gold)" }}
//           >
//             Mayfair, London · Est. 2019
//           </span>
//           <span className="gold-line" />
//         </motion.div>

//         {/* Main title */}
//         <div className="overflow-hidden mb-2">
//           <motion.h1
//             initial={{ y: "100%", opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
//             className="font-display text-[clamp(5rem,14vw,11rem)] leading-none tracking-[-0.01em]"
//             style={{ color: "var(--ivory)", fontWeight: 400 }}
//           >
//             Aurelia
//           </motion.h1>
//         </div>

//         {/* Subtitle */}
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 1.1 }}
//           className="font-display text-[clamp(1rem,2.5vw,1.6rem)] italic mb-12 tracking-wide"
//           style={{ color: "var(--ivory-dim)", fontWeight: 300 }}
//         >
//           Where Culinary Art Meets Elegance
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.3 }}
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//         >
//           <button
//             onClick={() =>
//               document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-10 py-4 text-[10px] tracking-[0.25em] uppercase transition-all duration-400 min-w-[200px]"
//             style={{ background: "var(--gold)", color: "var(--obsidian)", fontWeight: 500 }}
//             onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
//             onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
//           >
//             Reserve Your Table
//           </button>
//           <button
//             onClick={() =>
//               document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="px-10 py-4 text-[10px] tracking-[0.25em] uppercase border transition-all duration-300 min-w-[200px]"
//             style={{
//               borderColor: "rgba(242,237,228,0.35)",
//               color: "var(--ivory)",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = "var(--gold)";
//               e.currentTarget.style.color = "var(--gold)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = "rgba(242,237,228,0.35)";
//               e.currentTarget.style.color = "var(--ivory)";
//             }}
//           >
//             View Menu
//           </button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.8 }}
//         onClick={scrollDown}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
//         style={{ color: "var(--ivory-faint)" }}
//       >
//         <span className="text-[9px] tracking-[0.3em] uppercase group-hover:text-[var(--gold)] transition-colors">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <ChevronDown size={16} />
//         </motion.div>
//       </motion.button>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden">

      {/* ── 1. Background Image ── */}
      <div
        className="absolute inset-0 bg-center bg-cover scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85&auto=format&fit=crop')`,
        }}
      />

      {/* ── 2. Base dark wash — lifts the overall darkness ── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(8,7,5,0.45)" }}
      />

      {/* ── 3. Vertical gradient — darker top & heavy bottom fade to obsidian ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,7,5,0.45) 0%, rgba(8,7,5,0.1) 28%, rgba(8,7,5,0.15) 55%, rgba(8,7,5,0.82) 82%, rgba(8,7,5,1) 100%)",
        }}
      />

      {/* ── 4. Radial centre-clear vignette — sides/corners fall dark ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 44%, transparent 30%, rgba(8,7,5,0.55) 75%, rgba(8,7,5,0.82) 100%)",
        }}
      />

      {/* ── 5. Warm amber glow rising from below title — the "candle" ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 68%, rgba(180,110,30,0.13) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto w-full">

        {/* Eyebrow — shorter lines, hairline width */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-3 sm:gap-5 mb-8 sm:mb-10"
        >
          {/* Short hairline lines — fixed 28px, not full gold-line class */}
          <span style={{ display:"block", width:"20px", height:"0.5px", background:"var(--gold)", opacity:0.8 }} className="sm:!w-[28px]" />
          <span
            className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap"
            style={{ color: "var(--gold)", opacity: 0.9 }}
          >
            Mayfair · London · Est. 2019
          </span>
          <span style={{ display:"block", width:"20px", height:"0.5px", background:"var(--gold)", opacity:0.8 }} className="sm:!w-[28px]" />
        </motion.div>

        {/* Main title — clipped reveal from below */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "102%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.15, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[0.92] tracking-[-0.02em]"
            style={{
              color: "var(--ivory)",
              fontWeight: 400,
              fontSize: "clamp(3.5rem, 15vw, 11.5rem)",
              textShadow: "0 2px 40px rgba(8,7,5,0.5)",
            }}
          >
            Aurelia
          </motion.h1>
        </div>

        {/* Subtitle — ivory-dim, more gap below title */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="font-display italic tracking-wide mb-10 sm:mb-14 px-4"
          style={{
            color: "rgba(189,181,164,0.82)",
            fontWeight: 300,
            fontSize: "clamp(0.95rem,2.2vw,1.5rem)",
          }}
        >
          Where Culinary Art Meets Elegance
        </motion.p>

        {/* CTA Buttons — wider gap, stronger ghost border */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 px-4 sm:px-0"
        >
          {/* Primary — solid gold */}
          <button
            onClick={() =>
              document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })
            }
            className="gold-cta text-[10px] w-full sm:w-auto sm:min-w-[210px]"
          >
            Reserve Your Table
          </button>

          {/* Ghost — stronger border, clear on dark */}
          <button
            onClick={() =>
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-[10px] tracking-[0.28em] uppercase border transition-all duration-300 w-full sm:w-auto sm:min-w-[210px]"
            style={{
              borderColor: "rgba(242,237,228,0.55)",
              color: "var(--ivory)",
              padding: "15px 40px",
              background: "rgba(8,7,5,0.18)",
              backdropFilter: "blur(4px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.background = "rgba(201,169,110,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(242,237,228,0.55)";
              e.currentTarget.style.color = "var(--ivory)";
              e.currentTarget.style.background = "rgba(8,7,5,0.18)";
            }}
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — barely-there whisper */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 2.2, duration: 1 }}
        onClick={scrollDown}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
        style={{ color: "var(--ivory-faint)" }}
        whileHover={{ opacity: 1 }}
      >
        <span
          className="text-[8px] tracking-[0.38em] uppercase transition-colors duration-300 group-hover:text-[var(--gold)]"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={13} strokeWidth={1.2} />
        </motion.div>
      </motion.button>
    </section>
  );
}
