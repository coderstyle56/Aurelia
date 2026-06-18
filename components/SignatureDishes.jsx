// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const dishes = [
//   {
//     name: "Truffle Risotto",
//     description: "Aged Arborio, Périgord black truffle, 24-month Parmigiano, truffle oil reduction",
//     price: "£48",
//     tag: "Chef's Signature",
//     img: "https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2023/11/truffle-mushroom-risotto-overhead-close.jpg?w=1200&ssl=1",
//   },
//   {
//     name: "Wagyu Striploin",
//     description: "A5 Japanese Wagyu, bone marrow butter, charred leek ash, aged red wine jus",
//     price: "£145",
//     tag: "From the Fire",
//     img: "https://craigcookthenaturalbutcher.com.au/cdn/shop/files/craig-cook-furano-wagyu-striploin-1.jpg?v=1707189996",
//   },
//   {
//     name: "Lobster Thermidor",
//     description: "Canadian lobster, tarragon cream, cognac flambé, caviar, lemon butter sauce",
//     price: "£95",
//     tag: "From the Sea",
//     img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700&q=85&auto=format&fit=crop",
//   },
//   {
//     name: "Chocolate Soufflé",
//     description: "Valrhona 72%, Madagascan vanilla crème anglaise, gold leaf, salted caramel",
//     price: "£28",
//     tag: "Grand Finale",
//     img: "https://www.flavoursholidays.co.uk/wp-content/uploads/2022/02/Chocolate-souffle-SM.jpg",
//   },
// ];

// function DishCard({ dish, index }) {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
//       className="signature-card group relative overflow-hidden cursor-pointer"
//       style={{ background: "var(--charcoal)" }}
//     >
//       {/* Image */}
//       <div className="signature-card__image overflow-hidden relative">
//         <div
//           className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-110"
//           style={{ backgroundImage: `url('${dish.img}')` }}
//         />
//         {/* Overlay */}
//         <div
//           className="absolute inset-0 transition-opacity duration-500"
//           style={{
//             background: "linear-gradient(to top, rgba(10,9,6,0.85) 0%, rgba(10,9,6,0.2) 60%, transparent 100%)",
//           }}
//         />
//         {/* Tag */}
//         <div className="absolute top-4 left-4">
//           <span
//             className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5"
//             style={{
//               background: "rgba(10,9,6,0.7)",
//               color: "var(--gold)",
//               border: "1px solid rgba(201,169,110,0.3)",
//             }}
//           >
//             {dish.tag}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="signature-card__content">
//         <div className="signature-card__heading">
//           <h3
//             className="signature-card__title font-display"
//             style={{ color: "var(--ivory)", fontWeight: 400 }}
//           >
//             {dish.name}
//           </h3>
//           <span
//             className="signature-card__price font-display"
//             style={{ color: "var(--gold)", fontWeight: 400 }}
//           >
//             {dish.price}
//           </span>
//         </div>

//         {/* Gold line */}
//         <div
//           className="transition-all duration-500 mb-4"
//           style={{
//             height: "1px",
//             background: "var(--gold)",
//             width: "32px",
//           }}
//         />

//         <p
//           className="signature-card__description"
//           style={{ color: "var(--ivory-dim)" }}
//         >
//           {dish.description}
//         </p>

//         {/* Hover CTA */}
//         <div className="overflow-hidden mt-5 h-0 group-hover:h-8 transition-all duration-500">
//           <button
//             className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
//             style={{ color: "var(--gold)" }}
//           >
//             View Details →
//           </button>
//         </div>
//       </div>

//       {/* Bottom gold border reveal on hover */}
//       <div
//         className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
//         style={{ background: "var(--gold)" }}
//       />
//     </motion.div>
//   );
// }

// export default function SignatureDishes() {
//   const titleRef = useRef(null);
//   const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

