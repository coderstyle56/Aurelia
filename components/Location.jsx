// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { MapPin, Clock, Car, Phone, Mail } from "lucide-react";

// const hours = [
//   { days: "Monday", hours: "Closed", closed: true },
//   { days: "Tuesday – Friday", hours: "Lunch 12:00 – 14:30 · Dinner 18:00 – 22:30" },
//   { days: "Saturday", hours: "Lunch 12:00 – 15:00 · Dinner 18:00 – 23:00" },
//   { days: "Sunday", hours: "Lunch 12:00 – 15:30 · Dinner Closed", closed: false },
// ];

// export default function Location() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section id="contact" ref={ref} className="py-32 px-6" style={{ background: "var(--charcoal)" }}>
//       <div className="max-w-[1300px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <span className="text-[10px] tracking-[0.35em] uppercase block mb-5" style={{ color: "var(--gold)" }}>
//             Find Us
//           </span>
//           <h2
//             className="font-display leading-none"
//             style={{ color: "var(--ivory)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
//           >
//             Location & Hours
//           </h2>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-px" style={{ background: "rgba(201,169,110,0.08)" }}>
//           {/* Map */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-3 min-h-[420px] relative overflow-hidden"
//             style={{ background: "var(--ink)" }}
//           >
//             <iframe
//               title="Aurelia Location"
//               src="https://maps.google.com/maps?q=Audley+Street+Mayfair+London&t=&z=15&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//                 minHeight: "420px",
//                 filter: "grayscale(80%) invert(10%) contrast(90%)",
//                 display: "block",
//               }}
//               allowFullScreen
//               loading="lazy"
//             />
//             {/* Address overlay */}
//             <div
//               className="absolute bottom-0 left-0 right-0 p-6"
//               style={{ background: "linear-gradient(to top, rgba(10,9,6,0.9) 0%, transparent 100%)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <MapPin size={14} style={{ color: "var(--gold)" }} />
//                 <span className="text-[13px]" style={{ color: "var(--ivory)" }}>
//                   12 Audley Street, Mayfair, London W1K 2QG
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Info Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             className="lg:col-span-2 p-10 flex flex-col gap-8"
//             style={{ background: "var(--ink)" }}
//           >
//             {/* Hours */}
//             <div>
//               <div className="flex items-center gap-2 mb-5">
//                 <Clock size={14} style={{ color: "var(--gold)" }} />
//                 <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
//                   Opening Hours
//                 </span>
//               </div>
//               <div className="space-y-3">
//                 {hours.map((h) => (
//                   <div key={h.days} className="flex flex-col gap-0.5">
//                     <span className="text-[11px] tracking-wide" style={{ color: h.closed ? "var(--ivory-faint)" : "var(--ivory)", fontWeight: 400 }}>
//                       {h.days}
//                     </span>
//                     <span className="text-[11px]" style={{ color: h.closed ? "var(--ivory-faint)" : "var(--ivory-dim)" }}>
//                       {h.hours}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Divider */}
//             <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

//             {/* Parking */}
//             <div>
//               <div className="flex items-center gap-2 mb-3">
//                 <Car size={14} style={{ color: "var(--gold)" }} />
//                 <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "var(--gold)" }}>
//                   Getting Here
//                 </span>
//               </div>
//               <p className="text-[12px] leading-relaxed" style={{ color: "var(--ivory-dim)" }}>
//                 Bond Street station, 4 minutes walk (Central & Jubilee lines). Valet parking available on request from 6:00 PM. NCP Car Park: 5 Balderton Street, W1K 6TL.
//               </p>
//             </div>

//             {/* Divider */}
//             <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

//             {/* Contact */}
//             <div className="space-y-3">
//               <a
//                 href="tel:+442074910000"
//                 className="flex items-center gap-3 group"
//               >
//                 <Phone size={13} style={{ color: "var(--gold)" }} />
//                 <span className="text-[13px] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ color: "var(--ivory-dim)" }}>
//                   +44 20 7491 0000
//                 </span>
//               </a>
//               <a
//                 href="mailto:hello@aurelialondon.com"
//                 className="flex items-center gap-3 group"
//               >
//                 <Mail size={13} style={{ color: "var(--gold)" }} />
//                 <span className="text-[13px] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ color: "var(--ivory-dim)" }}>
//                   hello@aurelialondon.com
//                 </span>
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { MapPin, Clock, Car, Phone, Mail } from "lucide-react";

// const hours = [
//   { days: "Monday", hours: "Closed", closed: true },
//   { days: "Tuesday – Friday", hours: "Lunch 12:00 – 14:30 · Dinner 18:00 – 22:30" },
//   { days: "Saturday", hours: "Lunch 12:00 – 15:00 · Dinner 18:00 – 23:00" },
//   { days: "Sunday", hours: "Lunch 12:00 – 15:30 · Dinner Closed" },
// ];

