import { useState, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from "../components/Navbar";



type Message = {
    role: "user" | "ai";
    text: string;
};

declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

export default function ConversationPage() {
    const [mode, setMode] = useState<"speak" | "roleplay">("speak");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    const recognitionRef = useRef<any>(null);
  const level = 14;

  const startListening = () => {
    console.log("🎤 Start Listening clicked");

    const SpeechRecognitionAPI =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
        alert("Speech Recognition is not supported in your browser. Please use Chrome or Edge.");
        return;
    }

    // Stop any previous recognition first
    if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;     // Only final results
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        console.log("🎙️ Listening started...");
    };

    recognition.onresult = async (event: any) => {
        const text = event.results[0][0].transcript.trim();

        if (!text) return;

        console.log("🗣 User said:", text);

        addMessage("user", text);

        setLoading(true);
        try {
            const aiReply = await getAIResponse(text);
            console.log("🤖 AI replied:", aiReply);

            addMessage("ai", aiReply);
            speak(aiReply);
        } catch (err) {
            console.error("AI error:", err);
            const errorMsg = "Sorry, I couldn't get a response. Please try again.";
            addMessage("ai", errorMsg);
            speak(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    recognition.onerror = (event: any) => {
        console.error("❌ Speech recognition error:", event.error);
        setLoading(false);

        let msg = "Sorry, there was a problem with the microphone.";
        if (event.error === "no-speech") msg = "I didn't hear anything. Please try speaking again.";
        if (event.error === "audio-capture") msg = "No microphone found or access denied.";
        if (event.error === "not-allowed") msg = "Microphone access was denied. Please allow it in your browser settings.";

        alert(msg);
    };

    recognition.onend = () => {
        console.log("🎙️ Listening ended.");
        recognitionRef.current = null;
    };

    try {
        recognition.start();
        recognitionRef.current = recognition;
    } catch (err) {
        console.error("Failed to start recognition:", err);
    }
};

    const addMessage = (role: "user" | "ai", text: string) => {
        setMessages((prev) => [...prev, { role, text }]);
    };


    const genAI = new GoogleGenerativeAI("AIzaSyBH6490mW5wH11PjxQLJehnPuyMHRo9CUY");

    const getAIResponse = async (text: string): Promise<string> => {
        try {
            const model = genAI.getGenerativeModel({
                model: "gemini-2.5-flash",   // ← changed here
            });

            const prompt = `
You are a friendly and patient English speaking coach.
- Correct any grammar, pronunciation hints, or awkward phrasing.
- Then reply naturally and encouragingly in normal conversation style.
- Keep responses concise (1-3 sentences) unless the user asks for explanation.

User: ${text}
`;

            const result = await model.generateContent(prompt);
            const reply = result.response.text();

            return reply || "Sorry, I didn't catch that. Could you say it again?";
        } catch (err: any) {
            console.error("❌ AI error:", err);
            // Optional: show more helpful message in production
            return "Hmm, I'm having trouble connecting right now. Try again in a moment!";
        }
    };
    const speak = (text: string) => {
        console.log("🔊 Speaking:", text);

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    };

    return (
        <div style={{ padding: 20, background: "#9a9595", minHeight: "100vh" }}>
            <Navbar level={level} />
            <h2 style={{ color: "#333" }}>AI English Coach</h2>

            <select
                onChange={(e) => setMode(e.target.value as any)}
                style={{ padding: 8 }}
            >
                <option value="speak">Speak Mode</option>
                <option value="roleplay">Role Play</option>
            </select>

            <br /><br />

            {mode === "speak" && (
                <button
                    onClick={startListening}
                    style={{
                        padding: "10px 20px",
                        background: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: 5,
                    }}
                >
                    🎤 Speak
                </button>
            )}

            {loading && <p>🤖 Thinking...</p>}

            <div style={{ marginTop: 20 }}>
                {messages.map((m, i) => (
                    <div
                        key={i}
                        style={{
                            background: m.role === "user" ? "#10dd81" : "#000000",
                            padding: 10,
                            marginBottom: 10,
                            borderRadius: 8,
                        }}
                    >
                        <b>{m.role}:</b> {m.text}
                    </div>
                ))}
            </div>
        </div>
    );
}