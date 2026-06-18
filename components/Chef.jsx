// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Award, Star, ChefHat } from "lucide-react";

// const credentials = [
//   { icon: Star, label: "3 Michelin Stars", sub: "Awarded consecutively since 2021" },
//   { icon: ChefHat, label: "20+ Years", sub: "Michelin-starred kitchens globally" },
//   { icon: Award, label: "World's 50 Best", sub: "Ranked #12, 2024" },
// ];

// export default function Chef() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="relative overflow-hidden"
//       style={{ background: "var(--charcoal)" }}
//     >
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
//         {/* Image */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           className="relative overflow-hidden min-h-[500px] lg:min-h-full"
//         >
//           <div
//             className="absolute inset-0 bg-center bg-cover"
//             style={{
//               backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=85&auto=format&fit=crop')`,
//               filter: "grayscale(15%)",
//             }}
//           />
//           {/* Side gradient */}
//           <div
//             className="absolute inset-0 hidden lg:block"
//             style={{
//               background:
//                 "linear-gradient(to right, transparent 60%, var(--charcoal) 100%)",
//             }}
//           />
//           {/* Bottom gradient */}
//           <div
//             className="absolute inset-0 lg:hidden"
//             style={{
//               background:
//                 "linear-gradient(to top, var(--charcoal) 0%, transparent 50%)",
//             }}
//           />

//           {/* Gold accent line */}
//           <motion.div
//             initial={{ scaleY: 0 }}
//             animate={inView ? { scaleY: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="absolute top-0 left-0 w-[3px] h-full origin-top"
//             style={{ background: "var(--gold)" }}
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-col justify-center px-6 sm:px-10 py-20 lg:px-16"
//         >
//           <span
//             className="text-[10px] tracking-[0.35em] uppercase block mb-6"
//             style={{ color: "var(--gold)" }}
//           >
//             The Visionary
//           </span>

//           <h2
//             className="font-display leading-tight mb-2"
//             style={{
//               color: "var(--ivory)",
//               fontWeight: 400,
//               fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
//             }}
//           >
//             Chef Alessandro
//           </h2>
//           <h3
//             className="font-display italic mb-8"
//             style={{
//               color: "var(--gold)",
//               fontWeight: 300,
//               fontSize: "clamp(1.2rem, 2.5vw,  2rem)",
//             }}
//           >
//             Ferrante
//           </h3>

//           <div className="mb-6" style={{ height: "1px", background: "var(--gold)", width: "48px" }} />

//           <p
//             className="text-[14px] leading-[1.9] mb-5"
//             style={{ color: "var(--ivory-dim)" }}
//           >
//             Alessandro Ferrante's culinary journey began in his grandmother's kitchen in Naples.
//             Twenty years of rigorous craft — through Paris, Tokyo, and New York — culminated
//             in Aurelia: his first solo expression.
//           </p>
//           <p
//             className="text-[14px] leading-[1.9] mb-10"
//             style={{ color: "var(--ivory-dim)" }}
//           >
//             His philosophy is simple: treat every ingredient as a guest of honour.
//             The menu changes with the seasons, and sometimes with the morning's catch.
//           </p>

//           {/* Credentials */}
//           <div className="flex flex-col gap-5">
//             {credentials.map(({ icon: Icon, label, sub }, i) => (
//               <motion.div
//                 key={label}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
//                 className="flex items-center gap-4"
//               >
//                 <div
//                   className="w-10 h-10 flex items-center justify-center flex-shrink-0"
//                   style={{ border: "1px solid rgba(201,169,110,0.3)" }}
//                 >
//                   <Icon size={16} style={{ color: "var(--gold)" }} />
//                 </div>
//                 <div>
//                   <div
//                     className="text-[12px] tracking-wide"
//                     style={{ color: "var(--ivory)", fontWeight: 500 }}
//                   >
//                     {label}
//                   </div>
//                   <div className="text-[11px]" style={{ color: "var(--ivory-faint)" }}>
//                     {sub}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star, ChefHat } from "lucide-react";

const credentials = [
  { icon: Star, label: "3 Michelin Stars", sub: "Awarded consecutively since 2021" },
  { icon: ChefHat, label: "20+ Years", sub: "Michelin-starred kitchens globally" },
  { icon: Award, label: "World's 50 Best", sub: "Ranked #12, 2024" },
];

export default function Chef() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">

        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden min-h-[500px] lg:min-h-full"
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=85&auto=format&fit=crop')`,
              filter: "grayscale(15%)",
            }}
          />
          {/* Side gradient — desktop */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background: "linear-gradient(to right, transparent 60%, var(--charcoal) 100%)",
            }}
          />
          {/* Bottom gradient — mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to top, var(--charcoal) 0%, transparent 50%)",
            }}
          />
          {/* Gold accent line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-0 left-0 w-[3px] h-full origin-top"
            style={{ background: "var(--gold)" }}
          />
        </motion.div>

        {/* ── Right: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="chef__content"
        >
          {/* Eyebrow */}
          <span className="chef__eyebrow">The Visionary</span>

          {/* Name — kept together, no gap between first & last */}
          <div className="chef__name-block">
            <h2 className="chef__name-first font-display">Chef Alessandro</h2>
            <h3 className="chef__name-last font-display">Ferrante</h3>
          </div>

          {/* Gold divider */}
          <div className="chef__divider" />

          {/* Bio paragraphs */}
          <div className="chef__bio">
            <p>
              Alessandro Ferrante's culinary journey began in his grandmother's kitchen in Naples.
              Twenty years of rigorous craft — through Paris, Tokyo, and New York — culminated
              in Aurelia: his first solo expression.
            </p>
            <p>
              His philosophy is simple: treat every ingredient as a guest of honour.
              The menu changes with the seasons, and sometimes with the morning's catch.
            </p>
          </div>

          {/* Credentials */}
          <div className="chef__credentials">
            {credentials.map(({ icon: Icon, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                className="chef__credential-item"
              >
                <div className="chef__credential-icon">
                  <Icon size={16} style={{ color: "var(--gold)" }} />
                </div>
                <div className="chef__credential-text">
                  <div className="chef__credential-label">{label}</div>
                  <div className="chef__credential-sub">{sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}