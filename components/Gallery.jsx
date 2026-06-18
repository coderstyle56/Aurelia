// "use client";
// import { useRef, useState } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { X, ZoomIn } from "lucide-react";

// const images = [
//   { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop", label: "The Dining Room", span: "row-span-2" },
//   { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=85&auto=format&fit=crop", label: "Signature Plates" },
//   { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=85&auto=format&fit=crop", label: "The Wine Cellar" },
//   { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85&auto=format&fit=crop", label: "In the Kitchen" },
//   { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=85&auto=format&fit=crop", label: "Private Dining", span: "col-span-2" },
//   { src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=85&auto=format&fit=crop", label: "Craft Cocktails" },
//   { src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&q=85&auto=format&fit=crop", label: "Evening Atmosphere" },
// ];

// export default function Gallery() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });
//   const [lightbox, setLightbox] = useState(null);

//   return (
//     <section id="gallery" ref={ref} className="py-32 px-6" style={{ background: "var(--ink)" }}>
//       <div className="max-w-[1300px] mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <span
//             className="text-[10px] tracking-[0.35em] uppercase block mb-5"
//             style={{ color: "var(--gold)" }}
//           >
//             Inside Aurelia
//           </span>
//           <h2
//             className="font-display leading-none"
//             style={{ color: "var(--ivory)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
//           >
//             Gallery
//           </h2>
//         </motion.div>

//         {/* Masonry Grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-[240px_240px_240px] gap-2 auto-rows-[240px]">
//           {images.map((img, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.96 }}
//               animate={inView ? { opacity: 1, scale: 1 } : {}}
//               transition={{ duration: 0.6, delay: i * 0.08 }}
//               className={`relative overflow-hidden group cursor-pointer ${img.span || ""}`}
//               onClick={() => setLightbox(img)}
//             >
//               <div
//                 className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
//                 style={{ backgroundImage: `url('${img.src}')` }}
//               />
//               <div
//                 className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
//                 style={{ background: "rgba(10,9,6,0.5)" }}
//               >
//                 <ZoomIn size={28} style={{ color: "var(--gold)" }} />
//               </div>
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to top, rgba(10,9,6,0.65) 0%, transparent 50%)",
//                 }}
//               />
//               <span
//                 className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
//                 style={{ color: "rgba(242,237,228,0.7)" }}
//               >
//                 {img.label}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {lightbox && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-6"
//             style={{ background: "rgba(10,9,6,0.95)" }}
//             onClick={() => setLightbox(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//               className="relative max-w-4xl max-h-[85vh] w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={lightbox.src}
//                 alt={lightbox.label}
//                 className="w-full h-full object-contain"
//                 style={{ maxHeight: "80vh" }}
//               />
//               <div
//                 className="absolute bottom-0 left-0 right-0 p-4 text-center text-[11px] tracking-[0.2em] uppercase"
//                 style={{ color: "var(--gold)" }}
//               >
//                 {lightbox.label}
//               </div>
//               <button
//                 onClick={() => setLightbox(null)}
//                 className="absolute top-4 right-4 p-2 transition-colors"
//                 style={{ color: "var(--ivory-dim)" }}
//               >
//                 <X size={20} />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop",
    label: "The Dining Room",
    gridArea: "1 / 1 / 3 / 2", // row 1-2, col 1 (tall)
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=85&auto=format&fit=crop",
    label: "Signature Plates",
    gridArea: "1 / 2 / 2 / 3",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=85&auto=format&fit=crop",
    label: "The Wine Cellar",
    gridArea: "1 / 3 / 2 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85&auto=format&fit=crop",
    label: "In the Kitchen",
    gridArea: "2 / 2 / 3 / 3",
  },
  {
    src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=85&auto=format&fit=crop",
    label: "Private Dining",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=85&auto=format&fit=crop",
    label: "Craft Cocktails",
    gridArea: "3 / 1 / 4 / 2",
  },
  {
    src: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&q=85&auto=format&fit=crop",
    label: "Evening Atmosphere",
    gridArea: "3 / 2 / 4 / 4", // wide — spans col 2 & 3
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" ref={ref} style={{ background: "var(--ink)", padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span style={{
            display: "block",
            fontSize: "10px",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1rem",
          }}>
            Inside Aurelia
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
            Gallery
          </h2>
          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--gold)",
            margin: "0 auto",
            opacity: 0.7,
          }} />
        </motion.div>

        {/* ── Grid — explicit gridArea, no Tailwind span classes ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 280px)",
          gap: "6px",
        }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onClick={() => setLightbox(img)}
              style={{
                gridArea: img.gridArea,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              className="group"
            >
              {/* Image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('${img.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 700ms ease",
                }}
                className="group-hover:scale-110"
              />

              {/* Dark overlay on hover */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,9,6,0.5)",
                opacity: 0,
                transition: "opacity 300ms ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="group-hover:opacity-100"
              >
                <ZoomIn size={26} style={{ color: "var(--gold)" }} />
              </div>

              {/* Bottom gradient always visible */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(10,9,6,0.7) 0%, transparent 50%)",
              }} />

              {/* Label */}
              <span style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(242,237,228,0.8)",
              }}>
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              background: "rgba(10,9,6,0.95)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "900px",
                width: "100%",
                maxHeight: "85vh",
              }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                style={{ width: "100%", height: "100%", objectFit: "contain", maxHeight: "80vh" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1rem",
                textAlign: "center",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}>
                {lightbox.label}
              </div>
              <button
                onClick={() => setLightbox(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  padding: "0.5rem",
                  color: "var(--ivory-dim)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile override */}
      <style>{`
        @media (max-width: 767px) {
          #gallery [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            grid-template-rows: none !important;
            grid-auto-rows: 260px !important;
          }
          #gallery [style*="gridArea"] {
            grid-area: auto !important;
          }
        }
      `}</style>
    </section>
  );
}