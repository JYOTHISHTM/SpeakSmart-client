import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import AppFooter from "../components/AppFooter";

import {
  Brain,
  Clock3,
  Mic,
  Lightbulb,
  Trophy,
  BookOpen,
} from "lucide-react";

const levels = [
  { id: "easy", label: "Easy" },
  { id: "medium", label: "Medium" },
  { id: "hard", label: "Hard" },
];

const durations = [
  { id: 60, label: "1 Min" },
  { id: 120, label: "2 Min" },
  { id: 180, label: "3 Min" },
  { id: 300, label: "5 Min" },
];

const topics = [
  {
    id: 1,
    title: "Describe your dream job",
    tips: [
      "Talk about your daily work",
      "Mention salary or passion",
      "Explain why you like it",
    ],
  },
  {
    id: 2,
    title: "Your favorite movie",
    tips: [
      "Explain the story briefly",
      "Mention your favorite character",
      "Talk about emotions",
    ],
  },
  {
    id: 3,
    title: "A memorable trip",
    tips: [
      "Where did you go?",
      "Who went with you?",
      "Best moment from the trip",
    ],
  },
  {
    id: 4,
    title: "Technology in daily life",
    tips: [
      "Mention mobile apps",
      "Talk about social media",
      "Explain advantages",
    ],
  },
  {
    id: 5,
    title: "Healthy lifestyle",
    tips: [
      "Food habits",
      "Exercise routine",
      "Sleep importance",
    ],
  },
  {
    id: 6,
    title: "College life",
    tips: [
      "Friends and memories",
      "Favorite subject",
      "Challenges faced",
    ],
  },
  {
    id: 7,
    title: "Importance of communication",
    tips: [
      "Confidence building",
      "Career growth",
      "Daily conversations",
    ],
  },
  {
    id: 8,
    title: "Your favorite food",
    tips: [
      "Describe the taste",
      "Where you eat it",
      "Why you love it",
    ],
  },
];

export default function FluencyPage() {
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const [selectedTime, setSelectedTime] = useState(60);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(selectedTime);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!started) return;

    if (timeLeft <= 0) {
      setStarted(false);
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const feedback = useMemo(() => {
    return [
      "Try speaking with fewer pauses.",
      "Use longer sentences instead of short answers.",
      "Improve pronunciation clarity.",
      "Add examples while explaining points.",
      "Maintain a steady speaking speed.",
    ];
  }, []);

  const handleStart = () => {
    setFinished(false);
    setStarted(true);
    setTimeLeft(selectedTime);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7ff] to-[#eef1ff]">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="flex flex-col items-center px-4 py-10">
        <div className="max-w-5xl w-full">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Improve Your Fluency
            </h1>

            <p className="text-gray-500">
              Practice speaking on random topics and get instant feedback.
            </p>
          </div>

          {/* LEVEL */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <Brain className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Select Difficulty
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition
                    ${
                      selectedLevel === level.id
                        ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                        : "bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>

          {/* TIME */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <Clock3 className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Select Time
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              {durations.map((time) => (
                <button
                  key={time.id}
                  onClick={() => setSelectedTime(time.id)}
                  className={`px-6 py-3 rounded-2xl font-medium transition
                    ${
                      selectedTime === time.id
                        ? "bg-indigo-100 text-indigo-700 border border-indigo-300"
                        : "bg-gray-50 text-gray-700 border border-gray-200"
                    }`}
                >
                  {time.label}
                </button>
              ))}
            </div>
          </div>

          {/* TOPICS */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Select Topic
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-5 rounded-2xl text-left transition border
                    ${
                      selectedTopic.id === topic.id
                        ? "bg-indigo-100 border-indigo-300"
                        : "bg-gray-50 border-gray-200 hover:bg-white"
                    }`}
                >
                  <p
                    className={`font-medium ${
                      selectedTopic.id === topic.id
                        ? "text-indigo-700"
                        : "text-gray-700"
                    }`}
                  >
                    {topic.title}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Speaking Card */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-5">
              <Mic className="text-indigo-600" />
              <h2 className="text-xl font-semibold text-gray-800">
                Speaking Session
              </h2>
            </div>

            {/* Topic */}
            <div className="bg-indigo-50 rounded-2xl p-5 mb-5 border border-indigo-100">
              <p className="text-sm text-indigo-500 mb-2">Selected Topic</p>

              <h3 className="text-2xl font-bold text-gray-800">
                {selectedTopic.title}
              </h3>
            </div>

            {/* Timer */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-40 h-40 rounded-full border-8 border-indigo-100 flex items-center justify-center bg-indigo-50 mb-5">
                <span className="text-4xl font-bold text-indigo-700">
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </span>
              </div>

              {!started ? (
                <button
                  onClick={handleStart}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow transition"
                >
                  Start Speaking
                </button>
              ) : (
                <button className="px-8 py-3 bg-red-500 text-white rounded-full">
                  Listening...
                </button>
              )}
            </div>

            {/* Tips while speaking */}
            {!finished && (
              <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-5 mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="text-yellow-600" />
                  <h3 className="font-semibold text-gray-800">
                    Points to keep speaking
                  </h3>
                </div>

                <ul className="space-y-2">
                  {selectedTopic.tips.map((tip, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      • {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Feedback */}
            {finished && (
              <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="text-green-600" />

                  <h3 className="text-xl font-semibold text-gray-800">
                    Session Feedback
                  </h3>
                </div>

                <div className="space-y-3">
                  {feedback.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 border border-gray-100"
                    >
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleStart}
                  className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition"
                >
                  Practice Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
}