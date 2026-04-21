const BASE_URL = "http://localhost:5000/api";

export const generateFIBExercise = async (payload: {
  difficulty: "easy" | "medium" | "hard";
  numBlanks: 5 | 10;
}) => {
  const res = await fetch(`${BASE_URL}/fill-blanks/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to generate exercise");
  }

  return data;
};