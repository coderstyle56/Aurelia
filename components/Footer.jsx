// "use client";
// import { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const navCols = [
//   {
//     title: "Explore",
//     links: ["Menu", "Experience", "Gallery", "Reservations", "Private Dining"],
//   },
//   {
//     title: "Contact",
//     links: ["+44 20 7491 0000", "hello@aurelialondon.com", "12 Audley Street", "Mayfair, London W1K 2QG"],
//     isContact: true,
//   },
// ];

// // Inline SVG social icons (lucide-react 0.383 doesn't include brand icons)
// const SocialIcons = {
//   Instagram: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//       <circle cx="12" cy="12" r="4"/>
//       <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
//     </svg>
//   ),
//   Facebook: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//     </svg>
//   ),
//   LinkedIn: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//       <rect x="2" y="9" width="4" height="12"/>
//       <circle cx="4" cy="4" r="2"/>
//     </svg>
//   ),
// };

// const socials = [
//   { Icon: SocialIcons.Instagram, label: "Instagram", href: "#" },
//   { Icon: SocialIcons.Facebook, label: "Facebook", href: "#" },
//   { Icon: SocialIcons.LinkedIn, label: "LinkedIn", href: "#" },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subbed, setSubbed] = useState(false);

//   const subscribe = () => {
//     if (email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
//       setSubbed(true);
//     }
//   };

//   return (
//     <footer style={{ background: "var(--obsidian)", borderTop: "1px solid rgba(201,169,110,0.1)" }}>
//       {/* Main Footer */}
//       <div className="max-w-[1400px] mx-auto px-8 pt-20 pb-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <div
//               className="font-display text-3xl tracking-[0.15em] uppercase mb-5"
//               style={{ color: "var(--gold)", fontWeight: 400 }}
//             >
//               Aurelia
//             </div>
//             <div
//               className="mb-6"
//               style={{ height: "1px", width: "40px", background: "var(--gold)" }}
//             />
//             <p
//               className="text-[13px] leading-[1.9] mb-8"
//               style={{ color: "var(--ivory-faint)" }}
//             >
//               Fine dining in the heart of Mayfair. An evening at Aurelia is not a meal — it is a composition, crafted for you alone.
//             </p>

//             {/* Socials */}
//             <div className="flex gap-3">
//               {socials.map(({ Icon, label, href }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="w-9 h-9 flex items-center justify-center transition-all duration-200"
//                   style={{ border: "1px solid rgba(201,169,110,0.2)", color: "var(--ivory-faint)" }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = "var(--gold)";
//                     e.currentTarget.style.color = "var(--gold)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
//                     e.currentTarget.style.color = "var(--ivory-faint)";
//                   }}
//                 >
//                   <Icon size={14} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Nav Columns */}
//           {navCols.map((col) => (
//             <div key={col.title}>
//               <h4
//                 className="text-[10px] tracking-[0.3em] uppercase mb-6"
//                 style={{ color: "var(--gold)" }}
//               >
//                 {col.title}
//               </h4>
//               <ul className="space-y-3">
//                 {col.links.map((link) => (
//                   <li key={link}>
//                     {col.isContact ? (
//                       <span
//                         className="text-[13px]"
//                         style={{ color: "var(--ivory-faint)" }}
//                       >
//                         {link}
//                       </span>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           const el = document.getElementById(link.toLowerCase());
//                           if (el) el.scrollIntoView({ behavior: "smooth" });
//                         }}
//                         className="text-[13px] transition-colors duration-200 text-left"
//                         style={{ color: "var(--ivory-faint)" }}
//                         onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-faint)")}
//                       >
//                         {link}
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Newsletter */}
//           <div>
//             <h4
//               className="text-[10px] tracking-[0.3em] uppercase mb-6"
//               style={{ color: "var(--gold)" }}
//             >
//               Newsletter
//             </h4>
//             <p
//               className="text-[13px] leading-relaxed mb-5"
//               style={{ color: "var(--ivory-faint)" }}
//             >
//               Seasonal menus, exclusive events, and first access to tables for our most sought-after evenings.
//             </p>

//             {!subbed ? (
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && subscribe()}
//                   className="flex-1 text-[12px] px-4 py-3 outline-none"
//                   style={{
//                     background: "rgba(242,237,228,0.05)",
//                     border: "1px solid rgba(201,169,110,0.2)",
//                     borderRight: "none",
//                     color: "var(--ivory)",
//                   }}
//                 />
//                 <button
//                   onClick={subscribe}
//                   className="px-4 py-3 transition-all duration-200 flex items-center"
//                   style={{ background: "var(--gold)", color: "var(--obsidian)" }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
//                 >
//                   <ArrowRight size={16} />
//                 </button>
//               </div>
//             ) : (
//               <div
//                 className="flex items-center gap-2 text-[12px] py-3 px-4"
//                 style={{
//                   border: "1px solid rgba(201,169,110,0.3)",
//                   color: "var(--gold)",
//                 }}
//               >
//                 <span>✦</span>
//                 <span>Thank you. You&apos;re on the list.</span>
//               </div>
//             )}

