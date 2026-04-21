export const getAllWords = async () => {
  const res = await fetch("http://localhost:5000/api/words");
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to fetch words");
  }

  return data;
};