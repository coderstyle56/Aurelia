// "use client";
// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from "lucide-react";

// const timeSlots = {
//   lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
//   dinner: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"],
// };

// // Simulate some slots being taken
// const takenSlots = ["12:30 PM", "7:00 PM", "8:00 PM"];

// export default function Reservations() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const [form, setForm] = useState({
//     name: "", email: "", phone: "", guests: "", date: "", time: "", occasion: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Required";
//     if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
//     if (!form.phone.trim()) e.phone = "Required";
//     if (!form.guests) e.guests = "Required";
//     if (!form.date) e.date = "Required";
//     if (!form.time) e.time = "Select a time";
//     return e;
//   };

//   const submit = () => {
//     const e = validate();
//     if (Object.keys(e).length) { setErrors(e); return; }
//     setSubmitted(true);
//   };

//   const allSlots = [...timeSlots.lunch, ...timeSlots.dinner];

//   // Get tomorrow's date as min
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const minDate = tomorrow.toISOString().split("T")[0];

//   const inputStyle = (field) => ({
//     background: "rgba(242,237,228,0.04)",
//     border: `1px solid ${errors[field] ? "#c0392b" : "rgba(201,169,110,0.2)"}`,
//     color: "var(--ivory)",
//     padding: "13px 16px",
//     fontSize: "13px",
//     outline: "none",
//     width: "100%",
//     fontFamily: "inherit",
//     transition: "border-color 0.2s",
//   });

//   return (
//     <section id="reservations" ref={ref} className="py-32 px-6" style={{ background: "var(--ink)" }}>
//       <div className="max-w-[900px] mx-auto">
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
//             Your Evening Awaits
//           </span>
//           <h2
//             className="font-display leading-none mb-5"
//             style={{ color: "var(--ivory)", fontWeight: 400, fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
//           >
//             Reserve a Table
//           </h2>
//           <p className="text-[14px]" style={{ color: "var(--ivory-faint)" }}>
//             Lunch: Tuesday – Sunday · Dinner: Tuesday – Saturday
//           </p>
//         </motion.div>

//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               style={{
//                 border: "1px solid rgba(201,169,110,0.15)",
//                 background: "var(--charcoal)",
//               }}
//             >
//               {/* Form Header */}
//               <div
//                 className="px-8 py-5 border-b"
//                 style={{ borderColor: "rgba(201,169,110,0.12)" }}
//               >
//                 <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
//                   Booking Details
//                 </span>
//               </div>

//               <div className="p-8">
//                 {/* Row 1 */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <User size={11} className="inline mr-1.5" />Full Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Alessandro Ferrante"
//                       value={form.name}
//                       onChange={(e) => set("name", e.target.value)}
//                       style={inputStyle("name")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.name ? "#c0392b" : "rgba(201,169,110,0.2)")}
//                     />
//                     {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
//                   </div>
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <Mail size={11} className="inline mr-1.5" />Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="you@example.com"
//                       value={form.email}
//                       onChange={(e) => set("email", e.target.value)}
//                       style={inputStyle("email")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.email ? "#c0392b" : "rgba(201,169,110,0.2)")}
//                     />
//                     {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
//                   </div>
//                 </div>

//                 {/* Row 2 */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <Phone size={11} className="inline mr-1.5" />Phone
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="+44 7700 900000"
//                       value={form.phone}
//                       onChange={(e) => set("phone", e.target.value)}
//                       style={inputStyle("phone")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#c0392b" : "rgba(201,169,110,0.2)")}
//                     />
//                     {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
//                   </div>
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <Users size={11} className="inline mr-1.5" />Guests
//                     </label>
//                     <select
//                       value={form.guests}
//                       onChange={(e) => set("guests", e.target.value)}
//                       style={{ ...inputStyle("guests"), cursor: "pointer" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.guests ? "#c0392b" : "rgba(201,169,110,0.2)")}
//                     >
//                       <option value="" style={{ background: "#1c1a14" }}>Select guests</option>
//                       {[1,2,3,4,5,6,7,8].map(n => (
//                         <option key={n} value={n} style={{ background: "#1c1a14" }}>{n} {n === 1 ? "Guest" : "Guests"}</option>
//                       ))}
//                       <option value="9+" style={{ background: "#1c1a14" }}>9+ Guests (Private Dining)</option>
//                     </select>
//                     {errors.guests && <span className="text-[10px] text-red-400 mt-1 block">{errors.guests}</span>}
//                   </div>
//                 </div>