//             {/* Awards row */}
//             <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}>
//               <div className="flex gap-4 items-center flex-wrap">
//                 {["3 Michelin ★", "World's 50 Best", "AA 5 Rosettes"].map((award) => (
//                   <span
//                     key={award}
//                     className="text-[9px] tracking-[0.15em] uppercase"
//                     style={{ color: "rgba(201,169,110,0.5)" }}
//                   >
//                     {award}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div
//           className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
//           style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}
//         >
//           <p className="text-[11px]" style={{ color: "rgba(201,169,110,0.3)" }}>
//             © 2025 Aurelia. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-[11px] transition-colors duration-200"
//                 style={{ color: "rgba(201,169,110,0.3)" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.3)")}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//           <p className="text-[11px]" style={{ color: "rgba(201,169,110,0.2)" }}>
//             Built by AstraForge
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// "use client";
// import { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const navCols = [
//   {
//     title: "Explore",
//     links: ["Menu", "Experience", "Gallery", "Reservations", "Private Dining"],
//   },
//   {
//     title: "Contact",
//     links: ["+44 20 7491 0000", "hello@aurelialondon.com", "12 Audley Street", "Mayfair, London W1K 2QG"],
//     isContact: true,
//   },
// ];

// const SocialIcons = {
//   Instagram: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//       <circle cx="12" cy="12" r="4"/>
//       <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
//     </svg>
//   ),
//   Facebook: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//     </svg>
//   ),
//   LinkedIn: () => (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//       <rect x="2" y="9" width="4" height="12"/>
//       <circle cx="4" cy="4" r="2"/>
//     </svg>
//   ),
// };

// const socials = [
//   { Icon: SocialIcons.Instagram, label: "Instagram", href: "#" },
//   { Icon: SocialIcons.Facebook, label: "Facebook", href: "#" },
//   { Icon: SocialIcons.LinkedIn, label: "LinkedIn", href: "#" },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [subbed, setSubbed] = useState(false);

//   const subscribe = () => {
//     if (email.match(/^[^@]+@[^@]+\.[^@]+$/)) setSubbed(true);
//   };

//   return (
//     <footer style={{
//       background: "var(--obsidian)",
//       borderTop: "1px solid rgba(201,169,110,0.1)",
//     }}>
//       <div style={{
//         maxWidth: "1400px",
//         margin: "0 auto",
//         padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 3vw, 3rem)",
//       }}>

//         {/* ── Main grid ── */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1.4fr 1fr 1fr 1.4fr",
//           gap: "clamp(2rem, 4vw, 4rem)",
//           marginBottom: "clamp(2.5rem, 5vw, 4rem)",
//           alignItems: "start",
//         }}>

//           {/* Brand column */}
//           <div>
//             <div
//               className="font-display"
//               style={{
//                 fontSize: "1.75rem",
//                 letterSpacing: "0.15em",
//                 textTransform: "uppercase",
//                 color: "var(--gold)",
//                 fontWeight: 400,
//                 marginBottom: "1rem",
//               }}
//             >
//               Aurelia
//             </div>
//             <div style={{
//               height: "1px",
//               width: "40px",
//               background: "var(--gold)",
//               marginBottom: "1.25rem",
//               opacity: 0.7,
//             }} />
//             <p style={{
//               fontSize: "13px",
//               lineHeight: 1.9,
//               color: "var(--ivory-faint)",
//               marginBottom: "1.75rem",
//               maxWidth: "28ch",
//             }}>
//               Fine dining in the heart of Mayfair. An evening at Aurelia is not a meal — it is a composition, crafted for you alone.
//             </p>

