import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vithtsgezrgobdyloldb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGh0c2dlenJnb2JkeWxvbGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTUzMzAsImV4cCI6MjA1NTUzMTMzMH0.NbKShjJ6vuO_1kaZ2nOYa1t1R3dUeN5msPpqKe2vRSE"
);

const IMAGES = {
  "form-hero": "/awurudu/form-hero.png",
  greeting: "/awurudu/greeting-couple.png",
  stupa: "/awurudu/stupa.png",
  "lamp-family": "/awurudu/lamp-family.png",
  blessing: "/awurudu/blessing.png",
  planting: "/awurudu/planting.png",
};

function FloatingPetals() {
  const petals = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${10 + Math.random() * 6}s`,
    size: `${10 + Math.random() * 8}px`,
    color: ["#d4a437", "#b7812d", "#c96f3b", "#e5c97a"][i % 4],
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            position: "absolute",
            left: petal.left,
            top: "-20px",
            width: petal.size,
            height: petal.size,
            borderRadius: "50% 0 50% 0",
            background: petal.color,
            opacity: 0.22,
            animation: `petalFall ${petal.duration} ${petal.delay} linear infinite`,
          }}
        />
      ))}

      <style>{`
        @keyframes petalFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.22; }
          100% { transform: translateY(110vh) rotate(540deg); opacity: 0; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes softGlow {
          0%, 100% { box-shadow: 0 12px 35px rgba(160, 124, 39, 0.10); }
          50%      { box-shadow: 0 16px 40px rgba(160, 124, 39, 0.16); }
        }
      `}</style>
    </div>
  );
}

function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-12 bg-[#d8c39a]" />
      <span className="text-[#b2873b] text-lg">✦</span>
      <span className="h-px w-12 bg-[#d8c39a]" />
    </div>
  );
}

function SlideImage({ src, alt }) {
  return (
    <div
      className="relative rounded-[24px] overflow-hidden"
      style={{
        minHeight: 220,
        border: "1px solid rgba(185, 144, 66, 0.22)",
        background: "linear-gradient(180deg, #fffdf7 0%, #f7f1e4 100%)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ maxHeight: 310 }}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />

      <div
        className="absolute inset-0 items-center justify-center flex-col gap-2 text-center p-6"
        style={{ display: "none" }}
      >
        <div style={{ fontSize: 46 }}>🪔</div>
        <p style={{ color: "#8f6d2f", fontSize: 13 }}>{alt}</p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background:
            "linear-gradient(to top, rgba(73, 45, 9, 0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
}

const SLIDES = [
  {
    id: 0,
    type: "form",
    label: "පෝරමය",
    title: "සිංහල අවුරුදු 2026",
    sub: "ඔබගේ තොරතුරු යොමු කරන්න",
    image: "form-hero",
    pills: [
      "නව සඳ",
      "ස්නානය",
      "උදාව",
      "පුණ්‍ය කාලය",
      "ආහාර",
      "හිසතෙල්",
      "ගමන",
      "පැළ",
    ],
  },
  {
    id: 1,
    type: "content",
    label: "01",
    title: "සිංහල අවුරුදු චාරිත්‍ර",
    sub: "මුල් චාරිත්‍ර හා උදාව",
    image: "greeting",
    items: [
      { h: "නව සඳ බැලීම", t: "මාර්තු 20 (සිකු) සහ අප්‍රේල් 19 (ඉරි) නව සඳ බැලීම." },
      { h: "ස්නානය", t: "අප්‍රේල් 13 (සඳු) දිවුල් යුෂ මිශ්‍ර නානු ගා ස්නානය." },
      { h: "අලුත් අවුරුද්ද", t: "අප්‍රේල් 14 (අඟ) පූ.භා. 09:32 ට සිංහල අලුත් අවුරුද්ද." },
    ],
  },
  {
    id: 2,
    type: "content",
    label: "02",
    title: "පුණ්‍ය කාලය",
    sub: "ආගමික වතාවත්",
    image: "stupa",
    items: [
      { h: "පුණ්‍ය කාලය", t: "අප්‍රේල් 14 පූ.භා. 03:08 සිට අ.භා. 03:56 දක්වා ආගමික කටයුතු." },
    ],
  },
  {
    id: 3,
    type: "content",
    label: "03",
    title: "ආහාර පිසීම",
    sub: "නැකත් අනුව",
    image: "lamp-family",
    items: [
      { h: "ආහාර පිසීම", t: "අප්‍රේල් 14 පූ.භා. 10:41 — රක්ත වස්ත්‍ර, දකුණ, කිරිබත්." },
      { h: "ආහාර ගැනීම", t: "අප්‍රේල් 14 අ.භා. 12:05 — දකුණ බලා සියලු ගනුදෙනු." },
    ],
  },
  {
    id: 4,
    type: "content",
    label: "04",
    title: "හිසතෙල් ගෑම",
    sub: "සුභ ගමන",
    image: "blessing",
    items: [
      { h: "හිසතෙල් ගෑම", t: "අප්‍රේල් 15 පූ.භා. 06:54 — නැගෙනහිර, කොහොඹ, පච්ච වස්ත්‍ර." },
      { h: "රැකී රක්ෂා ගමන", t: "අප්‍රේල් 20 පූ.භා. 06:27 — ශ්වේත වස්ත්‍ර, දකුණ." },
    ],
  },
  {
    id: 5,
    type: "content",
    label: "05",
    title: "පැළ සිටුවීම",
    sub: "නව ආරම්භය",
    image: "planting",
    items: [
      { h: "පැළ සිටුවීම", t: "අප්‍රේල් 23 (බ්‍රහ) පූ.භා. 11:36 — රන්වන් වස්ත්‍ර, උතුර." },
    ],
  },
];

export default function AwuruduFormClassicWhite() {
  const [slide, setSlide] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const contentRef = useRef(null);

  const current = SLIDES[slide];
  const total = SLIDES.length;

  const goTo = (index) => {
    setAnimKey((k) => k + 1);
    setSlide(index);
  };

  const prev = () => goTo((slide - 1 + total) % total);
  const next = () => goTo((slide + 1) % total);

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.phone) {
      alert("කරුණාකර සියලු අවශ්‍ය තොරතුරු පුරවන්න.");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          looking_to: "සිංහල අවුරුදු චාරිත්‍ර 2026",
          contact_method: form.contactMethod || null,
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setForm({ fullName: "", email: "", phone: "", contactMethod: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, #fffefb 0%, #fbf6ea 45%, #f5ecda 100%)",
        fontFamily: "'Noto Serif Sinhala', 'Noto Sans Sinhala', serif",
        color: "#4b3720",
      }}
    >
      <FloatingPetals />

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, rgba(212,164,55,0.10), transparent 25%), radial-gradient(circle at bottom right, rgba(183,129,45,0.10), transparent 22%)",
        }}
      />

      <header className="relative z-10 text-center px-4 pt-12 pb-8">
        <div className="flex justify-center gap-5 mb-4">
          {[0, 1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center">
              <div className="w-px h-4 bg-[#d9c59b]" />
              <div
                className="w-5 h-8 rounded-t-sm rounded-b-2xl"
                style={{
                  background: "linear-gradient(180deg, #d8b152 0%, #b5802f 100%)",
                  boxShadow: "0 6px 14px rgba(181, 128, 47, 0.18)",
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.22em] mb-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(184, 138, 52, 0.25)",
            color: "#9f7427",
            boxShadow: "0 10px 25px rgba(167, 125, 45, 0.08)",
          }}
        >
          <span className="text-sm">✦</span>
          SINHALA ALUTH AWURUDU 2026
        </div>

        <h1
          className="text-4xl sm:text-5xl font-bold mb-2"
          style={{
            color: "#8f6b2c",
            lineHeight: 1.2,
            letterSpacing: "0.02em",
          }}
        >
          සුභ අලුත් අවුරුද්දක් වේවා!
        </h1>

        <p className="text-sm tracking-[0.24em] uppercase text-[#9c8560]">
          April 14 · 09:32 AM · Auspicious Time
        </p>

        <OrnamentalDivider />
      </header>

      <main className="relative z-10 max-w-md mx-auto px-4 pb-16">
        <div
          className="rounded-[30px] overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.88)",
            border: "1px solid rgba(191, 154, 78, 0.22)",
            boxShadow: "0 20px 60px rgba(117, 87, 33, 0.12)",
            animation: "softGlow 4s ease-in-out infinite",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="px-6 pt-6 pb-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(243,229,193,0.65) 0%, rgba(255,255,255,0.88) 100%)",
              borderBottom: "1px solid rgba(191, 154, 78, 0.16)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-xs px-3 py-1 rounded-full tracking-[0.15em]"
                style={{
                  background: "#fcf6e7",
                  border: "1px solid rgba(184, 138, 52, 0.24)",
                  color: "#a27428",
                }}
              >
                {current.type === "form" ? "පෝරමය" : `Slide ${current.label}`}
              </span>

              <span className="text-xs text-[#9f8a67]">
                {slide + 1} / {total}
              </span>
            </div>

            <h2 className="text-[22px] font-semibold text-[#6f5325] leading-snug">
              {current.title}
            </h2>
            <p className="text-sm mt-1 text-[#8e7958]">{current.sub}</p>
          </div>

          <div className="px-6 pt-5">
            <SlideImage src={IMAGES[current.image]} alt={current.title} />
          </div>

          <div
            key={animKey}
            ref={contentRef}
            className="px-6 pt-5 pb-6"
            style={{ animation: "fadeInUp 0.35s ease both" }}
          >
            {current.type === "form" ? (
              <FormSlide
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                status={status}
                pills={current.pills}
              />
            ) : (
              <ContentSlide items={current.items} />
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            onClick={prev}
            className="flex-1 py-3 rounded-2xl text-sm font-medium transition-all active:scale-95"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(184, 138, 52, 0.18)",
              color: "#8c6a2c",
              boxShadow: "0 8px 20px rgba(160, 124, 39, 0.06)",
            }}
          >
            ← පෙර
          </button>

          <div className="flex items-center gap-1.5">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  height: 8,
                  width: slide === index ? 24 : 8,
                  background: slide === index ? "#b88937" : "#e4d7ba",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex-1 py-3 rounded-2xl text-sm font-medium transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #d8b152 0%, #b7802e 100%)",
              border: "1px solid rgba(161, 113, 29, 0.25)",
              color: "#fffdf6",
              boxShadow: "0 10px 24px rgba(167, 125, 45, 0.18)",
            }}
          >
            ඊළඟ →
          </button>
        </div>
      </main>
    </div>
  );
}

function FormSlide({ form, onChange, onSubmit, submitting, status, pills }) {
  const inputStyle = {
    width: "100%",
    background: "#fffdf8",
    border: "1px solid rgba(184, 138, 52, 0.18)",
    borderRadius: 16,
    padding: "14px 16px",
    fontSize: 15,
    color: "#4b3720",
    outline: "none",
    fontFamily: "inherit",
    marginBottom: 14,
    transition: "all 0.2s ease",
    boxShadow: "inset 0 1px 2px rgba(117, 87, 33, 0.03)",
  };

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 7,
    color: "#8d6a2a",
    letterSpacing: "0.05em",
  };

  const CONTACTS = [
    { label: "දුරකථන", value: "Phone" },
    { label: "Email", value: "Email" },
    { label: "WhatsApp", value: "WhatsApp" },
  ];

  return (
    <div>
      {status === "success" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm mb-4"
          style={{
            background: "#eef8ee",
            border: "1px solid #b9d8b9",
            color: "#336b38",
          }}
        >
          ✓ ඔබගේ තොරතුරු සාර්ථකව සුරකින ලදී. ස්තූතියි!
        </div>
      )}

      {status === "error" && (
        <div
          className="rounded-2xl px-4 py-3 text-sm mb-4"
          style={{
            background: "#fff1ef",
            border: "1px solid #efc2bc",
            color: "#b54d42",
          }}
        >
          ✗ දෝෂයක් ඇතිවිය. නැවත උත්සාහ කරන්න.
        </div>
      )}

      <label style={labelStyle}>
        සම්පූර්ණ නම <span style={{ color: "#c26357" }}>*</span>
      </label>
      <input
        name="fullName"
        value={form.fullName}
        onChange={onChange}
        placeholder="ඔබගේ නම"
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = "#c79a45";
          e.target.style.boxShadow = "0 0 0 4px rgba(199, 154, 69, 0.10)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(184, 138, 52, 0.18)";
          e.target.style.boxShadow = "inset 0 1px 2px rgba(117, 87, 33, 0.03)";
        }}
      />

      <label style={labelStyle}>
        විද්‍යුත් තැපෑල <span style={{ color: "#c26357" }}>*</span>
      </label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={onChange}
        placeholder="example@email.com"
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = "#c79a45";
          e.target.style.boxShadow = "0 0 0 4px rgba(199, 154, 69, 0.10)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(184, 138, 52, 0.18)";
          e.target.style.boxShadow = "inset 0 1px 2px rgba(117, 87, 33, 0.03)";
        }}
      />

      <label style={labelStyle}>
        දුරකථන අංකය <span style={{ color: "#c26357" }}>*</span>
      </label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={onChange}
        placeholder="07X XXX XXXX"
        style={inputStyle}
        onFocus={(e) => {
          e.target.style.borderColor = "#c79a45";
          e.target.style.boxShadow = "0 0 0 4px rgba(199, 154, 69, 0.10)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(184, 138, 52, 0.18)";
          e.target.style.boxShadow = "inset 0 1px 2px rgba(117, 87, 33, 0.03)";
        }}
      />

      <label style={{ ...labelStyle, marginBottom: 10 }}>කැමති සම්බන්ධතා ක්‍රමය</label>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {CONTACTS.map((contact) => (
          <button
            key={contact.value}
            onClick={() => onChange({ target: { name: "contactMethod", value: contact.value } })}
            className="py-3 rounded-2xl text-xs font-medium transition-all active:scale-95"
            style={{
              background:
                form.contactMethod === contact.value ? "#fff4dd" : "rgba(255,255,255,0.72)",
              border:
                form.contactMethod === contact.value
                  ? "1px solid #c79a45"
                  : "1px solid rgba(184, 138, 52, 0.16)",
              color: form.contactMethod === contact.value ? "#8b6426" : "#8f7a58",
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            {contact.label}
          </button>
        ))}
      </div>

      <button
        onClick={onSubmit}
        disabled={submitting}
        className="w-full py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] disabled:opacity-50"
        style={{
          background: "linear-gradient(135deg, #d8b152 0%, #b7802e 100%)",
          border: "none",
          color: "#fffdf8",
          fontFamily: "inherit",
          cursor: submitting ? "not-allowed" : "pointer",
          fontSize: 16,
          letterSpacing: "0.02em",
          boxShadow: "0 12px 26px rgba(167, 125, 45, 0.18)",
        }}
      >
        {submitting ? "සුරකිමින්..." : "තොරතුරු යොමු කරන්න →"}
      </button>

      <div className="flex flex-wrap gap-2 mt-5">
        {pills.map((pill) => (
          <span
            key={pill}
            className="text-xs px-3 py-1.5 rounded-full"
            style={{
              background: "#fffaf0",
              border: "1px solid rgba(184, 138, 52, 0.14)",
              color: "#9d7936",
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContentSlide({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl px-4 py-4"
          style={{
            background: "#fffdf8",
            border: "1px solid rgba(184, 138, 52, 0.16)",
            boxShadow: "0 8px 22px rgba(117, 87, 33, 0.05)",
            animation: `fadeInUp 0.35s ${index * 0.08}s ease both`,
          }}
        >
          <h3 className="font-semibold text-base mb-2 text-[#8a6627]">{item.h}</h3>
          <p className="text-sm leading-relaxed text-[#79664a]">{item.t}</p>
        </div>
      ))}
    </div>
  );
}