//                 {/* Row 3 */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <Calendar size={11} className="inline mr-1.5" />Date
//                     </label>
//                     <input
//                       type="date"
//                       min={minDate}
//                       value={form.date}
//                       onChange={(e) => { set("date", e.target.value); set("time", ""); }}
//                       style={{ ...inputStyle("date"), colorScheme: "dark" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.date ? "#c0392b" : "rgba(201,169,110,0.2)")}
//                     />
//                     {errors.date && <span className="text-[10px] text-red-400 mt-1 block">{errors.date}</span>}
//                   </div>
//                   <div>
//                     <label className="text-[10px] tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>
//                       <Calendar size={11} className="inline mr-1.5" />Occasion (optional)
//                     </label>
//                     <select
//                       value={form.occasion}
//                       onChange={(e) => set("occasion", e.target.value)}
//                       style={{ ...inputStyle("occasion"), cursor: "pointer" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
//                     >
//                       <option value="" style={{ background: "#1c1a14" }}>No special occasion</option>
//                       {["Anniversary", "Birthday", "Proposal", "Business Dinner", "Celebration"].map(o => (
//                         <option key={o} value={o} style={{ background: "#1c1a14" }}>{o}</option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>

//                 {/* Time Slots */}
//                 <div className="mb-8">
//                   <label className="text-[10px] tracking-[0.15em] uppercase block mb-4 flex items-center gap-2" style={{ color: "var(--ivory-faint)" }}>
//                     <Clock size={11} />Available Times
//                     {errors.time && <span className="text-red-400 normal-case tracking-normal">{errors.time}</span>}
//                   </label>

//                   {/* Lunch */}
//                   <div className="mb-4">
//                     <span className="text-[9px] tracking-[0.2em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>Lunch</span>
//                     <div className="flex flex-wrap gap-2">
//                       {timeSlots.lunch.map((slot) => {
//                         const taken = takenSlots.includes(slot);
//                         return (
//                           <button
//                             key={slot}
//                             disabled={taken}
//                             onClick={() => !taken && set("time", slot)}
//                             className="px-4 py-2 text-[11px] tracking-wide transition-all duration-200"
//                             style={{
//                               border: `1px solid ${form.time === slot ? "var(--gold)" : "rgba(201,169,110,0.2)"}`,
//                               background: form.time === slot ? "var(--gold)" : taken ? "rgba(242,237,228,0.03)" : "transparent",
//                               color: form.time === slot ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
//                               cursor: taken ? "not-allowed" : "pointer",
//                               textDecoration: taken ? "line-through" : "none",
//                             }}
//                           >
//                             {slot}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Dinner */}
//                   <div>
//                     <span className="text-[9px] tracking-[0.2em] uppercase block mb-2" style={{ color: "var(--ivory-faint)" }}>Dinner</span>
//                     <div className="flex flex-wrap gap-2">
//                       {timeSlots.dinner.map((slot) => {
//                         const taken = takenSlots.includes(slot);
//                         return (
//                           <button
//                             key={slot}
//                             disabled={taken}
//                             onClick={() => !taken && set("time", slot)}
//                             className="px-4 py-2 text-[11px] tracking-wide transition-all duration-200"
//                             style={{
//                               border: `1px solid ${form.time === slot ? "var(--gold)" : "rgba(201,169,110,0.2)"}`,
//                               background: form.time === slot ? "var(--gold)" : taken ? "rgba(242,237,228,0.03)" : "transparent",
//                               color: form.time === slot ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
//                               cursor: taken ? "not-allowed" : "pointer",
//                               textDecoration: taken ? "line-through" : "none",
//                             }}
//                           >
//                             {slot}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <p className="text-[10px] mt-3" style={{ color: "var(--ivory-faint)" }}>
//                     Crossed-out times are no longer available.
//                   </p>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   onClick={submit}
//                   className="w-full py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300"
//                   style={{ background: "var(--gold)", color: "var(--obsidian)", fontWeight: 500 }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
//                 >
//                   Confirm Reservation
//                 </button>

