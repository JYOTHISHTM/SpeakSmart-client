import { Link } from "react-router-dom";
import { useState } from "react";

function getStrength(val:any) {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  return score;
}

const strengthColor = (score:any) => {
  if (score <= 1) return "#EF4444";
  if (score === 2) return "#F59E0B";
  if (score === 3) return "#3B82F6";
  return "#059669";
};

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const strength = getStrength(password);
  const color = strengthColor(strength);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#FAFAF9", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .ss-input { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1.5px solid #E5E7EB; font-size: 14px; font-family: 'DM Sans', sans-serif; color: #111827; background: #fff; outline: none; transition: border-color 0.15s; }
        .ss-input:focus { border-color: #4F46E5; }
        .ss-input::placeholder { color: #9CA3AF; }
        .ss-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(79,70,229,0.35); }
        .ss-google:hover { background: #F9FAFB !important; border-color: #D1D5DB !important; }
        .ss-link { color: #4F46E5; font-weight: 600; text-decoration: none; }
        .ss-link:hover { text-decoration: underline; }
      `}</style>

      <div style={{ background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: 20, padding: "40px", maxWidth: 520, width: "100%" }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 28 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#4F46E5", fontSize: 20 }}>Speak</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#111827", fontSize: 20 }}>Smart</span>
        </div>

        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#EEF2FF", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "#4F46E5", fontWeight: 600, marginBottom: 16 }}>
          <span style={{ fontSize: 13 }}>✦</span> Join 50,000+ learners
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28, color: "#111827", marginBottom: 6 }}>
          Start learning free
        </h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 28, lineHeight: 1.6 }}>
          No credit card needed. Your English journey starts today.
        </p>

        {/* Name Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>FIRST NAME</label>
            <input className="ss-input" type="text" placeholder="Jo" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
          <div>
            <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>LAST NAME</label>
            <input className="ss-input" type="text" placeholder="Jo" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
        </div>

        {/* Email */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>EMAIL ADDRESS</label>
          <input className="ss-input" type="email" placeholder="jo@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>PASSWORD</label>
          <input className="ss-input" type="password" placeholder="Min. 8 characters" value={password} onChange={e => setPassword(e.target.value)} />
          <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 5 }}>Use 8+ characters with a mix of letters and numbers.</p>
          {/* Strength bars */}
          {password.length > 0 && (
            <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
              {[0, 1, 2, 3].map(i => (
                <div key={i} style={{ height: 3, flex: 1, borderRadius: 2, background: i < strength ? color : "#E5E7EB", transition: "background 0.2s" }} />
              ))}
            </div>
          )}
        </div>

        {/* Terms */}
        
        {/* Submit */}
        <button className="ss-btn" style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", fontSize: 15, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", background: "#4F46E5", color: "#fff", boxShadow: "0 4px 16px rgba(79,70,229,0.3)", transition: "transform 0.15s, box-shadow 0.15s" }}>
          Create My Free Account →
        </button>

        {/* Feature chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 16 }}>
          {["Fill in blanks ✏️", "Word of the Day 💡", "AI Coach 🤖", "Role Play 🎭"].map(f => (
            <span key={f} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 20, padding: "4px 12px", fontSize: 12, color: "#374151", fontWeight: 500 }}>{f}</span>
          ))}
        </div>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: 13, color: "#6B7280", marginTop: 20 }}>
          Already have an account?{" "}
          <Link to="/login" className="ss-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
}