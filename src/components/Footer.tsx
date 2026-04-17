import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(20px)",
      borderTop: "1.5px solid rgba(229, 231, 235, 0.8)",
      marginTop: "80px",
      padding: "60px 0 30px",
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>
          
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#4F46E5", fontSize: 26 }}>Speak</span>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, color: "#111827", fontSize: 26 }}>Smart</span>
            </div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, maxWidth: 280 }}>
              Master English through fun, AI-powered conversations and real-life practice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, color: "#111827" }}>Platform</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "#4B5563" }}>
              <Link to="/practice" style={{ textDecoration: "none" }}>Practice</Link>
              <Link to="/lessons" style={{ textDecoration: "none" }}>Lessons</Link>
              <Link to="/progress" style={{ textDecoration: "none" }}>My Progress</Link>
              <Link to="/roleplay" style={{ textDecoration: "none" }}>Role Play</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, color: "#111827" }}>Resources</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "#4B5563" }}>
              <a href="#" style={{ textDecoration: "none" }}>Word of the Day</a>
              <a href="#" style={{ textDecoration: "none" }}>Blog</a>
              <a href="#" style={{ textDecoration: "none" }}>Community</a>
              <a href="#" style={{ textDecoration: "none" }}>Help Center</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 16, color: "#111827" }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, color: "#4B5563" }}>
              <a href="#" style={{ textDecoration: "none" }}>About Us</a>
              <a href="#" style={{ textDecoration: "none" }}>Careers</a>
              <a href="#" style={{ textDecoration: "none" }}>Contact</a>
              <a href="#" style={{ textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: 60,
          paddingTop: 20,
          borderTop: "1px solid #E5E7EB",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          fontSize: 14,
          color: "#6B7280"
        }}>
          <div>© 2026 SpeakSmart. All rights reserved.</div>
          <div>Made with ❤️ for English learners worldwide</div>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#" style={{ color: "#6B7280" }}>Twitter</a>
            <a href="#" style={{ color: "#6B7280" }}>Instagram</a>
            <a href="#" style={{ color: "#6B7280" }}>YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}