//                 <p className="text-[11px] text-center mt-4" style={{ color: "var(--ivory-faint)" }}>
//                   A confirmation will be sent to your email. For groups of 9+, our team will contact you within 24 hours.
//                 </p>
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="success"
//               initial={{ opacity: 0, scale: 0.97 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="text-center py-20 px-8"
//               style={{ border: "1px solid rgba(201,169,110,0.2)", background: "var(--charcoal)" }}
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                 className="mb-8"
//               >
//                 <CheckCircle size={52} style={{ color: "var(--gold)", margin: "0 auto" }} />
//               </motion.div>
//               <h3
//                 className="font-display mb-3"
//                 style={{ color: "var(--ivory)", fontWeight: 400, fontSize: "2rem" }}
//               >
//                 You&apos;re Confirmed
//               </h3>
//               <div className="mb-6" style={{ height: "1px", width: "40px", background: "var(--gold)", margin: "0 auto" }} />
//               <p className="text-[14px] leading-relaxed mb-2" style={{ color: "var(--ivory-dim)" }}>
//                 {form.name}, your table is reserved for{" "}
//                 <span style={{ color: "var(--gold)" }}>
//                   {form.guests} {parseInt(form.guests) === 1 ? "guest" : "guests"}
//                 </span>{" "}
//                 at <span style={{ color: "var(--gold)" }}>{form.time}</span> on{" "}
//                 <span style={{ color: "var(--gold)" }}>
//                   {new Date(form.date + "T12:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
//                 </span>.
//               </p>
//               <p className="text-[13px] mt-3" style={{ color: "var(--ivory-faint)" }}>
//                 A confirmation has been sent to {form.email}.
//               </p>
//               <button
//                 onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",guests:"",date:"",time:"",occasion:"" }); setErrors({}); }}
//                 className="mt-10 px-8 py-3 text-[10px] tracking-[0.2em] uppercase border transition-all duration-300"
//                 style={{ borderColor: "rgba(201,169,110,0.3)", color: "var(--gold)" }}
//               >
//                 Make Another Reservation
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { useState, useRef } from "react";
// import { motion, useInView, AnimatePresence } from "framer-motion";
// import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from "lucide-react";

// const timeSlots = {
//   lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
//   dinner: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"],
// };

// const takenSlots = ["12:30 PM", "7:00 PM", "8:00 PM"];

// export default function Reservations() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   const [form, setForm] = useState({
//     name: "", email: "", phone: "", guests: "", date: "", time: "", occasion: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Required";
//     if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
//     if (!form.phone.trim()) e.phone = "Required";
//     if (!form.guests) e.guests = "Required";
//     if (!form.date) e.date = "Required";
//     if (!form.time) e.time = "Please select a time";
//     return e;
//   };

//   const submit = () => {
//     const e = validate();
//     if (Object.keys(e).length) { setErrors(e); return; }
//     setSubmitted(true);
//   };

//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   const minDate = tomorrow.toISOString().split("T")[0];

//   const inputBase = {
//     background: "rgba(242,237,228,0.04)",
//     color: "var(--ivory)",
//     padding: "14px 16px",
//     fontSize: "13px",
//     outline: "none",
//     width: "100%",
//     fontFamily: "inherit",
//     transition: "border-color 0.2s",
//     borderRadius: 0,
//   };

//   const inputStyle = (field) => ({
//     ...inputBase,
//     border: `1px solid ${errors[field] ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)"}`,
//   });

//   const Label = ({ icon: Icon, text }) => (
//     <label style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//       fontSize: "10px",
//       letterSpacing: "0.15em",
//       textTransform: "uppercase",
//       color: "var(--ivory-faint)",
//       marginBottom: "8px",
//     }}>
//       <Icon size={11} style={{ flexShrink: 0, opacity: 0.7 }} />
//       {text}
//     </label>
//   );

//   const Field = ({ children, error }) => (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {children}
//       {error && (
//         <span style={{ fontSize: "10px", color: "rgba(192,57,43,0.9)", marginTop: "4px" }}>
//           {error}
//         </span>
//       )}
//     </div>
//   );

//   return (
//     <section
//       id="reservations"
//       ref={ref}
//       style={{
//         background: "var(--ink)",
//         padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
//       }}
//     >
//       <div style={{ maxWidth: "820px", margin: "0 auto" }}>

//         {/* ── Header ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
//         >
//           <span style={{
//             display: "block",
//             fontSize: "10px",
//             letterSpacing: "0.35em",
//             textTransform: "uppercase",
//             color: "var(--gold)",
//             marginBottom: "1rem",
//           }}>
//             Your Evening Awaits
//           </span>
//           <h2
//             className="font-display"
//             style={{
//               color: "var(--ivory)",
//               fontWeight: 400,
//               fontSize: "clamp(2.5rem, 6vw, 4rem)",
//               lineHeight: 1,
//               marginBottom: "1rem",
//             }}
//           >
//             Reserve a Table
//           </h2>
//           <div style={{
//             width: "40px", height: "1px",
//             background: "var(--gold)",
//             margin: "0 auto 1.25rem",
//             opacity: 0.7,
//           }} />
//           <p style={{ fontSize: "13px", color: "var(--ivory-faint)", letterSpacing: "0.03em" }}>
//             Lunch: Tuesday – Sunday &nbsp;·&nbsp; Dinner: Tuesday – Saturday
//           </p>
//         </motion.div>

