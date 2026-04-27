const userService = {
  createUser: async (name: string, username: string, password: string) => {
    const response = await fetch(`${import.meta.env.VITE_API_HOST}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        username,
        password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Registration error");
    }

    return response.json();
  }
};

export default userService;
