"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";

const menuData = {
  Starters: [
    {
      name: "Oysters Rockefeller",
      desc: "Six west Mersea natives, spinach foam, parmesan, crispy shallots",
      price: "£32",
      veg: false,
    },
    {
      name: "Foie Gras Terrine",
      desc: "Sauternes jelly, brioche toast, Granny Smith apple, micro herbs",
      price: "£38",
      veg: false,
    },
    {
      name: "Burrata & Heritage Tomato",
      desc: "Pugliese burrata, tri-colour heirlooms, aged balsamic, basil oil",
      price: "£26",
      veg: true,
    },
    {
      name: "Scallop Ceviche",
      desc: "Hand-dived Orkney scallop, yuzu leche de tigre, cucumber, ají amarillo",
      price: "£34",
      veg: false,
    },
    {
      name: "Truffle Arancini",
      desc: "Carnaroli rice, Comté, summer truffle, saffron aioli",
      price: "£22",
      veg: true,
    },
    {
      name: "Smoked Salmon Royale",
      desc: "Hand-sliced Loch Duart salmon, blinis, crème fraîche, oscietra caviar",
      price: "£45",
      veg: false,
    },
  ],
  "Main Course": [
    {
      name: "Wagyu Striploin A5",
      desc: "Japanese A5 Wagyu, bone marrow butter, charred leek ash, aged jus",
      price: "£145",
      veg: false,
    },
    {
      name: "Lobster Thermidor",
      desc: "Whole Canadian lobster, tarragon cream, cognac flambé, caviar butter",
      price: "£95",
      veg: false,
    },
    {
      name: "Truffle Risotto",
      desc: "Aged Arborio, Périgord black truffle, 24-month Parmigiano, gold leaf",
      price: "£48",
      veg: true,
    },
    {
      name: "Lamb Wellington",
      desc: "Rack of Herdwick lamb, duxelles, wilted spinach, red wine reduction",
      price: "£68",
      veg: false,
    },
    {
      name: "Wild Sea Bass",
      desc: "Line-caught bass, fennel purée, samphire, saffron beurre blanc",
      price: "£58",
      veg: false,
    },
    {
      name: "Duck à l'Orange",
      desc: "Gressingham duck breast, blood orange sauce, dauphinoise, haricots verts",
      price: "£52",
      veg: false,
    },
  ],
  Desserts: [
    {
      name: "Chocolate Soufflé",
      desc: "Valrhona 72%, Madagascan vanilla crème anglaise, salted caramel",
      price: "£28",
      veg: true,
    },
    {
      name: "Crème Brûlée",
      desc: "Tahitian vanilla, torched Demerara, shortbread, fresh raspberries",
      price: "£18",
      veg: true,
    },
    {
      name: "Tarte Tatin",
      desc: "Bramley apple, 56° caramel, clotted cream, Calvados raisin ice cream",
      price: "£22",
      veg: true,
    },
    {
      name: "Cheese Trolley",
      desc: "A selection of eight artisan cheeses, quince, crackers, honeycomb",
      price: "£35",
      veg: true,
    },
    {
      name: "Mango Parfait",
      desc: "Alfonso mango, coconut tuile, passionfruit coulis, lime zest snow",
      price: "£20",
      veg: true,
    },
  ],
  Drinks: [
    {
      name: "Classic Wine Pairing",
      desc: "Seven wines curated by Sommelier Elena Cross across all courses",
      price: "£110",
      veg: false,
    },
    {
      name: "Prestige Pairing",
      desc: "Grand cru Burgundies, vintage Champagne, and rare Bordeaux",
      price: "£240",
      veg: false,
    },
    {
      name: "Champagne Flight",
      desc: "Three Blanc de Blancs: Krug, Salon, and Comtes de Champagne",
      price: "£85",
      veg: false,
    },
    {
      name: "Signature Cocktail",
      desc: "Our changing seasonal creation — ask your server for tonight's",
      price: "£22",
      veg: false,
    },
    {
      name: "Non-Alcoholic Pairing",
      desc: "House-fermented teas, pressed botanicals, shrubs, and cordials",
      price: "£65",
      veg: true,
    },
  ],
};

const tabs = Object.keys(menuData);

export default function InteractiveMenu() {
  const [active, setActive] = useState("Starters");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="interactive-menu"
      ref={ref}
      style={{
        background: "var(--charcoal)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
          <span
            style={{
              display: "block",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1rem",
            }}
          >
            Seasonal Selections
          </span>
          <h2
            className="font-display"
            style={{
              color: "var(--ivory)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            Our Menu
          </h2>
          {/* Subtitle gold line */}
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--gold)",
              margin: "1.25rem auto 0",
              opacity: 0.7,
            }}
          />
        </motion.div>

        {/* ── Tabs ── */}
        <motion.div
          role="tablist"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: "clamp(0.25rem, 2vw, 1rem)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
            borderBottom: "1px solid rgba(201,169,110,0.15)",
            overflowX: "auto",
            paddingBottom: "0",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                position: "relative",
                padding: "0.875rem clamp(0.75rem, 2vw, 1.5rem)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: active === tab ? "var(--ivory)" : "var(--ivory-faint)",
                transition: "color 200ms ease",
                whiteSpace: "nowrap",
                flexShrink: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {tab}
              {active === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-1px",
                    left: 0,
                    right: 0,
                    height: "1.5px",
                    background: "var(--gold)",
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Menu Items ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "2rem",
                  padding: "1.5rem 0",
                  // ✅ Last item pe border nahi
                  borderBottom:
                    i === menuData[active].length - 1
                      ? "none"
                      : "1px solid rgba(201,169,110,0.08)",
                  cursor: "default",
                  transition: "background 300ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(201,169,110,0.025)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {/* Left — name + veg badge + desc */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
                        fontWeight: 400,
                        color: "var(--ivory)",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.name}
                    </span>
                    {item.veg && (
                      <span
                        style={{
                          fontSize: "8px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "2px 6px",
                          border: "1px solid rgba(138,158,140,0.45)",
                          color: "#8A9E8C",
                          flexShrink: 0,
                          lineHeight: 1.6,
                        }}
                      >
                        V
                      </span>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: 1.7,
                      color: "var(--ivory-faint)",
                      maxWidth: "55ch",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Right — price */}
                <div
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    paddingTop: "0.15rem",
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.1rem, 1.4vw, 1.3rem)",
                      fontWeight: 400,
                      color: "var(--gold)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Footer note ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: "center",
            marginTop: "clamp(2rem, 4vw, 3rem)",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(201,169,110,0.08)",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              lineHeight: 1.7,
              color: "var(--ivory-faint)",
              letterSpacing: "0.03em",
            }}
          >
            All prices exclude a 12.5% discretionary service charge.
            <br />
            Please inform us of any dietary requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