//   return (
//     <section id="menu" className="py-32 px-6" style={{ background: "var(--ink)" }}>
//       <div className="max-w-[1400px] mx-auto">
//         {/* Header */}
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={titleInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="signature-dishes__header text-center"
//         >
//           <span
//             className="text-[10px] tracking-[0.35em] uppercase block mb-6"
//             style={{ color: "var(--gold)" }}
//           >
//             Curated for the Discerning Palate
//           </span>
//           <h2
//             className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none mb-6"
//             style={{ color: "var(--ivory)", fontWeight: 400 }}
//           >
//             Signature Dishes
//           </h2>
//           <p
//             className="text-[14px] max-w-lg mx-auto leading-relaxed"
//             style={{ color: "var(--ivory-dim)" }}
//           >
//             Each plate is a composition — sourced from the world's finest producers,
//             crafted with the precision of a lifetime's dedication.
//           </p>
//         </motion.div>

//         {/* Dishes Grid */}
//         <div className="signature-dishes__grid">
//           {dishes.map((dish, i) => (
//             <DishCard key={dish.name} dish={dish} index={i} />
//           ))}
//         </div>

//         {/* View full menu */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-14"
//         >
//           <button
//             onClick={() =>
//               document.getElementById("interactive-menu")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="text-[11px] tracking-[0.22em] uppercase border px-10 py-4 transition-all duration-300"
//             style={{ borderColor: "rgba(201,169,110,0.4)", color: "var(--gold)" }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = "var(--gold)";
//               e.currentTarget.style.color = "var(--obsidian)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = "transparent";
//               e.currentTarget.style.color = "var(--gold)";
//             }}
//           >
//             Explore the Full Menu
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const dishes = [
  {
    name: "Truffle Risotto",
    description:
      "Aged Arborio, Périgord black truffle, 24-month Parmigiano, truffle oil reduction",
    price: "£48",
    tag: "Chef's Signature",
    img: "https://i0.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2023/11/truffle-mushroom-risotto-overhead-close.jpg?w=1200&ssl=1",
  },
  {
    name: "Wagyu Striploin",
    description:
      "A5 Japanese Wagyu, bone marrow butter, charred leek ash, aged red wine jus",
    price: "£145",
    tag: "From the Fire",
    img: "https://craigcookthenaturalbutcher.com.au/cdn/shop/files/craig-cook-furano-wagyu-striploin-1.jpg?v=1707189996",
  },
  {
    name: "Lobster Thermidor",
    description:
      "Canadian lobster, tarragon cream, cognac flambé, caviar, lemon butter sauce",
    price: "£95",
    tag: "From the Sea",
    img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=700&q=85&auto=format&fit=crop",
  },
  {
    name: "Chocolate Soufflé",
    description:
      "Valrhona 72%, Madagascan vanilla crème anglaise, gold leaf, salted caramel",
    price: "£28",
    tag: "Grand Finale",
    img: "https://www.flavoursholidays.co.uk/wp-content/uploads/2022/02/Chocolate-souffle-SM.jpg",
  },
];

function DishCard({ dish, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="signature-card group relative overflow-hidden cursor-pointer"
      style={{ background: "var(--charcoal)" }}
    >
      {/* Image */}
      <div className="signature-card__image overflow-hidden relative">
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${dish.img}')` }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top, rgba(10,9,6,0.85) 0%, rgba(10,9,6,0.2) 60%, transparent 100%)",
          }}
        />
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5"
            style={{
              background: "rgba(10,9,6,0.7)",
              color: "var(--gold)",
              border: "1px solid rgba(201,169,110,0.3)",
            }}
          >
            {dish.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="signature-card__content">
        <div className="signature-card__heading">
          <h3
            className="signature-card__title font-display"
            style={{ color: "var(--ivory)", fontWeight: 400 }}
          >
            {dish.name}
          </h3>
          <span
            className="signature-card__price font-display"
            style={{ color: "var(--gold)", fontWeight: 400 }}
          >
            {dish.price}
          </span>
        </div>

        {/* FIX 1: Gold divider line — full-width, clearly separated from heading row */}

        <p
          className="signature-card__description"
          style={{ color: "var(--ivory-dim)" }}
        >
          {dish.description}
        </p>

        {/* Hover CTA */}
        <div className="overflow-hidden mt-5 h-0 group-hover:h-8 transition-all duration-500">
          <button
            className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
            style={{ color: "var(--gold)" }}
          >
            View Details →
          </button>
        </div>
      </div>

      {/* Bottom gold border reveal on hover */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
        style={{ background: "var(--gold)" }}
      />
    </motion.div>
  );
}

export default function SignatureDishes() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section
      id="menu"
      className="py-32 px-6"
      style={{ background: "var(--ink)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="signature-dishes__header text-center"
        >
          <span
            className="text-[10px] tracking-[0.35em] uppercase block mb-6"
            style={{ color: "var(--gold)" }}
          >
            Curated for the Discerning Palate
          </span>
          <h2
            className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-none mb-6"
            style={{ color: "var(--ivory)", fontWeight: 400 }}
          >
            Signature Dishes
          </h2>
          <p style={{ color: "var(--ivory-dim)" }}>
  Each plate is a composition — sourced from the world's finest producers, crafted with the precision of a lifetime's dedication.
</p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="signature-dishes__grid">
          {dishes.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>

        {/* FIX 2: Explore Full Menu button — proper spacing, padding, and responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
          style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("interactive-menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block text-[11px] tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              borderColor: "rgba(201,169,110,0.5)",
              color: "var(--gold)",
              border: "1px solid rgba(201,169,110,0.5)",
              padding: "clamp(14px, 2vw, 18px) clamp(32px, 5vw, 56px)",
              letterSpacing: "0.25em",
              minWidth: "220px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--obsidian)";
              e.currentTarget.style.borderColor = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)";
            }}
          >
            Explore the Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