//             {/* Social icons — position: relative to stay above Next.js overlay */}
//             <div style={{
//               display: "flex",
//               gap: "10px",
//               position: "relative",
//               zIndex: 10,
//             }}>
//               {socials.map(({ Icon, label, href }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   style={{
//                     width: "36px",
//                     height: "36px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     border: "1px solid rgba(201,169,110,0.2)",
//                     color: "var(--ivory-faint)",
//                     textDecoration: "none",
//                     transition: "all 200ms ease",
//                     flexShrink: 0,
//                     position: "relative",
//                     zIndex: 10,
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = "var(--gold)";
//                     e.currentTarget.style.color = "var(--gold)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
//                     e.currentTarget.style.color = "var(--ivory-faint)";
//                   }}
//                 >
//                   <Icon />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Nav columns */}
//           {navCols.map((col) => (
//             <div key={col.title}>
//               <h4 style={{
//                 fontSize: "10px",
//                 letterSpacing: "0.3em",
//                 textTransform: "uppercase",
//                 color: "var(--gold)",
//                 marginBottom: "1.5rem",
//               }}>
//                 {col.title}
//               </h4>
//               <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
//                 {col.links.map((link) => (
//                   <li key={link}>
//                     {col.isContact ? (
//                       <span style={{ fontSize: "13px", color: "var(--ivory-faint)", lineHeight: 1.6 }}>
//                         {link}
//                       </span>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           const id = link.toLowerCase().replace(" ", "-");
//                           const el = document.getElementById(id) || document.querySelector(`[id*="${id}"]`);
//                           if (el) el.scrollIntoView({ behavior: "smooth" });
//                         }}
//                         style={{
//                           fontSize: "13px",
//                           color: "var(--ivory-faint)",
//                           background: "none",
//                           border: "none",
//                           cursor: "pointer",
//                           padding: 0,
//                           fontFamily: "inherit",
//                           textAlign: "left",
//                           transition: "color 200ms ease",
//                         }}
//                         onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-faint)")}
//                       >
//                         {link}
//                       </button>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* Newsletter column */}
//           <div>
//             <h4 style={{
//               fontSize: "10px",
//               letterSpacing: "0.3em",
//               textTransform: "uppercase",
//               color: "var(--gold)",
//               marginBottom: "1.5rem",
//             }}>
//               Newsletter
//             </h4>
//             <p style={{
//               fontSize: "13px",
//               lineHeight: 1.8,
//               color: "var(--ivory-faint)",
//               marginBottom: "1.25rem",
//             }}>
//               Seasonal menus, exclusive events, and first access to tables for our most sought-after evenings.
//             </p>

//             {!subbed ? (
//               <div style={{ display: "flex" }}>
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && subscribe()}
//                   style={{
//                     flex: 1,
//                     fontSize: "12px",
//                     padding: "11px 14px",
//                     outline: "none",
//                     background: "rgba(242,237,228,0.05)",
//                     border: "1px solid rgba(201,169,110,0.2)",
//                     borderRight: "none",
//                     color: "var(--ivory)",
//                     fontFamily: "inherit",
//                     minWidth: 0,
//                   }}
//                 />
//                 <button
//                   onClick={subscribe}
//                   style={{
//                     padding: "11px 14px",
//                     background: "var(--gold)",
//                     color: "var(--obsidian)",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     transition: "background 200ms ease",
//                     flexShrink: 0,
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
//                 >
//                   <ArrowRight size={15} />
//                 </button>
//               </div>
//             ) : (
//               <div style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 fontSize: "12px",
//                 padding: "11px 14px",
//                 border: "1px solid rgba(201,169,110,0.3)",
//                 color: "var(--gold)",
//               }}>
//                 <span>✦</span>
//                 <span>Thank you. You&apos;re on the list.</span>
//               </div>
//             )}

//             {/* Awards */}
//             <div style={{
//               marginTop: "1.75rem",
//               paddingTop: "1.25rem",
//               borderTop: "1px solid rgba(201,169,110,0.1)",
//               display: "flex",
//               gap: "1rem",
//               flexWrap: "wrap",
//               alignItems: "center",
//             }}>
//               {["3 Michelin ★", "World's 50 Best", "AA 5 Rosettes"].map((award) => (
//                 <span key={award} style={{
//                   fontSize: "9px",
//                   letterSpacing: "0.15em",
//                   textTransform: "uppercase",
//                   color: "rgba(201,169,110,0.45)",
//                 }}>
//                   {award}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Bottom bar ── */}
//         <div style={{
//           paddingTop: "1.5rem",
//           borderTop: "1px solid rgba(201,169,110,0.08)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           gap: "0.75rem",
//         }}>
//           <p style={{ fontSize: "11px", color: "rgba(201,169,110,0.3)" }}>
//             © 2025 Aurelia. All rights reserved.
//           </p>
//           <div style={{ display: "flex", gap: "1.5rem" }}>
//             {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 style={{
//                   fontSize: "11px",
//                   color: "rgba(201,169,110,0.3)",
//                   textDecoration: "none",
//                   transition: "color 200ms ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.3)")}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//           <p style={{ fontSize: "11px", color: "rgba(201,169,110,0.2)" }}>
//             Built by AstraForge
//           </p>
//         </div>
//       </div>

//       {/* Responsive */}
//       <style>{`
//         @media (max-width: 1023px) {
//           footer [style*="gridTemplateColumns: 1.4fr"] {
//             grid-template-columns: 1fr 1fr !important;
//           }
//         }
//         @media (max-width: 639px) {
//           footer [style*="gridTemplateColumns: 1.4fr"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }

