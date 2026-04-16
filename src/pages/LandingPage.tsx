import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">SpeakSmart</h1>
      <p className="text-slate-300 mb-6">
        Practice English with AI.
      </p>

      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-600 px-6 py-3 rounded-lg">
          Login
        </Link>

        <Link
          to="/signup"
          className="border border-slate-500 px-6 py-3 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}