//         {/* ── Form / Success ── */}
//         <AnimatePresence mode="wait">
//           {!submitted ? (
//             <motion.div
//               key="form"
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.7, delay: 0.15 }}
//               style={{
//                 border: "1px solid rgba(201,169,110,0.15)",
//                 background: "var(--charcoal)",
//               }}
//             >
//               {/* Form header bar */}
//               <div style={{
//                 padding: "1.1rem 2rem",
//                 borderBottom: "1px solid rgba(201,169,110,0.12)",
//               }}>
//                 <span style={{
//                   fontSize: "10px",
//                   letterSpacing: "0.22em",
//                   textTransform: "uppercase",
//                   color: "var(--gold)",
//                 }}>
//                   Booking Details
//                 </span>
//               </div>

//               <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>

//                 {/* Row 1 — Name + Email */}
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "1rem",
//                   marginBottom: "1rem",
//                 }}>
//                   <Field error={errors.name}>
//                     <Label icon={User} text="Full Name" />
//                     <input
//                       type="text"
//                       placeholder="Alessandro Ferrante"
//                       value={form.name}
//                       onChange={(e) => set("name", e.target.value)}
//                       style={inputStyle("name")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.name ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)")}
//                     />
//                   </Field>
//                   <Field error={errors.email}>
//                     <Label icon={Mail} text="Email Address" />
//                     <input
//                       type="email"
//                       placeholder="you@example.com"
//                       value={form.email}
//                       onChange={(e) => set("email", e.target.value)}
//                       style={inputStyle("email")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.email ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)")}
//                     />
//                   </Field>
//                 </div>

//                 {/* Row 2 — Phone + Guests */}
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "1rem",
//                   marginBottom: "1rem",
//                 }}>
//                   <Field error={errors.phone}>
//                     <Label icon={Phone} text="Phone" />
//                     <input
//                       type="tel"
//                       placeholder="+44 7700 900000"
//                       value={form.phone}
//                       onChange={(e) => set("phone", e.target.value)}
//                       style={inputStyle("phone")}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.phone ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)")}
//                     />
//                   </Field>
//                   <Field error={errors.guests}>
//                     <Label icon={Users} text="Guests" />
//                     <select
//                       value={form.guests}
//                       onChange={(e) => set("guests", e.target.value)}
//                       style={{ ...inputStyle("guests"), cursor: "pointer" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.guests ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)")}
//                     >
//                       <option value="" style={{ background: "#1c1a14" }}>Select guests</option>
//                       {[1,2,3,4,5,6,7,8].map(n => (
//                         <option key={n} value={n} style={{ background: "#1c1a14" }}>
//                           {n} {n === 1 ? "Guest" : "Guests"}
//                         </option>
//                       ))}
//                       <option value="9+" style={{ background: "#1c1a14" }}>9+ Guests (Private Dining)</option>
//                     </select>
//                   </Field>
//                 </div>

//                 {/* Row 3 — Date + Occasion */}
//                 <div style={{
//                   display: "grid",
//                   gridTemplateColumns: "1fr 1fr",
//                   gap: "1rem",
//                   marginBottom: "2rem",
//                 }}>
//                   <Field error={errors.date}>
//                     <Label icon={Calendar} text="Date" />
//                     <input
//                       type="date"
//                       min={minDate}
//                       value={form.date}
//                       onChange={(e) => { set("date", e.target.value); set("time", ""); }}
//                       style={{ ...inputStyle("date"), colorScheme: "dark" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = errors.date ? "rgba(192,57,43,0.8)" : "rgba(201,169,110,0.2)")}
//                     />
//                   </Field>
//                   <Field>
//                     <Label icon={Calendar} text="Occasion (Optional)" />
//                     <select
//                       value={form.occasion}
//                       onChange={(e) => set("occasion", e.target.value)}
//                       style={{ ...inputStyle("occasion"), cursor: "pointer" }}
//                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
//                       onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
//                     >
//                       <option value="" style={{ background: "#1c1a14" }}>No special occasion</option>
//                       {["Anniversary","Birthday","Proposal","Business Dinner","Celebration"].map(o => (
//                         <option key={o} value={o} style={{ background: "#1c1a14" }}>{o}</option>
//                       ))}
//                     </select>
//                   </Field>
//                 </div>