"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const navCols = [
  {
    title: "Explore",
    links: ["Menu", "Experience", "Gallery", "Reservations", "Private Dining"],
  },
  {
    title: "Contact",
    links: ["+44 20 7491 0000", "hello@aurelialondon.com", "12 Audley Street", "Mayfair, London W1K 2QG"],
    isContact: true,
  },
];

const SocialIcons = {
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
};

const socials = [
  { Icon: SocialIcons.Instagram, label: "Instagram", href: "#" },
  { Icon: SocialIcons.Facebook, label: "Facebook", href: "#" },
  { Icon: SocialIcons.LinkedIn, label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const subscribe = () => {
    if (email.match(/^[^@]+@[^@]+\.[^@]+$/)) setSubbed(true);
  };

  return (
    <footer style={{
      background: "var(--obsidian)",
      borderTop: "1px solid rgba(201,169,110,0.1)",
    }}>
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(1.5rem, 3vw, 3rem)",
      }}>

        {/* ── Main grid ── */}
        <div className="aurelia-footer-grid">

          {/* Brand column */}
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "1.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              Aurelia
            </div>
            <div style={{
              height: "1px",
              width: "40px",
              background: "var(--gold)",
              marginBottom: "1.25rem",
              opacity: 0.7,
            }} />
            <p style={{
              fontSize: "13px",
              lineHeight: 1.9,
              color: "var(--ivory-faint)",
              marginBottom: "1.75rem",
              maxWidth: "28ch",
            }}>
              Fine dining in the heart of Mayfair. An evening at Aurelia is not a meal — it is a composition, crafted for you alone.
            </p>

            {/* Social icons */}
            <div style={{
              display: "flex",
              gap: "10px",
              position: "relative",
              zIndex: 10,
            }}>
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(201,169,110,0.2)",
                    color: "var(--ivory-faint)",
                    textDecoration: "none",
                    transition: "all 200ms ease",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 10,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,169,110,0.2)";
                    e.currentTarget.style.color = "var(--ivory-faint)";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {col.links.map((link) => (
                  <li key={link}>
                    {col.isContact ? (
                      <span style={{ fontSize: "13px", color: "var(--ivory-faint)", lineHeight: 1.6 }}>
                        {link}
                      </span>
                    ) : (
                      <button
                        onClick={() => {
                          const id = link.toLowerCase().replace(" ", "-");
                          const el = document.getElementById(id) || document.querySelector(`[id*="${id}"]`);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        style={{
                          fontSize: "13px",
                          color: "var(--ivory-faint)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          fontFamily: "inherit",
                          textAlign: "left",
                          transition: "color 200ms ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-faint)")}
                      >
                        {link}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter column */}
          <div>
            <h4 style={{
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.5rem",
            }}>
              Newsletter
            </h4>
            <p style={{
              fontSize: "13px",
              lineHeight: 1.8,
              color: "var(--ivory-faint)",
              marginBottom: "1.25rem",
            }}>
              Seasonal menus, exclusive events, and first access to tables for our most sought-after evenings.
            </p>

            {!subbed ? (
              <div style={{ display: "flex" }}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && subscribe()}
                  style={{
                    flex: 1,
                    fontSize: "12px",
                    padding: "11px 14px",
                    outline: "none",
                    background: "rgba(242,237,228,0.05)",
                    border: "1px solid rgba(201,169,110,0.2)",
                    borderRight: "none",
                    color: "var(--ivory)",
                    fontFamily: "inherit",
                    minWidth: 0,
                  }}
                />
                <button
                  onClick={subscribe}
                  style={{
                    padding: "11px 14px",
                    background: "var(--gold)",
                    color: "var(--obsidian)",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    transition: "background 200ms ease",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                padding: "11px 14px",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "var(--gold)",
              }}>
                <span>✦</span>
                <span>Thank you. You&apos;re on the list.</span>
              </div>
            )}

            {/* Awards */}
            <div style={{
              marginTop: "1.75rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(201,169,110,0.1)",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}>
              {["3 Michelin ★", "World's 50 Best", "AA 5 Rosettes"].map((award) => (
                <span key={award} style={{
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(201,169,110,0.45)",
                }}>
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(201,169,110,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(201,169,110,0.3)" }}>
            © 2025 Aurelia. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "11px",
                  color: "rgba(201,169,110,0.3)",
                  textDecoration: "none",
                  transition: "color 200ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,169,110,0.3)")}
              >
                {item}
              </a>
            ))}
          </div>
          <p style={{ fontSize: "11px", color: "rgba(201,169,110,0.2)" }}>
            Built by AstraForge
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        .aurelia-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.4fr;
          gap: clamp(2rem, 4vw, 4rem);
          margin-bottom: clamp(2.5rem, 5vw, 4rem);
          align-items: start;
        }

        @media (max-width: 1023px) {
          .aurelia-footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 639px) {
          .aurelia-footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}