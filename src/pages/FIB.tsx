import { useState } from "react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/AppFooter";


type Blank = {
    id: number;
    correctWord: string;
    options: string[];
    hint: string;
};
type Exercise = {
    paragraph: string;
    blanks: Blank[];
};

export default function FillInTheBlanks() {
    const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
    const [numBlanks, setNumBlanks] = useState<5 | 10>(5);

    const [exercise, setExercise] = useState<Exercise | null>(null);
    const [selected, setSelected] = useState<Record<number, string>>({});
    const [showOptionsFor, setShowOptionsFor] = useState<number | null>(null);

    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const primaryColor = "rgb(79, 70, 229)";

    const buttonStyle = {
        padding: "10px 22px",
        background: "#4f46e5",
        color: "#ffffff",
        border: "none",
        borderRadius: 8,
        fontWeight: 600,
        cursor: "pointer",
    };

    // ---------------- FETCH ----------------
    const generateExercise = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/fill-blanks/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ difficulty, numBlanks }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            setExercise(data);
            setSelected({});
            setSubmitted(false);
            setScore(null);
            setShowOptionsFor(null);
        } catch (err: any) {
            alert(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // ---------------- SELECT ----------------
    const handleSelect = (id: number, word: string) => {
        setSelected((prev) => ({ ...prev, [id]: word }));
        setShowOptionsFor(null);
    };

    // ---------------- SUBMIT ----------------
    const submit = () => {
        let correct = 0;
        exercise?.blanks.forEach((b) => {
            if (selected[b.id] === b.correctWord) correct++;
        });

        setScore(correct);
        setSubmitted(true);
    };

    // ---------------- STOP ----------------
    const stop = () => {
        setExercise(null);
        setSelected({});
        setSubmitted(false);
        setScore(null);
        setShowOptionsFor(null);
    };

    // ---------------- PARAGRAPH ----------------
    const renderParagraph = () => {
        if (!exercise) return null;

        const parts = exercise.paragraph.split(/(\[BLANK_\d+\])/g);

        return (
            <p style={{ fontSize: "1.3rem", lineHeight: 2 }}>
                {parts.map((part, i) => {
                    const match = part.match(/\[BLANK_(\d+)\]/);
                    if (!match) return <span key={i}>{part}</span>;

                    const id = Number(match[1]);
                    const blank = exercise.blanks.find((b) => b.id === id);

                    const userAnswer = selected[id];
                    const isCorrect = userAnswer === blank?.correctWord;

                    let color = "#111827";
                    if (submitted) color = isCorrect ? "green" : "red";
                    else if (userAnswer) color = primaryColor;

                    return (
                        <span
                            key={i}
                            onClick={() => !submitted && setShowOptionsFor(id)}
                            style={{
                                display: "inline-block",
                                minWidth: 120,
                                padding: "6px 10px",
                                margin: "0 6px",
                                border: "2px solid #4f46e5",
                                background: "#eef2ff",
                                borderRadius: 8,
                                cursor: "pointer",
                                color,
                                fontWeight: 700,
                                textAlign: "center",
                            }}
                        >
                            {userAnswer || "_____"}
                        </span>
                    );
                })}
            </p>
        );
    };

    const currentBlank = exercise?.blanks.find((b) => b.id === showOptionsFor);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "#f3f4f6",
            }}
        >
            <Navbar />

            {/* MAIN CONTENT (pushes footer down) */}
            <div
                style={{
                    flex: 1,
                    maxWidth: 1000,
                    margin: "0 auto",
                    padding: 20,
                    width: "100%",
                    color: "#111827",
                }}
            >
                {/* SETUP */}
                {!exercise && (
                    <div
                        style={{
                            background: "#ffffff",
                            padding: 20,
                            borderRadius: 14,
                            border: "2px solid #e5e7eb",
                            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                            marginBottom: 20,
                        }}
                    >
                        <div style={{ display: "flex", gap: 30, alignItems: "center", flexWrap: "wrap" }}>

                            {/* MODE */}
                            <div>
                                <div style={{ fontSize: 13, marginBottom: 8, color: "#6b7280", fontWeight: 600 }}>
                                    Mode
                                </div>

                                <div style={{ display: "flex", gap: 10 }}>
                                    {["easy", "medium", "hard"].map((mode) => (
                                        <label
                                            key={mode}
                                            style={{
                                                padding: "6px 14px",
                                                borderRadius: 20,
                                                border: "2px solid #4f46e5",
                                                background: difficulty === mode ? "#4f46e5" : "#fff",
                                                color: difficulty === mode ? "#fff" : "#4f46e5",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                fontSize: 13,
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                value={mode}
                                                checked={difficulty === mode}
                                                onChange={(e) => setDifficulty(e.target.value as any)}
                                                style={{ display: "none" }}
                                            />
                                            {mode}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* BLANKS */}
                            <div>
                                <div style={{ fontSize: 13, marginBottom: 8, color: "#6b7280", fontWeight: 600 }}>
                                    Blanks
                                </div>

                                <div style={{ display: "flex", gap: 10 }}>
                                    {[5, 10].map((num) => (
                                        <label
                                            key={num}
                                            style={{
                                                padding: "6px 14px",
                                                borderRadius: 20,
                                                border: "2px solid #4f46e5",
                                                background: numBlanks === num ? "#4f46e5" : "#fff",
                                                color: numBlanks === num ? "#fff" : "#4f46e5",
                                                fontWeight: 600,
                                                cursor: "pointer",
                                                fontSize: 13,
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                value={num}
                                                checked={numBlanks === num}
                                                onChange={() => setNumBlanks(num as any)}
                                                style={{ display: "none" }}
                                            />
                                            {num}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* BUTTON */}
                            <div style={{ marginLeft: "auto" }}>
                                <button
                                    onClick={generateExercise}
                                    style={{
                                        padding: "10px 26px",
                                        background: "#4f46e5",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: 10,
                                        fontWeight: 600,
                                        cursor: "pointer",
                                    }}
                                >
                                    {loading ? "Loading..." : "Start"}
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {/* EXERCISE */}
                {exercise && (
                    <>
                        {/* MODE + BLANKS */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: 12,
                                padding: "10px 15px",
                                background: "#eef2ff",
                                border: "2px solid #c7d2fe",
                                borderRadius: 10,
                                fontWeight: 600,
                            }}
                        >
                            <span>Mode: {difficulty}</span>
                            <span>Blanks: {exercise.blanks.length}</span>
                        </div>

                        {/* PARAGRAPH BOX */}
                        <div
                            style={{
                                background: "#ffffff",
                                padding: 22,
                                borderRadius: 14,
                                border: "2px solid #e5e7eb",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                                marginBottom: 20,
                            }}
                        >
                            {renderParagraph()}
                        </div>

                        {/* OPTIONS */}
                        {currentBlank && !submitted && (
                            <div
                                style={{
                                    marginTop: 20,
                                    padding: 18,
                                    borderRadius: 12,
                                    background: "#ffffff",
                                    border: "2px solid #e5e7eb",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                                    maxWidth: 500,        
                                    marginLeft: "auto",   
                                    marginRight: "auto", 
                                }}
                            >
                                <p style={{ marginBottom: 10 }}>
                                    <b>Hint:</b> {currentBlank.hint}
                                </p>

                                {currentBlank.options.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleSelect(showOptionsFor!, opt)}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            width: "100%",
                                            padding: 12,
                                            marginTop: 10,
                                            background:
                                                selected[showOptionsFor!] === opt ? "#eef2ff" : "#ffffff",
                                            color: "#111827",
                                            border:
                                                selected[showOptionsFor!] === opt
                                                    ? "2px solid #4f46e5"
                                                    : "2px solid #e5e7eb",
                                            borderRadius: 10,
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span>{opt}</span>

                                        {/* show hint (same for all) */}
                                        <span style={{ fontSize: 12, opacity: 0.7 }}>
                                            {currentBlank.hint}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* ACTIONS */}
                        <div style={{ marginTop: 25 }}>
                            {!submitted &&
                                Object.keys(selected).length === exercise.blanks.length && (
                                    <button onClick={submit} style={buttonStyle}>Submit</button>
                                )}

                            {submitted && (
                                <>
                                    <h2 style={{ margin: "15px 0", color: primaryColor }}>
                                        Score: {score} / {exercise.blanks.length}
                                    </h2>
                                    <button onClick={generateExercise} style={buttonStyle} >Next</button>
                                </>
                            )}

                            <button
                                onClick={stop}
                                style={{
                                    padding: "10px 22px",
                                    background: "#ef4444",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    marginLeft: 10,
                                }}
                            >
                                Stop
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* FOOTER ALWAYS BOTTOM */}
            <AppFooter />
        </div>
    );
}