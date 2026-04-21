import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getAllWords } from "../services/wordBank.service";



type Word = {
  _id: string;
  word: string;
  meaning: string;
  sentences: string[];
};

export default function WordBank() {
  const [words, setWords] = useState<Word[]>([]);
  const [selected, setSelected] = useState<Word | null>(null);

  useEffect(() => {
  getAllWords()
    .then(setWords)
    .catch(err => {
      console.error(err.message);
    });
}, []);

  const primary = "#4f46e5";

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F8FAFC 0%, #F0F9FF 100%)"
      }}
    >
      <Navbar />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Heading */}
        <h1 style={{
          fontSize: 32,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 30
        }}>
          Your Word Bank
        </h1>

        {/* MAIN CONTAINER */}
        <div style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
          border: "1px solid #E5E7EB"
        }}>

          {/* WORD GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "16px"
          }}>
            {words.map(w => (
              <div
                key={w._id}
                onClick={() => setSelected(w)}
                style={{
                  padding: "18px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  textAlign: "center",
                  fontWeight: 600,
                  color: "#111827",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.05)";
                }}
              >
                {w.word}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP (SweetAlert Style) */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "28px",
              width: "90%",
              maxWidth: "420px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              textAlign: "center"
            }}
          >
            <h2 style={{ color: primary, marginBottom: 10 }}>
              {selected.word}
            </h2>

            <p style={{ color: "#030303", marginBottom: 15 }}>
              {selected.meaning}
            </p>

            <ul
              style={{
                listStyleType: "circle",
                textAlign: "left",
                color: "#111827",
                lineHeight: 2.0,
                paddingLeft: "22px",
                marginTop: "12px",
              }}
            >
              {selected.sentences.map((s, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "12px",   // ✅ gap between points
                    fontWeight: 500,        // ✅ more weight
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelected(null)}
              style={{
                marginTop: 20,
                padding: "10px 20px",
                background: primary,
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer"
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}