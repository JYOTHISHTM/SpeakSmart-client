const BASE_URL = "http://localhost:5000/api";

export const getDailyWord = async () => {
  const res = await fetch(`${BASE_URL}/words/daily`);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to fetch daily word");
  }

  return data;
};

export const saveWordToBank = async (wordData: any) => {
  const res = await fetch(`${BASE_URL}/words/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to save word");
  }

  return data;
};