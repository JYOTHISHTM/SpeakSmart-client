import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const features = [
  {
    id: "fill-blanks",
    icon: "✏️",
    tag: "Interactive",
    title: "Fill in the Blanks",
    desc: "Context-aware sentence completion that trains grammar intuition through real-world examples.",
    example: {
      sentence: ["She ", " to the market every Sunday ", " buy fresh vegetables."],
      blanks: ["goes", "to"],
      hint: "Present simple + infinitive",
    },
    color: "#4F46E5",
    bg: "#EEF2FF",
  },
  {
    id: "word-day",
    icon: "💡",
    tag: "Daily",
    title: "Word of the Day",
    desc: "Expand your vocabulary with curated words, pronunciations, and real usage examples.",
    example: {
      word: "Eloquent",
      phonetic: "/ˈɛl.ə.kwənt/",
      meaning: "Fluent or persuasive in speaking or writing.",
      sentence: "Her eloquent speech moved the entire audience.",
    },
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    id: "grammar",
    icon: "📖",
    tag: "Structured",
    title: "Grammar Lessons",
    desc: "Step-by-step lessons covering tenses, articles, prepositions, and complex structures.",
    example: {
      lesson: "Present Perfect vs Simple Past",
      rule: "Use Present Perfect for experiences; Simple Past for specific times.",
      correct: "I have visited Paris.",
      wrong: "I have visited Paris yesterday.",
    },
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    id: "ai-coach",
    icon: "🤖",
    tag: "AI Powered",
    title: "AI Communication Coach",
    desc: "Get personalised feedback on your writing, tone, and clarity from your AI mentor.",
    example: {
      input: "I am very much interested to apply for this position.",
      suggestion: "I am very interested in applying for this position.",
      tip: "Use 'interested in' not 'interested to' with gerunds.",
    },
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    id: "roleplay",
    icon: "🎭",
    tag: "Immersive",
    title: "Role Play Scenarios",
    desc: "Practice real conversations — job interviews, travel, business emails — with AI characters.",
    example: {
      scene: "Job Interview",
      prompt: "Tell me about your greatest weakness.",
      tip: "Use the 'weakness + improvement' formula",
    },
    color: "#DC2626",
    bg: "#FEF2F2",
  },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "200+", label: "Grammar Lessons" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "12+", label: "Role-play Scenes" },
];

const testimonials = [
  {
    name: "Aisha Nair",
    location: "Kochi, India",
    initials: "AN",
    color: "#4F46E5",
    text: "The AI coach caught patterns in my writing I didn't even notice. My emails sound so much more professional now.",
    stars: 5,
  },
  {
    name: "Carlos Mendez",
    location: "Mexico City",
    initials: "CM",
    color: "#059669",
    text: "Role-play scenarios helped me nail my job interview in English. I got the job!",
    stars: 5,
  },
  {
    name: "Yuki Tanaka",
    location: "Osaka, Japan",
    initials: "YT",
    color: "#D97706",
    text: "Word of the Day + grammar lessons together — I learned more in 2 weeks than in months of classes.",
    stars: 5,
  },
];

function FillBlanksDemo() {
  const [answers, setAnswers] = useState(["", ""]);
  const [checked, setChecked] = useState(false);
  const correct = ["goes", "to"];

  const handleCheck = () => setChecked(true);
  const handleReset = () => { setAnswers(["", ""]); setChecked(false); };

  return (
    <div style={{ padding: "1.25rem", fontFamily: "'DM Sans', sans-serif" }}>
      <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 12, fontWeight: 500 }}>
        HINT: Present simple + infinitive
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 6, fontSize: 16, color: "#111827", marginBottom: 16 }}>
        <span>She</span>
        <input
          value={answers[0]}
          onChange={e => setAnswers([e.target.value, answers[1]])}
          placeholder="verb"
          disabled={checked}
          style={{
            border: checked ? (answers[0].toLowerCase().trim() === correct[0] ? "2px solid #059669" : "2px solid #DC2626") : "1.5px solid #D1D5DB",
            borderRadius: 8, padding: "4px 10px", fontSize: 15, width: 80,
            background: checked ? (answers[0].toLowerCase().trim() === correct[0] ? "#ECFDF5" : "#FEF2F2") : "#fff",
            outline: "none", color: "#111827"
          }}
        />
        <span>to the market every Sunday</span>
        <input
          value={answers[1]}
          onChange={e => setAnswers([answers[0], e.target.value])}
          placeholder="prep"
          disabled={checked}
          style={{
            border: checked ? (answers[1].toLowerCase().trim() === correct[1] ? "2px solid #059669" : "2px solid #DC2626") : "1.5px solid #D1D5DB",
            borderRadius: 8, padding: "4px 10px", fontSize: 15, width: 60,
            background: checked ? (answers[1].toLowerCase().trim() === correct[1] ? "#ECFDF5" : "#FEF2F2") : "#fff",
            outline: "none", color: "#111827"
          }}
        />
        <span>buy fresh vegetables.</span>
      </div>
      {checked && (
        <div style={{ fontSize: 13, color: answers[0].toLowerCase().trim() === correct[0] && answers[1].toLowerCase().trim() === correct[1] ? "#059669" : "#DC2626", marginBottom: 10, fontWeight: 500 }}>
          {answers[0].toLowerCase().trim() === correct[0] && answers[1].toLowerCase().trim() === correct[1]
            ? "✓ Perfect! Well done." : `✗ Answers: "${correct[0]}" and "${correct[1]}"`}
        </div>
      )}
      <div style={{ display: "flex", gap: 8 }}>
        {!checked
          ? <button onClick={handleCheck} style={{ background: "#4F46E5", color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>Check</button>
          : <button onClick={handleReset} style={{ background: "#F3F4F6", color: "#374151", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, cursor: "pointer", fontWeight: 600 }}>Try Again</button>
        }
      </div>
    </div>
  );
}