//                 {/* Time Slots */}
//                 <div style={{ marginBottom: "2rem" }}>
//                   <div style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginBottom: "1.25rem",
//                   }}>
//                     <Clock size={11} style={{ color: "var(--ivory-faint)", opacity: 0.7 }} />
//                     <span style={{
//                       fontSize: "10px",
//                       letterSpacing: "0.15em",
//                       textTransform: "uppercase",
//                       color: "var(--ivory-faint)",
//                     }}>
//                       Available Times
//                     </span>
//                     {errors.time && (
//                       <span style={{ fontSize: "10px", color: "rgba(192,57,43,0.9)", marginLeft: "4px" }}>
//                         — {errors.time}
//                       </span>
//                     )}
//                   </div>

//                   {/* Lunch slots */}
//                   <div style={{ marginBottom: "1.25rem" }}>
//                     <span style={{
//                       display: "block",
//                       fontSize: "9px",
//                       letterSpacing: "0.2em",
//                       textTransform: "uppercase",
//                       color: "var(--ivory-faint)",
//                       marginBottom: "0.75rem",
//                       opacity: 0.6,
//                     }}>
//                       Lunch
//                     </span>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//                       {timeSlots.lunch.map((slot) => {
//                         const taken = takenSlots.includes(slot);
//                         const selected = form.time === slot;
//                         return (
//                           <button
//                             key={slot}
//                             disabled={taken}
//                             onClick={() => !taken && set("time", slot)}
//                             style={{
//                               padding: "8px 16px",
//                               fontSize: "11px",
//                               letterSpacing: "0.05em",
//                               border: `1px solid ${selected ? "var(--gold)" : taken ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.25)"}`,
//                               background: selected ? "var(--gold)" : "transparent",
//                               color: selected ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
//                               cursor: taken ? "not-allowed" : "pointer",
//                               textDecoration: taken ? "line-through" : "none",
//                               transition: "all 200ms ease",
//                               fontFamily: "inherit",
//                             }}
//                           >
//                             {slot}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   {/* Dinner slots */}
//                   <div>
//                     <span style={{
//                       display: "block",
//                       fontSize: "9px",
//                       letterSpacing: "0.2em",
//                       textTransform: "uppercase",
//                       color: "var(--ivory-faint)",
//                       marginBottom: "0.75rem",
//                       opacity: 0.6,
//                     }}>
//                       Dinner
//                     </span>
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//                       {timeSlots.dinner.map((slot) => {
//                         const taken = takenSlots.includes(slot);
//                         const selected = form.time === slot;
//                         return (
//                           <button
//                             key={slot}
//                             disabled={taken}
//                             onClick={() => !taken && set("time", slot)}
//                             style={{
//                               padding: "8px 16px",
//                               fontSize: "11px",
//                               letterSpacing: "0.05em",
//                               border: `1px solid ${selected ? "var(--gold)" : taken ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.25)"}`,
//                               background: selected ? "var(--gold)" : "transparent",
//                               color: selected ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
//                               cursor: taken ? "not-allowed" : "pointer",
//                               textDecoration: taken ? "line-through" : "none",
//                               transition: "all 200ms ease",
//                               fontFamily: "inherit",
//                             }}
//                           >
//                             {slot}
//                           </button>
//                         );
//                       })}
//                     </div>
//                   </div>

//                   <p style={{
//                     fontSize: "10px",
//                     color: "var(--ivory-faint)",
//                     marginTop: "0.875rem",
//                     opacity: 0.6,
//                   }}>
//                     Crossed-out times are no longer available.
//                   </p>
//                 </div>

//                 {/* Submit button */}
//                 <button
//                   onClick={submit}
//                   style={{
//                     width: "100%",
//                     padding: "16px",
//                     fontSize: "11px",
//                     letterSpacing: "0.28em",
//                     textTransform: "uppercase",
//                     fontWeight: 500,
//                     background: "var(--gold)",
//                     color: "var(--obsidian)",
//                     border: "none",
//                     cursor: "pointer",
//                     fontFamily: "inherit",
//                     transition: "background 300ms ease",
//                     marginBottom: "1rem",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
//                 >
//                   Confirm Reservation
//                 </button>

