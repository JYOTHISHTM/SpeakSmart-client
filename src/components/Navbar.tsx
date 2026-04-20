import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth
    navigate("/login"); // redirect
  };


  return (


    <nav style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
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
        <Link to="/home" style={{ color: "#15b715",  textDecoration: "none" }}>Home</Link>
        <Link to="/conversation" style={{ color: "#e54646", textDecoration: "none" }}>conversation</Link>
        <Link to="/fib" style={{ color: "#15b715", textDecoration: "none" }}>F.I.B</Link>
        <Link to="#" style={{ textDecoration: "none" }}>Fluency</Link>
        <Link to="/role-play" style={{ color: "#e54646", textDecoration: "none" }}>Role Play</Link>
        <Link to="/word-bank" style={{color: "#15b715", textDecoration: "none" }}>Word Bank</Link>
        <Link to="/profile" style={{ color: "#e54646", textDecoration: "none" }}>Profile</Link>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>



        <button
          onClick={handleLogout}
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid #E5E7EB",
            background: "#ff0000",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 600
          }}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}