import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [showRoleModal, setShowRoleModal] = useState(false);

  // Dummy Data
  const streak = 12;
  const level = 14;
  const xp = 2480;
  const xpToNext = 3200;
  const progress = Math.round((xp / xpToNext) * 100);

  const wordOfDay = {
    word: "Eloquent",
    meaning: "Fluent and persuasive in speaking or writing",
    example: "She delivered an eloquent presentation."
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #F8FAFC 0%, #F0F9FF 100%)"
    }}>
      <Navbar level={level} />

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

        {/* Stats Row */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
          gap: 20, 
          marginBottom: 52 
        }}>
          
          {/* Streak */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "24px" 
          }}>
            <div style={{ fontSize: 15, color: "#6B7280", marginBottom: 8 }}>Current Streak</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#111827" }}>{streak} days 🔥</div>
          </div>

          {/* Level & Progress */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "24px" 
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 15, color: "#6B7280" }}>Level {level}</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: "#111827" }}>{xp}</div>
              </div>
              <div style={{ textAlign: "right", fontSize: 14, color: "#6B7280" }}>
                {xpToNext - xp} XP to next
              </div>
            </div>
            <div style={{ height: 6, background: "#E5E7EB", borderRadius: 9999 }}>
              <div style={{ 
                height: "100%", 
                width: `${progress}%`, 
                background: "#4F46E5", 
                borderRadius: 9999 
              }} />
            </div>
          </div>

          {/* Word of the Day */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "24px" 
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#6B7280", marginBottom: 10 }}>WORD OF THE DAY</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#111827", marginBottom: 6 }}>{wordOfDay.word}</div>
            <div style={{ color: "#374151", marginBottom: 6 }}>{wordOfDay.meaning}</div>
            <div style={{ fontSize: 14, color: "#6B7280", fontStyle: "italic" }}>
              “{wordOfDay.example}”
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 600, 
          color: "#111827", 
          marginBottom: 24 
        }}>
          Practice
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: 20 
        }}>
          
          {/* Speak with AI */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "28px",
            transition: "all 0.2s"
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Speak with AI</div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
              Practice natural conversations with instant feedback on pronunciation and fluency.
            </p>
            <button style={{ 
              background: "#4F46E5", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: 10, 
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Start Speaking
            </button>
          </div>

          {/* Role Play */}
          <div 
            onClick={() => setShowRoleModal(true)}
            style={{ 
              background: "rgba(255,255,255,0.9)", 
              backdropFilter: "blur(20px)", 
              border: "1px solid #E5E7EB", 
              borderRadius: 16, 
              padding: "28px",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Role Play</div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
              Practice real-life situations like interviews, ordering food, and phone calls.
            </p>
            <button style={{ 
              background: "#4F46E5", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: 10, 
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Choose Scenario
            </button>
          </div>

          {/* Fluency Timer */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "28px"
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Fluency Timer</div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
              Speak continuously for 60 seconds and improve your flow.
            </p>
            <button style={{ 
              background: "#10B981", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: 10, 
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Start 60 Seconds
            </button>
          </div>

          {/* Grammar Fixes */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "28px"
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Grammar Fixes</div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
              Write and get instant corrections with detailed explanations.
            </p>
            <button style={{ 
              background: "#F59E0B", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: 10, 
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Practice Grammar
            </button>
          </div>

          {/* Fill in the Blanks */}
          <div style={{ 
            background: "rgba(255,255,255,0.9)", 
            backdropFilter: "blur(20px)", 
            border: "1px solid #E5E7EB", 
            borderRadius: 16, 
            padding: "28px"
          }}>
            <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 12 }}>Fill in the Blanks</div>
            <p style={{ color: "#6B7280", lineHeight: 1.6, marginBottom: 20 }}>
              Strengthen vocabulary and grammar through contextual exercises.
            </p>
            <button style={{ 
              background: "#8B5CF6", 
              color: "white", 
              border: "none", 
              padding: "12px 24px", 
              borderRadius: 10, 
              fontWeight: 600,
              cursor: "pointer"
            }}>
              Start Exercise
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Role Play Modal */}
      {showRoleModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "white",
            borderRadius: 16,
            width: "100%",
            maxWidth: 400,
            padding: 32,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20, textAlign: "center" }}>
              Choose Scenario
            </h3>

            {[
              { title: "Job Interview", desc: "Technical or HR round" },
              { title: "Ordering Food", desc: "Restaurant or cafe" },
              { title: "Phone Call", desc: "Customer service" },
              { title: "Daily Conversation", desc: "Casual home talk" }
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  alert(`Starting ${item.title} (Demo)`);
                  setShowRoleModal(false);
                }}
                style={{
                  padding: "14px 20px",
                  borderRadius: 12,
                  border: "1px solid #E5E7EB",
                  marginBottom: 10,
                  cursor: "pointer"
                }}
              >
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#6B7280" }}>{item.desc}</div>
              </div>
            ))}

            <button
              onClick={() => setShowRoleModal(false)}
              style={{
                width: "100%",
                marginTop: 16,
                padding: "14px",
                background: "transparent",
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                color: "#6B7280",
                fontWeight: 500
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}