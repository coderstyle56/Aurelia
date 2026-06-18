// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     quote: "The finest dining experience in the city. Alessandro's truffle risotto alone is worth crossing continents for.",
//     author: "Sarah Williams",
//     title: "Food Critic, The Telegraph",
//     stars: 5,
//   },
//   {
//     quote: "We came for an anniversary dinner and left with a memory that will outlast every other anniversary to follow. Extraordinary.",
//     author: "James & Clara Hartwell",
//     title: "London",
//     stars: 5,
//   },
//   {
//     quote: "The wine pairing is not an add-on — it is half the experience. Elena Cross is the most talented sommelier I have met in thirty years of dining.",
//     author: "Dr. Hiroshi Tanaka",
//     title: "Tokyo · Regular Guest",
//     stars: 5,
//   },
//   {
//     quote: "Brought a client here for a closing dinner. The deal was secondary by the end of the first course. Aurelia does something very few restaurants manage — it makes you forget everything else.",
//     author: "Marcus Ellery",
//     title: "Partner, Ellery & Co.",
//     stars: 5,
//   },
//   {
//     quote: "The private dining room was impeccable. The team remembered my wife's favourite Champagne from a visit two years ago. That is not service — that is devotion.",
//     author: "Émile Bertrand",
//     title: "Paris",
//     stars: 5,
//   },
//   {
//     quote: "I have dined at restaurants with more stars, more reputation, more ceremony. None of them made me feel as welcome as Aurelia.",
//     author: "Priya Nair",
//     title: "Mumbai · Singapore",
//     stars: 5,
//   },
// ];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section
//       id="testimonials"
//       ref={ref}
//       className="py-32 px-6"
//       style={{ background: "var(--charcoal)" }}
//     >
//       <div className="max-w-[1300px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <span
//             className="text-[10px] tracking-[0.35em] uppercase block mb-5"
//             style={{ color: "var(--gold)" }}
//           >
//             Our Guests Speak
//           </span>
//           <h2
//             className="font-display leading-none"
//             style={{
//               color: "var(--ivory)",
//               fontWeight: 400,
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//             }}
//           >
//             Moments Remembered
//           </h2>
//         </motion.div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
//           style={{ background: "rgba(201,169,110,0.08)" }}>
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               className="p-8 flex flex-col"
//               style={{ background: "var(--charcoal)" }}
//             >
//               {/* Stars */}
//               <div className="flex gap-1 mb-5">
//                 {[...Array(t.stars)].map((_, si) => (
//                   <Star key={si} size={12} fill="var(--gold)" style={{ color: "var(--gold)" }} />
//                 ))}
//               </div>

//               {/* Quote mark */}
//               <div
//                 className="font-display text-5xl leading-none mb-4 opacity-40"
//                 style={{ color: "var(--gold)", fontWeight: 400 }}
//               >
//                 "
//               </div>

//               {/* Text */}
//               <p
//                 className="font-display italic text-[15px] leading-[1.8] flex-1 mb-6"
//                 style={{ color: "var(--ivory-dim)", fontWeight: 300 }}
//               >
//                 {t.quote}
//               </p>

//               {/* Divider */}
//               <div className="mb-4" style={{ height: "1px", background: "rgba(201,169,110,0.2)" }} />

//               {/* Author */}
//               <div>
//                 <div className="text-[13px] tracking-wide" style={{ color: "var(--ivory)", fontWeight: 400 }}>
//                   {t.author}
//                 </div>
//                 <div className="text-[11px] mt-0.5" style={{ color: "var(--ivory-faint)" }}>
//                   {t.title}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     quote: "The finest dining experience in the city. Alessandro's truffle risotto alone is worth crossing continents for.",
//     author: "Sarah Williams",
//     title: "Food Critic, The Telegraph",
//     stars: 5,
//   },
//   {
//     quote: "We came for an anniversary dinner and left with a memory that will outlast every other anniversary to follow. Extraordinary.",
//     author: "James & Clara Hartwell",
//     title: "London",
//     stars: 5,
//   },
//   {
//     quote: "The wine pairing is not an add-on — it is half the experience. Elena Cross is the most talented sommelier I have met in thirty years of dining.",
//     author: "Dr. Hiroshi Tanaka",
//     title: "Tokyo · Regular Guest",
//     stars: 5,
//   },
//   {
//     quote: "Brought a client here for a closing dinner. The deal was secondary by the end of the first course. Aurelia does something very few restaurants manage — it makes you forget everything else.",
//     author: "Marcus Ellery",
//     title: "Partner, Ellery & Co.",
//     stars: 5,
//   },
//   {
//     quote: "The private dining room was impeccable. The team remembered my wife's favourite Champagne from a visit two years ago. That is not service — that is devotion.",
//     author: "Émile Bertrand",
//     title: "Paris",
//     stars: 5,
//   },
//   {
//     quote: "I have dined at restaurants with more stars, more reputation, more ceremony. None of them made me feel as welcome as Aurelia.",
//     author: "Priya Nair",
//     title: "Mumbai · Singapore",
//     stars: 5,
//   },
// ];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <section
//       id="testimonials"
//       ref={ref}
//       style={{
//         background: "var(--charcoal)",
//         padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
//       }}
//     >
//       <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
//         >
//           <span style={{
//             display: "block",
//             fontSize: "10px",
//             letterSpacing: "0.35em",
//             textTransform: "uppercase",
//             color: "var(--gold)",
//             marginBottom: "1rem",
//           }}>
//             Our Guests Speak
//           </span>
//           <h2
//             className="font-display"
//             style={{
//               color: "var(--ivory)",
//               fontWeight: 400,
//               fontSize: "clamp(2.5rem, 5vw, 4rem)",
//               lineHeight: 1,
//               marginBottom: "1.25rem",
//             }}
//           >
//             Moments Remembered
//           </h2>
//           <div style={{
//             width: "40px",
//             height: "1px",
//             background: "var(--gold)",
//             margin: "0 auto",
//             opacity: 0.7,
//           }} />
//         </motion.div>