// export default function Location() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       style={{
//         background: "var(--charcoal)",
//         padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
//       }}
//     >
//       <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           style={{
//             textAlign: "center",
//             marginBottom: "clamp(2.5rem, 5vw, 4rem)",
//           }}
//         >
//           <span style={{
//             display: "block",
//             fontSize: "10px",
//             letterSpacing: "0.35em",
//             textTransform: "uppercase",
//             color: "var(--gold)",
//             marginBottom: "1rem",
//           }}>
//             Find Us
//           </span>
//           <h2
//             className="font-display"
//             style={{
//               color: "var(--ivory)",
//               fontWeight: 400,
//               fontSize: "clamp(2.5rem, 6vw, 4rem)",
//               lineHeight: 1,
//               marginBottom: "1.25rem",
//             }}
//           >
//             Location & Hours
//           </h2>
//           <div style={{
//             width: "40px",
//             height: "1px",
//             background: "var(--gold)",
//             margin: "0 auto",
//             opacity: 0.7,
//           }} />
//         </motion.div>

//         {/* ── Map + Info panel ── */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "3fr 2fr",
//           gap: "1px",
//           background: "rgba(201,169,110,0.08)",
//           minHeight: "480px",
//         }}>

//           {/* Map */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ duration: 0.8 }}
//             style={{
//               position: "relative",
//               overflow: "hidden",
//               background: "var(--ink)",
//               minHeight: "420px",
//             }}
//           >
//             <iframe
//               title="Aurelia Location"
//               src="https://maps.google.com/maps?q=Audley+Street+Mayfair+London&t=&z=15&ie=UTF8&iwloc=&output=embed"
//               width="100%"
//               height="100%"
//               style={{
//                 border: 0,
//                 minHeight: "480px",
//                 filter: "grayscale(80%) invert(10%) contrast(90%)",
//                 display: "block",
//               }}
//               allowFullScreen
//               loading="lazy"
//             />
//             {/* Address overlay */}
//             <div style={{
//               position: "absolute",
//               bottom: 0,
//               left: 0,
//               right: 0,
//               padding: "1.5rem",
//               background: "linear-gradient(to top, rgba(10,9,6,0.92) 0%, transparent 100%)",
//             }}>
//               <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//                 <MapPin size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
//                 <span style={{ fontSize: "13px", color: "var(--ivory)" }}>
//                   12 Audley Street, Mayfair, London W1K 2QG
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Info Panel */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.15 }}
//             style={{
//               background: "var(--ink)",
//               padding: "clamp(2rem, 3vw, 3rem)",
//               display: "flex",
//               flexDirection: "column",
//               gap: "2rem",
//             }}
//           >
//             {/* Opening Hours */}
//             <div>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 marginBottom: "1.25rem",
//               }}>
//                 <Clock size={13} style={{ color: "var(--gold)" }} />
//                 <span style={{
//                   fontSize: "10px",
//                   letterSpacing: "0.25em",
//                   textTransform: "uppercase",
//                   color: "var(--gold)",
//                 }}>
//                   Opening Hours
//                 </span>
//               </div>
//               <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
//                 {hours.map((h) => (
//                   <div key={h.days}>
//                     <div style={{
//                       fontSize: "11px",
//                       letterSpacing: "0.03em",
//                       fontWeight: 400,
//                       color: h.closed ? "var(--ivory-faint)" : "var(--ivory)",
//                       marginBottom: "2px",
//                     }}>
//                       {h.days}
//                     </div>
//                     <div style={{
//                       fontSize: "11px",
//                       color: h.closed ? "var(--ivory-faint)" : "var(--ivory-dim)",
//                       opacity: h.closed ? 0.6 : 1,
//                     }}>
//                       {h.hours}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Divider */}
//             <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

//             {/* Getting Here */}
//             <div>
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 marginBottom: "0.875rem",
//               }}>
//                 <Car size={13} style={{ color: "var(--gold)" }} />
//                 <span style={{
//                   fontSize: "10px",
//                   letterSpacing: "0.25em",
//                   textTransform: "uppercase",
//                   color: "var(--gold)",
//                 }}>
//                   Getting Here
//                 </span>
//               </div>
//               <p style={{
//                 fontSize: "12px",
//                 lineHeight: 1.8,
//                 color: "var(--ivory-dim)",
//               }}>
//                 Bond Street station, 4 minutes walk (Central & Jubilee lines). Valet parking available on request from 6:00 PM. NCP Car Park: 5 Balderton Street, W1K 6TL.
//               </p>
//             </div>

//             {/* Divider */}
//             <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

