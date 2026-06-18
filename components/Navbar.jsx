// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";

// const links = ["Home", "Menu", "Experience", "Gallery", "Reservations", "Contact"];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollTo = (id) => {
//     const el = document.getElementById(id.toLowerCase());
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//         className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
//         style={{
//           background: scrolled ? "rgba(10,9,6,0.88)" : "transparent",
//           backdropFilter: scrolled ? "blur(16px)" : "none",
//           borderBottom: scrolled ? "1px solid rgba(201,169,110,0.12)" : "none",
//         }}
//       >
//         <div className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
//           {/* Logo */}
//           <a
//             href="#"
//             className="font-display text-2xl tracking-[0.15em] uppercase"
//             style={{ color: "var(--gold)", fontWeight: 400 }}
//           >
//             Aurelia
//           </a>

//           {/* Desktop Links */}
//           <ul className="hidden lg:flex items-center gap-10">
//             {links.map((link) => (
//               <li key={link}>
//                 <button
//                   onClick={() => scrollTo(link)}
//                   className="text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
//                   style={{ color: "var(--ivory-dim)", fontWeight: 400 }}
//                   onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
//                   onMouseLeave={(e) => (e.target.style.color = "var(--ivory-dim)")}
//                 >
//                   {link}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button
//               onClick={() => scrollTo("Reservations")}
//               className="text-[10px] tracking-[0.22em] uppercase px-6 py-3 border transition-all duration-300"
//               style={{
//                 borderColor: "var(--gold)",
//                 color: "var(--gold)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "var(--gold)";
//                 e.currentTarget.style.color = "var(--obsidian)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "transparent";
//                 e.currentTarget.style.color = "var(--gold)";
//               }}
//             >
//               Reserve
//             </button>
//           </div>

//           {/* Mobile menu toggle */}
//           <button
//             className="lg:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{ color: "var(--gold)" }}
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 flex flex-col items-center justify-center"
//             style={{ background: "rgba(10,9,6,0.97)" }}
//           >
//             <ul className="flex flex-col items-center gap-8">
//               {links.map((link, i) => (
//                 <motion.li
//                   key={link}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.07 }}
//                 >
//                   <button
//                     onClick={() => scrollTo(link)}
//                     className="font-display text-4xl tracking-widest"
//                     style={{ color: "var(--ivory)", fontWeight: 300 }}
//                   >
//                     {link}
//                   </button>
//                 </motion.li>
//               ))}
//               <motion.li
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <button
//                   onClick={() => scrollTo("Reservations")}
//                   className="mt-4 px-8 py-3 text-[11px] tracking-[0.2em] uppercase border"
//                   style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
//                 >
//                   Reserve a Table
//                 </button>
//               </motion.li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "Menu",
  "Experience",
  "Gallery",
  "Reservations",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          y: scrolled || menuOpen ? 0 : "-100%",
          opacity: scrolled || menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-0 inset-x-0 w-full z-50"
        style={{
          background: "rgba(10,9,6,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(201,169,110,0.12)",
          pointerEvents: scrolled || menuOpen ? "auto" : "none",
        }}
      >
        <div className="site-nav__inner flex items-center justify-between gap-6">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="cursor-pointer font-display text-xl sm:text-2xl tracking-[0.15em] uppercase shrink-0"
            style={{ border: "none", background: "none" }}
          >
            Aurelia
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-10">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="
                cursor-pointer
                text-[10px]
                xl:text-[11px]
                tracking-[0.15em]
                xl:tracking-[0.2em]
                uppercase
                whitespace-nowrap
                transition-colors
                duration-300
              "
                  style={{
                    color: "var(--ivory-dim)",
                    fontWeight: 400,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--ivory-dim)";
                  }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => scrollTo("Reservations")}
              className="
                gold-cta
                cursor-pointer
                text-[10px]
                whitespace-nowrap
              "
            >
              Reserve
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden cursor-pointer shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              color: "var(--gold)",
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "rgba(10,9,6,0.97)",
            }}
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.07,
                  }}
                >
                  <button
                    onClick={() => scrollTo(link)}
                    className="
                  cursor-pointer
                  font-display
                  text-3xl
                  sm:text-4xl
                  tracking-widest
                "
                    style={{
                      color: "var(--ivory)",
                      fontWeight: 300,
                    }}
                  >
                    {link}
                  </button>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => scrollTo("Reservations")}
                  className="
                cursor-pointer
                mt-4
                text-[11px]
                tracking-[0.2em]
                uppercase
                border
                inline-block
              "
                  style={{
                    borderColor: "var(--gold)",
                    color: "var(--gold)",
                    padding: "12px 32px",
                  }}
                >
                  Reserve a Table
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
