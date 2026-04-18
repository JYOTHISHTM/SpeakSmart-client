const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = {
  googleLogin: async (access_token: string) => {
    const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ access_token }),
    });

    return res.json();
  },
};