import { Link } from "react-router-dom";

export default function Navbar({ level = 14 }) {
  return (
    <nav style={{
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 0",
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(248, 250, 252, 0.85)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(229, 231, 235, 0.6)"
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontWeight: 900, 
          color: "#4F46E5", 
          fontSize: 28 
        }}>Speak</span>
        <span style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontWeight: 900, 
          color: "#111827", 
          fontSize: 28 
        }}>Smart</span>
      </div>

      {/* Menu Links */}
      <div style={{ 
        display: "flex", 
        gap: 32, 
        fontSize: 15, 
        fontWeight: 500,
        color: "#374151"
      }}>
        <Link to="/" style={{ color: "#4F46E5", fontWeight: 600, textDecoration: "none" }}>Home</Link>
        <Link to="/practice" style={{ textDecoration: "none" }}>Practice</Link>
        <Link to="/lessons" style={{ textDecoration: "none" }}>Lessons</Link>
        <Link to="/progress" style={{ textDecoration: "none" }}>Progress</Link>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ 
          background: "#EEF2FF", 
          color: "#4F46E5", 
          padding: "6px 16px", 
          borderRadius: 30, 
          fontSize: 14, 
          fontWeight: 600 
        }}>
          Level {level}
        </div>

        <div style={{ 
          width: 42, 
          height: 42, 
          borderRadius: "50%", 
          background: "linear-gradient(45deg, #4F46E5, #7C3AED)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "white", 
          fontWeight: 700,
          fontSize: 15,
          boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)"
        }}>
          JN
        </div>
      </div>
    </nav>
  );
}