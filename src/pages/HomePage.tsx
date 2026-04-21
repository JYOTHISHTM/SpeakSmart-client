import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDailyWord, saveWordToBank } from "../services/word.service";

type Word = {
  word: string;
  meaning: string;
  sentences: string[];
  isAdded?: boolean;   // 👈 ADD THIS

};


export default function HomePage() {
  const [wordData, setWordData] = useState<Word | null>(null);
  const [isAdded, setIsAdded] = useState(false);



  useEffect(() => {
    const cached = localStorage.getItem("dailyWord");

    if (cached) {
      setWordData(JSON.parse(cached));
    }

    getDailyWord()
      .then(data => {
        setWordData(data);
        setIsAdded(data.isAdded || false);
        // localStorage.setItem("dailyWord", JSON.stringify(data));
      })
      .catch(err => {
        console.error(err.message);
      });

  }, []);

  const saveWord = async () => {
    if (isAdded) return;

    try {
      await saveWordToBank(wordData);
      setIsAdded(true);

      toast.success("✅ Word added to your Word Bank!", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });

    } catch (err: any) {
      toast.error(err.message || "Failed to save word");
    }
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #F8FAFC 0%, #F0F9FF 100%)"
    }}>
      <Navbar />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px" }}>

        {/* Welcome Section */}
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

        {/* Word Card - Centered & Beautifully Designed */}
        {wordData && (
          <div style={{
            maxWidth: "620px",
            margin: "0 auto",           // Center the card
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
            border: "1px solid #E5E7EB",
          }}>

            {/* Word Header */}
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h2 style={{
                color: "#1E40AF",           // Nice deep blue
                fontSize: "2.25rem",
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.02em"
              }}>
                {wordData.word}
              </h2>

              <p style={{
                fontSize: "1.1rem",
                color: "#4B5563",
                marginTop: 8,
                fontWeight: 500
              }}>
                {wordData.meaning}
              </p>
            </div>

            {/* Example Sentences */}
            <div style={{ marginBottom: 28 }}>
              <p style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: 12
              }}>
                Example Sentences
              </p>

              <ul style={{
                paddingLeft: "20px",
                margin: 0,
                color: "#374151",
                lineHeight: "1.7"
              }}>
                {wordData.sentences.map((sentence, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    "{sentence}"
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button
              onClick={saveWord}
              disabled={isAdded}                    // Disable if already added
              style={{
                width: "100%",
                padding: "16px 24px",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "12px",
                border: "none",
                cursor: isAdded ? "not-allowed" : "pointer",
                background: isAdded ? "#10B981" : "#111827",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "all 0.2s ease",
                boxShadow: isAdded
                  ? "0 4px 12px rgba(16, 185, 129, 0.3)"
                  : "0 4px 15px rgba(17, 24, 39, 0.2)",
              }}
              onMouseOver={(e) => {
                if (!isAdded) e.currentTarget.style.background = "#1F2937";
              }}
              onMouseOut={(e) => {
                if (!isAdded) e.currentTarget.style.background = "#111827";
              }}
            >
              {isAdded ? (
                <>
                  ✅ Added to Word Bank
                </>
              ) : (
                <>
                  ➕ Add to Word Bank
                </>
              )}
            </button>

            {isAdded && (
              <p style={{
                textAlign: "center",
                marginTop: 12,
                fontSize: "14px",
                color: "#10B981",
                fontWeight: 500
              }}>
                Great choice! This word is now in your collection.
              </p>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}