//                 <p style={{
//                   fontSize: "11px",
//                   textAlign: "center",
//                   color: "var(--ivory-faint)",
//                   lineHeight: 1.7,
//                   opacity: 0.7,
//                 }}>
//                   A confirmation will be sent to your email. For groups of 9+, our team will contact you within 24 hours.
//                 </p>
//               </div>
//             </motion.div>

//           ) : (

//             /* ── Success state ── */
//             <motion.div
//               key="success"
//               initial={{ opacity: 0, scale: 0.97 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               style={{
//                 textAlign: "center",
//                 padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)",
//                 border: "1px solid rgba(201,169,110,0.2)",
//                 background: "var(--charcoal)",
//               }}
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
//                 style={{ marginBottom: "1.75rem" }}
//               >
//                 <CheckCircle size={52} style={{ color: "var(--gold)", margin: "0 auto" }} />
//               </motion.div>

//               <h3
//                 className="font-display"
//                 style={{
//                   color: "var(--ivory)",
//                   fontWeight: 400,
//                   fontSize: "2rem",
//                   marginBottom: "1.25rem",
//                 }}
//               >
//                 You&apos;re Confirmed
//               </h3>

//               <div style={{
//                 height: "1px",
//                 width: "40px",
//                 background: "var(--gold)",
//                 margin: "0 auto 1.5rem",
//                 opacity: 0.7,
//               }} />

//               <p style={{
//                 fontSize: "14px",
//                 lineHeight: 1.8,
//                 color: "var(--ivory-dim)",
//                 marginBottom: "0.75rem",
//               }}>
//                 {form.name}, your table is reserved for{" "}
//                 <span style={{ color: "var(--gold)" }}>
//                   {form.guests} {parseInt(form.guests) === 1 ? "guest" : "guests"}
//                 </span>{" "}
//                 at <span style={{ color: "var(--gold)" }}>{form.time}</span> on{" "}
//                 <span style={{ color: "var(--gold)" }}>
//                   {new Date(form.date + "T12:00:00").toLocaleDateString("en-GB", {
//                     weekday: "long", day: "numeric", month: "long", year: "numeric"
//                   })}
//                 </span>.
//               </p>

//               <p style={{ fontSize: "12px", color: "var(--ivory-faint)" }}>
//                 A confirmation has been sent to {form.email}.
//               </p>

//               <button
//                 onClick={() => {
//                   setSubmitted(false);
//                   setForm({ name:"",email:"",phone:"",guests:"",date:"",time:"",occasion:"" });
//                   setErrors({});
//                 }}
//                 style={{
//                   marginTop: "2.5rem",
//                   padding: "12px 2rem",
//                   fontSize: "10px",
//                   letterSpacing: "0.2em",
//                   textTransform: "uppercase",
//                   border: "1px solid rgba(201,169,110,0.3)",
//                   color: "var(--gold)",
//                   background: "transparent",
//                   cursor: "pointer",
//                   fontFamily: "inherit",
//                   transition: "all 300ms ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "var(--gold)";
//                   e.currentTarget.style.color = "var(--obsidian)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "transparent";
//                   e.currentTarget.style.color = "var(--gold)";
//                 }}
//               >
//                 Make Another Reservation
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Mobile: stack grid to single column */}
//       <style>{`
//         @media (max-width: 639px) {
//           #reservations [style*="gridTemplateColumns: 1fr 1fr"] {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from "lucide-react";

const timeSlots = {
  lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"],
  dinner: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"],
};

const takenSlots = ["12:30 PM", "7:00 PM", "8:00 PM"];

const Label = ({ icon: Icon, text }) => (
    <label style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "10px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--ivory-faint)",
      marginBottom: "8px",
    }}>
      <Icon size={11} style={{ flexShrink: 0, opacity: 0.7 }} />
      {text}
    </label>
  );

    const Field = ({ children, error }) => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {children}
      {error && (
        <span style={{ fontSize: "10px", color: "rgba(192,57,43,0.9)", marginTop: "4px" }}>
          {error}
        </span>
      )}
    </div>
  );

