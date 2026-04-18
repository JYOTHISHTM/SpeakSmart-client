import Navbar from "../components/Navbar";


export default function HomePage() {


  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #F8FAFC 0%, #F0F9FF 100%)"
    }}>
      <Navbar />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Welcome */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 36,
            fontWeight: 700,
            color: "#111827",
            marginBottom: 8
          }}>
            Good evening, Jothish
          </h1>
          <p style={{ fontSize: 17, color: "#6B7280" }}>
            Continue your English journey today
          </p>


        </div>


      </div>

        

    </div>
  );
}