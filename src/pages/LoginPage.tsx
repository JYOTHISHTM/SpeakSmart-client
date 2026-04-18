import { Link } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { api } from "../services/auth.service";




export default function LoginPage() {
  const [email, setEmail] = useState("aisha.nair@gmail.com");
  const [password, setPassword] = useState("••••••••••");


  const navigate = useNavigate();


  const login = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (tokenResponse) => {
      const data = await api.googleLogin(tokenResponse.access_token);

      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      }
    },
    onError: () => console.log("Login Failed"),
  });


  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#FAFAF9", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700&family=Playfair+Display:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .ss-input { width: 100%; padding: 12px 14px; border-radius: 10px; border: 1.5px solid #E5E7EB; font-size: 14px; font-family: 'DM Sans', sans-serif; color: #111827; background: #fff; outline: none; transition: border-color 0.15s; }
        .ss-input:focus { border-color: #4F46E5; }
        .ss-input::placeholder { color: #9CA3AF; }
        .ss-btn { transition: transform 0.15s, box-shadow 0.15s; }
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
          <span style={{ fontSize: 13 }}>✦</span> Welcome back
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 28, color: "#111827", marginBottom: 6 }}>
          Sign in to continue
        </h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 28, lineHeight: 1.6 }}>
          Practice English every day — your streak is waiting.
        </p>

        {/* Google Button */}
        <button onClick={() => login()} className="ss-google" style={{ width: "100%", padding: "12px", borderRadius: 12, border: "1.5px solid #E5E7EB", background: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", color: "#111827", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "background 0.15s, border-color 0.15s" }}>
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
            <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0", fontSize: 12, color: "#9CA3AF" }}>
          <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
          or continue with email
          <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
        </div>

        {/* Email */}
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>EMAIL ADDRESS</label>
          <input className="ss-input" type="email" placeholder="aisha@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        {/* Password */}
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6, letterSpacing: "0.04em" }}>PASSWORD</label>
          <input className="ss-input" type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>

        {/* Forgot */}
        <div style={{ textAlign: "right", marginBottom: 20 }}>
          <a href="#" className="ss-link" style={{ fontSize: 12 }}>Forgot password?</a>
        </div>

        {/* Submit */}
        <button className="ss-btn" style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", fontSize: 15, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", background: "#4F46E5", color: "#fff", boxShadow: "0 4px 16px rgba(79,70,229,0.3)" }}>
          Sign In →
        </button>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: 13, color: "#6B7280", marginTop: 20 }}>
          Don't have an account?{" "}
          <Link to="/signup" className="ss-link">Sign up free</Link>
        </p>
      </div>
    </div>
  );
}