//         {/* ── Grid ── */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "1px",
//           background: "rgba(201,169,110,0.1)",
//         }}>
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               style={{
//                 background: "var(--charcoal)",
//                 padding: "clamp(1.75rem, 2.5vw, 2.5rem)",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "0",
//               }}
//             >
//               {/* Large decorative quote mark */}
//               <div
//                 className="font-display"
//                 style={{
//                   fontSize: "clamp(4rem, 6vw, 6rem)",
//                   lineHeight: 0.8,
//                   color: "var(--gold)",
//                   fontWeight: 400,
//                   marginBottom: "1.25rem",
//                   opacity: 0.6,
//                   userSelect: "none",
//                 }}
//               >
//                 "
//               </div>

//               {/* Quote text */}
//               <p
//                 className="font-display"
//                 style={{
//                   fontStyle: "italic",
//                   fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
//                   lineHeight: 1.85,
//                   color: "var(--ivory-dim)",
//                   fontWeight: 300,
//                   flex: 1,
//                   marginBottom: "1.75rem",
//                 }}
//               >
//                 {t.quote}
//               </p>

//               {/* Stars */}
//               <div style={{
//                 display: "flex",
//                 gap: "3px",
//                 marginBottom: "1rem",
//               }}>
//                 {[...Array(t.stars)].map((_, si) => (
//                   <Star key={si} size={11} fill="var(--gold)" style={{ color: "var(--gold)" }} />
//                 ))}
//               </div>

//               {/* Divider */}
//               <div style={{
//                 height: "1px",
//                 background: "rgba(201,169,110,0.2)",
//                 marginBottom: "1rem",
//               }} />

//               {/* Author */}
//               <div>
//                 <div style={{
//                   fontSize: "13px",
//                   letterSpacing: "0.03em",
//                   color: "var(--ivory)",
//                   fontWeight: 400,
//                   marginBottom: "3px",
//                 }}>
//                   {t.author}
//                 </div>
//                 <div style={{
//                   fontSize: "11px",
//                   color: "var(--ivory-faint)",
//                   letterSpacing: "0.02em",
//                 }}>
//                   {t.title}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>

//       {/* Mobile override */}
//       <style>{`
//         @media (max-width: 767px) {
//           #testimonials [style*="gridTemplateColumns: repeat(3"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//         @media (min-width: 768px) and (max-width: 1023px) {
//           #testimonials [style*="gridTemplateColumns: repeat(3"] {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The finest dining experience in the city. Alessandro's truffle risotto alone is worth crossing continents for.",
    author: "Sarah Williams",
    title: "Food Critic, The Telegraph",
    stars: 5,
  },
  {
    quote: "We came for an anniversary dinner and left with a memory that will outlast every other anniversary to follow. Extraordinary.",
    author: "James & Clara Hartwell",
    title: "London",
    stars: 5,
  },
  {
    quote: "The wine pairing is not an add-on — it is half the experience. Elena Cross is the most talented sommelier I have met in thirty years of dining.",
    author: "Dr. Hiroshi Tanaka",
    title: "Tokyo · Regular Guest",
    stars: 5,
  },
  {
    quote: "Brought a client here for a closing dinner. The deal was secondary by the end of the first course. Aurelia does something very few restaurants manage — it makes you forget everything else.",
    author: "Marcus Ellery",
    title: "Partner, Ellery & Co.",
    stars: 5,
  },
  {
    quote: "The private dining room was impeccable. The team remembered my wife's favourite Champagne from a visit two years ago. That is not service — that is devotion.",
    author: "Émile Bertrand",
    title: "Paris",
    stars: 5,
  },
  {
    quote: "I have dined at restaurants with more stars, more reputation, more ceremony. None of them made me feel as welcome as Aurelia.",
    author: "Priya Nair",
    title: "Mumbai · Singapore",
    stars: 5,
  },
];

