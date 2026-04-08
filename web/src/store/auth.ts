import { createSignal } from "solid-js";

const getInitialToken = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("authToken");
  }
  return null;
};
export const [token, setToken] = createSignal<string | null>(getInitialToken());

export const isAuthenticated = () => token() !== null;

export const login = (newToken: string) => {
  setToken(newToken);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("authToken", newToken);
  }
};

export const logout = () => {
  setToken(null);
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem("authToken");
  }
};