//             {/* Contact */}
//             <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
//               <a
//                 href="tel:+442074910000"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "var(--ivory-dim)",
//                   textDecoration: "none",
//                   fontSize: "13px",
//                   transition: "color 200ms ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-dim)")}
//               >
//                 <Phone size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
//                 +44 20 7491 0000
//               </a>
//               <a
//                 href="mailto:hello@aurelialondon.com"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "12px",
//                   color: "var(--ivory-dim)",
//                   textDecoration: "none",
//                   fontSize: "13px",
//                   transition: "color 200ms ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-dim)")}
//               >
//                 <Mail size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
//                 hello@aurelialondon.com
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Mobile: stack map above info */}
//       <style>{`
//         @media (max-width: 1023px) {
//           #contact [style*="gridTemplateColumns: 3fr 2fr"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Car, Phone, Mail } from "lucide-react";

const hours = [
  { days: "Monday", hours: "Closed", closed: true },
  { days: "Tuesday – Friday", hours: "Lunch 12:00 – 14:30 · Dinner 18:00 – 22:30" },
  { days: "Saturday", hours: "Lunch 12:00 – 15:00 · Dinner 18:00 – 23:00" },
  { days: "Sunday", hours: "Lunch 12:00 – 15:30 · Dinner Closed" },
];

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--charcoal)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          }}
        >
          <span style={{
            display: "block",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Find Us
          </span>
          <h2
            className="font-display"
            style={{
              color: "var(--ivory)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1,
              marginBottom: "1.25rem",
            }}
          >
            Location & Hours
          </h2>
          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto",
            opacity: 0.7,
          }} />
        </motion.div>

        {/* ── Map + Info panel ── */}
        <div
          className="aurelia-location-grid"
          style={{
            background: "rgba(201,169,110,0.08)",
          }}
        >

          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="aurelia-map-panel"
          >
            <iframe
              title="Aurelia Location"
              src="https://maps.google.com/maps?q=Audley+Street+Mayfair+London&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(80%) invert(10%) contrast(90%)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
            />
            {/* Address overlay */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.5rem",
              background: "linear-gradient(to top, rgba(10,9,6,0.92) 0%, transparent 100%)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "var(--ivory)" }}>
                  12 Audley Street, Mayfair, London W1K 2QG
                </span>
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              background: "var(--ink)",
              padding: "clamp(2rem, 3vw, 3rem)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Opening Hours */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "1.25rem",
              }}>
                <Clock size={13} style={{ color: "var(--gold)" }} />
                <span style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  Opening Hours
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {hours.map((h) => (
                  <div key={h.days}>
                    <div style={{
                      fontSize: "11px",
                      letterSpacing: "0.03em",
                      fontWeight: 400,
                      color: h.closed ? "var(--ivory-faint)" : "var(--ivory)",
                      marginBottom: "2px",
                    }}>
                      {h.days}
                    </div>
                    <div style={{
                      fontSize: "11px",
                      color: h.closed ? "var(--ivory-faint)" : "var(--ivory-dim)",
                      opacity: h.closed ? 0.6 : 1,
                    }}>
                      {h.hours}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

            {/* Getting Here */}
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "0.875rem",
              }}>
                <Car size={13} style={{ color: "var(--gold)" }} />
                <span style={{
                  fontSize: "10px",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  Getting Here
                </span>
              </div>
              <p style={{
                fontSize: "12px",
                lineHeight: 1.8,
                color: "var(--ivory-dim)",
              }}>
                Bond Street station, 4 minutes walk (Central & Jubilee lines). Valet parking available on request from 6:00 PM. NCP Car Park: 5 Balderton Street, W1K 6TL.
              </p>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />

            {/* Contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href="tel:+442074910000"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--ivory-dim)",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-dim)")}
              >
                <Phone size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                +44 20 7491 0000
              </a>
              <a
                href="mailto:hello@aurelialondon.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "var(--ivory-dim)",
                  textDecoration: "none",
                  fontSize: "13px",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-dim)")}
              >
                <Mail size={13} style={{ color: "var(--gold)", flexShrink: 0 }} />
                hello@aurelialondon.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* ── Desktop: map left (3fr), info right (2fr) ── */
        .aurelia-location-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 1px;
          min-height: 480px;
        }

        .aurelia-map-panel {
          position: relative;
          overflow: hidden;
          background: var(--ink);
          min-height: 420px;
        }

        .aurelia-map-panel iframe {
          min-height: 480px;
        }

        /* ── Mobile & tablet: stack vertically ── */
        @media (max-width: 1023px) {
          .aurelia-location-grid {
            grid-template-columns: 1fr;
            min-height: unset;
          }

          /* Map takes a cinematic fixed height when stacked */
          .aurelia-map-panel {
            min-height: 300px;
            height: 300px;
          }

          .aurelia-map-panel iframe {
            min-height: 300px;
            height: 300px;
          }
        }

        @media (max-width: 639px) {
          .aurelia-map-panel {
            min-height: 240px;
            height: 240px;
          }

          .aurelia-map-panel iframe {
            min-height: 240px;
            height: 240px;
          }
        }
      `}</style>
    </section>
  );
}