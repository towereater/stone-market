const sessionService = {
  createSession: async (username: string, password: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Invalid credentials");
    }

    return response.json();
  },
};

export default sessionService;