function TestimonialCard({ t, i, inView }) {
  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="aurelia-testimonial-card"
    >
      {/* Large decorative quote mark */}
      <div
        className="font-display"
        style={{
          fontSize: "clamp(4rem, 6vw, 6rem)",
          lineHeight: 0.8,
          color: "var(--gold)",
          fontWeight: 400,
          marginBottom: "1.25rem",
          opacity: 0.6,
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Quote text */}
      <p
        className="font-display"
        style={{
          fontStyle: "italic",
          fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
          lineHeight: 1.85,
          color: "var(--ivory-dim)",
          fontWeight: 300,
          flex: 1,
          marginBottom: "1.75rem",
        }}
      >
        {t.quote}
      </p>

      {/* Stars */}
      <div style={{
        display: "flex",
        gap: "3px",
        marginBottom: "1rem",
      }}>
        {[...Array(t.stars)].map((_, si) => (
          <Star key={si} size={11} fill="var(--gold)" style={{ color: "var(--gold)" }} />
        ))}
      </div>

      {/* Divider */}
      <div style={{
        height: "1px",
        background: "rgba(201,169,110,0.2)",
        marginBottom: "1rem",
      }} />

      {/* Author */}
      <div>
        <div style={{
          fontSize: "13px",
          letterSpacing: "0.03em",
          color: "var(--ivory)",
          fontWeight: 400,
          marginBottom: "3px",
        }}>
          {t.author}
        </div>
        <div style={{
          fontSize: "11px",
          color: "var(--ivory-faint)",
          letterSpacing: "0.02em",
        }}>
          {t.title}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        background: "var(--charcoal)",
        padding: "clamp(4rem, 8vw, 7rem) 0",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}
        >
          <span style={{
            display: "block",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Our Guests Speak
          </span>
          <h2
            className="font-display"
            style={{
              color: "var(--ivory)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1,
              marginBottom: "1.25rem",
            }}
          >
            Moments Remembered
          </h2>
          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto",
            opacity: 0.7,
          }} />
        </motion.div>

      </div>

      {/* ── Desktop / Tablet Grid ── */}
      <div className="aurelia-testimonials-grid-wrapper">
        <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3rem)" }}>
          <div className="aurelia-testimonials-grid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile Carousel ── */}
      <div className="aurelia-testimonials-carousel">
        <div className="aurelia-carousel-track">
          {testimonials.map((t, i) => (
            <div className="aurelia-carousel-slide" key={i}>
              <TestimonialCard t={t} i={i} inView={inView} />
            </div>
          ))}
        </div>
        {/* Scroll hint fade on right edge */}
        <div className="aurelia-carousel-fade" />
      </div>

      <style>{`
        /* ── Shared card styles ── */
        .aurelia-testimonial-card {
          background: var(--charcoal);
          padding: clamp(1.75rem, 2.5vw, 2.5rem);
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* ── Desktop grid (default) ── */
        .aurelia-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(201,169,110,0.1);
        }

        /* ── Tablet: 2 columns ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .aurelia-testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ── Mobile: hide grid, show carousel ── */
        .aurelia-testimonials-carousel {
          display: none;
        }

        @media (max-width: 767px) {
          .aurelia-testimonials-grid-wrapper {
            display: none;
          }

          .aurelia-testimonials-carousel {
            display: block;
            position: relative;
          }

          .aurelia-carousel-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 1px;
            background: rgba(201,169,110,0.1);
            padding: 0 clamp(1.5rem, 4vw, 3rem);
            /* Peek next card */
            scroll-padding-left: clamp(1.5rem, 4vw, 3rem);
          }

          .aurelia-carousel-track::-webkit-scrollbar {
            display: none;
          }

          .aurelia-carousel-slide {
            flex: 0 0 85vw;
            max-width: 340px;
            scroll-snap-align: start;
          }

          .aurelia-carousel-slide .aurelia-testimonial-card {
            height: 100%;
          }

          /* Quote font size fixed on mobile */
          .aurelia-carousel-slide p.font-display {
            font-size: 0.95rem !important;
          }

          /* Fade hint on right edge */
          .aurelia-carousel-fade {
            position: absolute;
            top: 0;
            right: 0;
            width: 60px;
            height: 100%;
            background: linear-gradient(to right, transparent, var(--charcoal));
            pointer-events: none;
          }

          /* Scroll dots indicator */
          .aurelia-testimonials-carousel::after {
            content: "scroll to explore";
            display: block;
            text-align: center;
            font-size: 9px;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: rgba(201,169,110,0.3);
            margin-top: 1.5rem;
            padding: 0 clamp(1.5rem, 4vw, 3rem);
          }
        }
      `}</style>
    </section>
  );
}