function WordOfDayDemo() {
  return (
    <div style={{ padding: "1.25rem" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
        <span style={{ fontSize: 22, fontWeight: 700, color: "#059669", fontFamily: "'Playfair Display', serif" }}>Eloquent</span>
        <span style={{ fontSize: 13, color: "#6B7280", fontStyle: "italic" }}>/ˈɛl.ə.kwənt/</span>
      </div>
      <p style={{ fontSize: 13, color: "#374151", marginBottom: 8 }}>
        <strong>adj.</strong> Fluent or persuasive in speaking or writing.
      </p>
      <div style={{ background: "#ECFDF5", borderLeft: "3px solid #059669", padding: "8px 12px", borderRadius: "0 8px 8px 0", fontSize: 13, color: "#065F46", fontStyle: "italic" }}>
        "Her eloquent speech moved the entire audience."
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
        {["fluent", "articulate", "persuasive"].map(s => (
          <span key={s} style={{ background: "#D1FAE5", color: "#065F46", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function GrammarDemo() {
  const [tab, setTab] = useState(0);
  const examples = [
    { label: "✓ Correct", text: "I have visited Paris.", bg: "#ECFDF5", color: "#065F46" },
    { label: "✗ Incorrect", text: "I have visited Paris yesterday.", bg: "#FEF2F2", color: "#991B1B" },
  ];
  return (
    <div style={{ padding: "1.25rem" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: "#92400E", marginBottom: 6 }}>Present Perfect vs Simple Past</p>
      <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 12 }}>Use Present Perfect for experiences; Simple Past for specific times.</p>
      <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
        {examples.map((e, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            background: tab === i ? e.bg : "#F9FAFB", color: tab === i ? e.color : "#6B7280",
            border: tab === i ? `1.5px solid ${e.color}` : "1.5px solid #E5E7EB",
            borderRadius: 8, padding: "5px 12px", fontSize: 12, cursor: "pointer", fontWeight: 600
          }}>{e.label}</button>
        ))}
      </div>
      <div style={{ background: examples[tab].bg, padding: "10px 14px", borderRadius: 10, fontSize: 15, color: examples[tab].color, fontStyle: "italic" }}>
        {examples[tab].text}
      </div>
    </div>
  );
}

function AICoachDemo() {
  const [input] = useState("I am very much interested to apply for this position.");
  const [corrected, setCorrected] = useState(false);

  return (
    <div style={{ padding: "1.25rem" }}>
      <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 6, fontWeight: 500 }}>YOUR DRAFT</p>
      <div style={{ background: "#F9FAFB", border: "1.5px solid #E5E7EB", borderRadius: 10, padding: "10px 12px", fontSize: 14, color: "#374151", marginBottom: 10, position: "relative" }}>
        {input}
        <button onClick={() => setCorrected(true)} style={{ display: "block", marginTop: 8, background: "#7C3AED", color: "#fff", border: "none", borderRadius: 7, padding: "6px 14px", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
          ✦ Get AI Feedback
        </button>
      </div>
      {corrected && (
        <div style={{ animation: "fadeIn 0.4s ease" }}>
          <p style={{ fontSize: 12, color: "#7C3AED", fontWeight: 700, marginBottom: 4 }}>AI SUGGESTION</p>
          <div style={{ background: "#F5F3FF", border: "1.5px solid #C4B5FD", borderRadius: 10, padding: "10px 12px", fontSize: 14, color: "#4C1D95", marginBottom: 8 }}>
            "I am very interested in applying for this position."
          </div>
          <div style={{ fontSize: 12, color: "#6B7280", display: "flex", alignItems: "flex-start", gap: 6 }}>
            <span style={{ color: "#7C3AED", fontWeight: 700, flexShrink: 0 }}>💡 TIP:</span>
            Use "interested in" not "interested to" with gerunds.
          </div>
        </div>
      )}
    </div>
  );
}

function RolePlayDemo() {
  const [step, setStep] = useState(0);
  const dialogue = [
    { role: "Interviewer", text: "Tell me about your greatest weakness.", side: "left" },
    { role: "You", text: "I sometimes focus too much on details, but I've been using project management tools to balance quality with efficiency.", side: "right" },
    { role: "Interviewer", text: "That's a great answer! Could you give me an example?", side: "left" },
  ];
  return (
    <div style={{ padding: "1.25rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ background: "#FEE2E2", color: "#991B1B", fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 700 }}>🎭 JOB INTERVIEW</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
        {dialogue.slice(0, step + 1).map((d, i) => (
          <div key={i} style={{ display: "flex", justifyContent: d.side === "right" ? "flex-end" : "flex-start" }}>
            <div style={{
              background: d.side === "right" ? "#DC2626" : "#F3F4F6",
              color: d.side === "right" ? "#fff" : "#374151",
              borderRadius: d.side === "right" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
              padding: "8px 12px", fontSize: 13, maxWidth: "80%"
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, marginBottom: 3, opacity: 0.7 }}>{d.role}</p>
              {d.text}
            </div>
          </div>
        ))}
      </div>
      {step < dialogue.length - 1 && (
        <button onClick={() => setStep(s => s + 1)} style={{ background: "#DC2626", color: "#fff", border: "none", borderRadius: 8, padding: "7px 16px", fontSize: 12, cursor: "pointer", fontWeight: 600 }}>
          Continue →
        </button>
      )}
    </div>
  );
}

const demoComponents = [FillBlanksDemo, WordOfDayDemo, GrammarDemo, AICoachDemo, RolePlayDemo];

export default function LandingPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ActiveDemo = demoComponents[activeFeature];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAF9", minHeight: "100vh", color: "#111827" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        .hero-title { animation: fadeInUp 0.7s ease both; }
        .hero-sub { animation: fadeInUp 0.7s 0.15s ease both; }
        .hero-cta { animation: fadeInUp 0.7s 0.3s ease both; }
        .feat-card { transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
        .feat-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .feat-card.active { box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 900; }
        .nav { transition: box-shadow 0.3s, background 0.3s; }
        .nav.scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.07); background: rgba(250,250,249,0.96); backdrop-filter: blur(8px); }
        .cta-btn { transition: transform 0.15s, box-shadow 0.15s; }
        .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.35); }
        .secondary-btn { transition: background 0.15s, color 0.15s; }
        .secondary-btn:hover { background: #111827; color: #fff; }
        .float { animation: float 3s ease-in-out infinite; }
        .float2 { animation: float 3.6s ease-in-out infinite 0.6s; }
      `}</style>

      {/* Nav */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 5vw", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#4F46E5" }}>Speak</span>
          <span style={{ fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#111827" }}>Smart</span>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link to="/login" style={{ fontSize: 14, color: "#374151", textDecoration: "none", padding: "8px 16px", fontWeight: 500 }}>Login</Link>
          <Link to="/signup" className="cta-btn" style={{ background: "#4F46E5", color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700, boxShadow: "0 2px 10px rgba(79,70,229,0.25)" }}>
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "120px 5vw 80px", maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#EEF2FF", borderRadius: 20, padding: "6px 16px", fontSize: 13, color: "#4F46E5", fontWeight: 600 }}>
          <span style={{ fontSize: 14 }}>✦</span> AI-powered English improvement
        </div>

        <h1 className="hero-title" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontFamily: "'Playfair Display', serif", fontWeight: 900, lineHeight: 1.12, color: "#111827", maxWidth: 700 }}>
          Speak English with{" "}
          <span style={{ color: "#4F46E5", position: "relative" }}>
            confidence
            <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 6 }} viewBox="0 0 200 6" preserveAspectRatio="none">
              <path d="M0 5 Q50 0 100 5 Q150 0 200 5" stroke="#A5B4FC" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>

        <p className="hero-sub" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "#6B7280", lineHeight: 1.7, maxWidth: 520 }}>
          From grammar basics to fluent conversations — practice with AI, learn every day, and become the English speaker you want to be.
        </p>

        <div className="hero-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link to="/signup" className="cta-btn" style={{ background: "#4F46E5", color: "#fff", textDecoration: "none", padding: "14px 32px", borderRadius: 12, fontSize: 16, fontWeight: 700, boxShadow: "0 4px 16px rgba(79,70,229,0.3)" }}>
            Start Learning Free →
          </Link>
          <Link to="/login" className="secondary-btn" style={{ background: "transparent", color: "#374151", textDecoration: "none", padding: "14px 32px", borderRadius: 12, fontSize: 16, fontWeight: 600, border: "1.5px solid #D1D5DB" }}>
            Sign In
          </Link>
        </div>

        {/* Floating word chips */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
          {["Fill in blanks ✏️", "Word of the Day 💡", "Grammar 📖", "AI Coach 🤖", "Role Play 🎭"].map((f, i) => (
            <span key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20, padding: "5px 14px", fontSize: 13, color: "#374151", fontWeight: 500, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", animation: `float ${2.8 + i * 0.3}s ease-in-out infinite ${i * 0.2}s` }}>
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#4F46E5", padding: "40px 5vw" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, textAlign: "center" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="stat-num" style={{ color: "#fff" }}>{s.value}</div>
              <div style={{ color: "#A5B4FC", fontSize: 14, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Interactive */}
      <section style={{ padding: "80px 5vw", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: "#4F46E5", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8 }}>EVERYTHING YOU NEED</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#111827" }}>
            Five ways to level up
          </h2>
          <p style={{ color: "#6B7280", marginTop: 10, fontSize: 16, maxWidth: 460, margin: "10px auto 0" }}>
            Click any feature to try a live demo below.
          </p>
        </div>

        {/* Feature selector tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14, marginBottom: 32 }}>
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`feat-card${activeFeature === i ? " active" : ""}`}
              onClick={() => setActiveFeature(i)}
              style={{
                background: activeFeature === i ? f.bg : "#fff",
                border: activeFeature === i ? `2px solid ${f.color}` : "1.5px solid #E5E7EB",
                borderRadius: 14, padding: "18px 16px", cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 8 }}>{f.icon}</div>
              <span style={{ fontSize: 10, fontWeight: 700, color: f.color, background: f.bg, border: `1px solid ${f.color}20`, padding: "2px 8px", borderRadius: 10, letterSpacing: "0.06em" }}>{f.tag}</span>
              <p style={{ fontWeight: 700, fontSize: 15, color: "#111827", marginTop: 8 }}>{f.title}</p>
              <p style={{ fontSize: 12, color: "#6B7280", marginTop: 4, lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Live Demo Panel */}
        <div style={{
          background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 20,
          overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.06)"
        }}>
          <div style={{ background: features[activeFeature].bg, padding: "16px 24px", borderBottom: "1.5px solid #E5E7EB", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 20 }}>{features[activeFeature].icon}</span>
            <span style={{ fontWeight: 700, color: features[activeFeature].color, fontSize: 15 }}>{features[activeFeature].title}</span>
            <span style={{ marginLeft: "auto", fontSize: 12, color: "#6B7280" }}>Live demo ↓</span>
          </div>
          <div style={{ animation: "fadeIn 0.3s ease" }} key={activeFeature}>
            <ActiveDemo />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#F9FAFB", padding: "72px 5vw" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontSize: 13, color: "#4F46E5", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8 }}>LEARNER STORIES</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900 }}>Real results, real people</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px", border: "1px solid #E5E7EB", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
                  {Array(t.stars).fill(0).map((_, j) => (
                    <span key={j} style={{ color: "#F59E0B", fontSize: 14 }}>★</span>
                  ))}
                </div>
                <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: t.color + "20", color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#111827" }}>{t.name}</p>
                    <p style={{ fontSize: 11, color: "#9CA3AF" }}>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", background: "#4F46E5", borderRadius: 24, padding: "60px 40px", boxShadow: "0 16px 48px rgba(79,70,229,0.3)" }}>
          <div style={{ fontSize: 36, marginBottom: 16 }}>🚀</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
            Your English journey starts today
          </h2>
          <p style={{ color: "#A5B4FC", fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            Join 50,000+ learners already improving with SpeakSmart. Free to start, no credit card needed.
          </p>
          <Link to="/signup" style={{
            background: "#fff", color: "#4F46E5", textDecoration: "none",
            padding: "16px 40px", borderRadius: 12, fontSize: 16, fontWeight: 800,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)", display: "inline-block"
          }}>
            Get Started — It's Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #E5E7EB", padding: "28px 5vw", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginBottom: 6 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#4F46E5", fontSize: 18 }}>Speak</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#111827", fontSize: 18 }}>Smart</span>
        </div>
        <p style={{ fontSize: 13, color: "#9CA3AF" }}>© 2025 SpeakSmart. Built to make English learning joyful.</p>
      </footer>
    </div>
  );
}