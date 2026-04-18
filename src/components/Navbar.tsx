import { Link } from "react-router-dom";

export default function Navbar() {
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
      <Link to="/" style={{ textDecoration: "none" }}>
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
</Link>


      {/* Menu Links */}
      <div style={{ 
        display: "flex", 
        gap: 32, 
        fontSize: 15, 
        fontWeight: 500,  
        color: "#374151"
      }}> 
        <Link to="/home" style={{ color: "#e54646", fontWeight: 600, textDecoration: "none" }}>Home</Link>
        <Link to="/conversation" style={{  color: "#e54646",textDecoration: "none" }}>conversation</Link>
        <Link to="/lessons" style={{ textDecoration: "none" }}>F.I.B</Link>
        <Link to="/lessons" style={{ textDecoration: "none" }}>Fluency</Link>
        <Link to="/role-play" style={{ color: "#e54646", textDecoration: "none" }}>Role Play</Link>
        <Link to="/progress" style={{ textDecoration: "none" }}>Word Bank</Link>
        <Link to="/profile" style={{ color: "#e54646", textDecoration: "none" }}>Profile</Link>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      

        <div style={{ 
          width: 82, 
          height: 36, 
          borderRadius: "10%", 
          background: "linear-gradient(45deg, #4F46E5, #7C3AED)", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          color: "white", 
          fontWeight: 400,
          fontSize: 14,
          boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)"
        }}>
          JOTHISH
        </div>
      </div>
    </nav>
  );
}