export default function Reservations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "", email: "", phone: "", guests: "", date: "", time: "", occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.match(/^[^@]+@[^@]+\.[^@]+$/)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.guests) e.guests = "Required";
    if (!form.date) e.date = "Required";
    if (!form.time) e.time = "Please select a time";
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Static style object — never recreated on render, fixes focus-loss bug
  const inputBase = {
    background: "rgba(242,237,228,0.04)",
    color: "var(--ivory)",
    padding: "14px 16px",
    fontSize: "13px",
    outline: "none",
    width: "100%",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
    borderRadius: 0,
    border: "1px solid rgba(201,169,110,0.2)",
  };

  // Border color is handled entirely via onFocus/onBlur DOM manipulation
  // NOT via state-derived style — avoids re-render on every keystroke
  const inputStyle = inputBase;

  



  return (
    <section
      id="reservations"
      ref={ref}
      style={{
        background: "var(--ink)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

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
            Your Evening Awaits
          </span>
          <h2
            className="font-display"
            style={{
              color: "var(--ivory)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Reserve a Table
          </h2>
          <div style={{
            width: "40px", height: "1px",
            background: "var(--gold)",
            margin: "0 auto 1.25rem",
            opacity: 0.7,
          }} />
          <p style={{ fontSize: "13px", color: "var(--ivory-faint)", letterSpacing: "0.03em" }}>
            Lunch: Tuesday – Sunday &nbsp;·&nbsp; Dinner: Tuesday – Saturday
          </p>
        </motion.div>

        {/* ── Form / Success ── */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                border: "1px solid rgba(201,169,110,0.15)",
                background: "var(--charcoal)",
              }}
            >
              {/* Form header bar */}
              <div style={{
                padding: "1.1rem 2rem",
                borderBottom: "1px solid rgba(201,169,110,0.12)",
              }}>
                <span style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}>
                  Booking Details
                </span>
              </div>

              <div style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>

                {/* Row 1 — Name + Email */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}>
                  <Field error={errors.name}>
                    <Label icon={User} text="Full Name" />
                    <input
                      type="text"
                      placeholder="Alessandro Ferrante"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    />
                  </Field>
                  <Field error={errors.email}>
                    <Label icon={Mail} text="Email Address" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    />
                  </Field>
                </div>

                {/* Row 2 — Phone + Guests */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}>
                  <Field error={errors.phone}>
                    <Label icon={Phone} text="Phone" />
                    <input
                      type="tel"
                      placeholder="+44 7700 900000"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    />
                  </Field>
                  <Field error={errors.guests}>
                    <Label icon={Users} text="Guests" />
                    <select
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    >
                      <option value="" style={{ background: "#1c1a14" }}>Select guests</option>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n} style={{ background: "#1c1a14" }}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="9+" style={{ background: "#1c1a14" }}>9+ Guests (Private Dining)</option>
                    </select>
                  </Field>
                </div>

                {/* Row 3 — Date + Occasion */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}>
                  <Field error={errors.date}>
                    <Label icon={Calendar} text="Date" />
                    <input
                      type="date"
                      min={minDate}
                      value={form.date}
                      onChange={(e) => { set("date", e.target.value); set("time", ""); }}
                      style={{ ...inputStyle, colorScheme: "dark" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    />
                  </Field>
                  <Field>
                    <Label icon={Calendar} text="Occasion (Optional)" />
                    <select
                      value={form.occasion}
                      onChange={(e) => set("occasion", e.target.value)}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(201,169,110,0.2)")}
                    >
                      <option value="" style={{ background: "#1c1a14" }}>No special occasion</option>
                      {["Anniversary","Birthday","Proposal","Business Dinner","Celebration"].map(o => (
                        <option key={o} value={o} style={{ background: "#1c1a14" }}>{o}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Time Slots */}
                <div style={{ marginBottom: "2rem" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "1.25rem",
                  }}>
                    <Clock size={11} style={{ color: "var(--ivory-faint)", opacity: 0.7 }} />
                    <span style={{
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--ivory-faint)",
                    }}>
                      Available Times
                    </span>
                    {errors.time && (
                      <span style={{ fontSize: "10px", color: "rgba(192,57,43,0.9)", marginLeft: "4px" }}>
                        — {errors.time}
                      </span>
                    )}
                  </div>

                  {/* Lunch slots */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span style={{
                      display: "block",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ivory-faint)",
                      marginBottom: "0.75rem",
                      opacity: 0.6,
                    }}>
                      Lunch
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {timeSlots.lunch.map((slot) => {
                        const taken = takenSlots.includes(slot);
                        const selected = form.time === slot;
                        return (
                          <button
                            key={slot}
                            disabled={taken}
                            onClick={() => !taken && set("time", slot)}
                            style={{
                              padding: "8px 16px",
                              fontSize: "11px",
                              letterSpacing: "0.05em",
                              border: `1px solid ${selected ? "var(--gold)" : taken ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.25)"}`,
                              background: selected ? "var(--gold)" : "transparent",
                              color: selected ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
                              cursor: taken ? "not-allowed" : "pointer",
                              textDecoration: taken ? "line-through" : "none",
                              transition: "all 200ms ease",
                              fontFamily: "inherit",
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Dinner slots */}
                  <div>
                    <span style={{
                      display: "block",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--ivory-faint)",
                      marginBottom: "0.75rem",
                      opacity: 0.6,
                    }}>
                      Dinner
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {timeSlots.dinner.map((slot) => {
                        const taken = takenSlots.includes(slot);
                        const selected = form.time === slot;
                        return (
                          <button
                            key={slot}
                            disabled={taken}
                            onClick={() => !taken && set("time", slot)}
                            style={{
                              padding: "8px 16px",
                              fontSize: "11px",
                              letterSpacing: "0.05em",
                              border: `1px solid ${selected ? "var(--gold)" : taken ? "rgba(201,169,110,0.1)" : "rgba(201,169,110,0.25)"}`,
                              background: selected ? "var(--gold)" : "transparent",
                              color: selected ? "var(--obsidian)" : taken ? "rgba(242,237,228,0.2)" : "var(--ivory-dim)",
                              cursor: taken ? "not-allowed" : "pointer",
                              textDecoration: taken ? "line-through" : "none",
                              transition: "all 200ms ease",
                              fontFamily: "inherit",
                            }}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <p style={{
                    fontSize: "10px",
                    color: "var(--ivory-faint)",
                    marginTop: "0.875rem",
                    opacity: 0.6,
                  }}>
                    Crossed-out times are no longer available.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  onClick={submit}
                  style={{
                    width: "100%",
                    padding: "16px",
                    fontSize: "11px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    background: "var(--gold)",
                    color: "var(--obsidian)",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "background 300ms ease",
                    marginBottom: "1rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
                >
                  Confirm Reservation
                </button>

                <p style={{
                  fontSize: "11px",
                  textAlign: "center",
                  color: "var(--ivory-faint)",
                  lineHeight: 1.7,
                  opacity: 0.7,
                }}>
                  A confirmation will be sent to your email. For groups of 9+, our team will contact you within 24 hours.
                </p>
              </div>
            </motion.div>

          ) : (

            /* ── Success state ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: "center",
                padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)",
                border: "1px solid rgba(201,169,110,0.2)",
                background: "var(--charcoal)",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                style={{ marginBottom: "1.75rem" }}
              >
                <CheckCircle size={52} style={{ color: "var(--gold)", margin: "0 auto" }} />
              </motion.div>

              <h3
                className="font-display"
                style={{
                  color: "var(--ivory)",
                  fontWeight: 400,
                  fontSize: "2rem",
                  marginBottom: "1.25rem",
                }}
              >
                You&apos;re Confirmed
              </h3>

              <div style={{
                height: "1px",
                width: "40px",
                background: "var(--gold)",
                margin: "0 auto 1.5rem",
                opacity: 0.7,
              }} />

              <p style={{
                fontSize: "14px",
                lineHeight: 1.8,
                color: "var(--ivory-dim)",
                marginBottom: "0.75rem",
              }}>
                {form.name}, your table is reserved for{" "}
                <span style={{ color: "var(--gold)" }}>
                  {form.guests} {parseInt(form.guests) === 1 ? "guest" : "guests"}
                </span>{" "}
                at <span style={{ color: "var(--gold)" }}>{form.time}</span> on{" "}
                <span style={{ color: "var(--gold)" }}>
                  {new Date(form.date + "T12:00:00").toLocaleDateString("en-GB", {
                    weekday: "long", day: "numeric", month: "long", year: "numeric"
                  })}
                </span>.
              </p>

              <p style={{ fontSize: "12px", color: "var(--ivory-faint)" }}>
                A confirmation has been sent to {form.email}.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name:"",email:"",phone:"",guests:"",date:"",time:"",occasion:"" });
                  setErrors({});
                }}
                style={{
                  marginTop: "2.5rem",
                  padding: "12px 2rem",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: "var(--gold)",
                  background: "transparent",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "var(--obsidian)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--gold)";
                }}
              >
                Make Another Reservation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: stack grid to single column */}
      <style>{`
        @media (max-width: 639px) {
          #reservations [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}