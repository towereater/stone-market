import { createSignal } from "solid-js";

export type Locale = "en" | "it";
export const [locale, setLocale] = createSignal<Locale>("en");

interface Dictionary {
  nav: {
    home: string;
    buy: string;
    sell: string;
    about: string;
    register: string;
    login: string;
    logout: string;
  };
  hero: { title: string; subtitle: string; buy: string; sell: string };
  featured: { title: string; dimensions: string; seller: string };
  auth: {
    loginSubtitle: string;
    username: string;
    password: string;
    loginBtn: string;
    forgotPwd: string;
    noAccount: string;
    registerLink: string;
    registerSubtitle: string;
    name: string;
    registerBtn: string;
    hasAccount: string;
    loginLink: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      buy: "Buy",
      sell: "Sell",
      about: "About",
      register: "Register",
      login: "Login",
      logout: "Logout"
    },
    hero: { title: "MARBLE EXCHANGE", subtitle: "Curated Slabs for Visionary Designs", buy: "BUY MARBLE", sell: "SELL MARBLE" },
    featured: { title: "FEATURED SALES", dimensions: "Dimensions", seller: "Seller" },
    auth: {
      loginSubtitle: "Log In to your account",
      username: "Username",
      password: "Password",
      loginBtn: "LOG IN",
      forgotPwd: "Forgot password?",
      noAccount: "Don't have an account?",
      registerLink: "Register now!",
      registerSubtitle: "Create your account",
      name: "Full Name",
      registerBtn: "REGISTER",
      hasAccount: "Already have an account?",
      loginLink: "Log in!"
    }
  },
  it: {
    nav: {
      home: "Home",
      buy: "Acquista",
      sell: "Vendi",
      about: "Chi siamo",
      register: "Registrati",
      login: "Accedi",
      logout: "Esci"
    },
    hero: { title: "MARBLE EXCHANGE", subtitle: "Lastre Selezionate per Design Visionari", buy: "COMPRA MARMO", sell: "VENDI MARMO" },
    featured: { title: "VENDITE IN EVIDENZA", dimensions: "Dimensioni", seller: "Venditore" },
    auth: {
      loginSubtitle: "Accedi al tuo account",
      username: "Username",
      password: "Password",
      loginBtn: "ACCEDI",
      forgotPwd: "Hai dimenticato la password?",
      noAccount: "Non hai un account?",
      registerLink: "Registrati ora!",
      registerSubtitle: "Crea un account",
      name: "Nome Completo",
      registerBtn: "REGISTRATI",
      hasAccount: "Hai già un account?",
      loginLink: "Accedi!"
    }
  }
};

// Translate function
// Example use: t("nav.home")
export function t(key: string): string {
  const keys = key.split('.');
  let value: any = dictionaries[locale()];
  for (const k of keys) {
    if (value) value = value[k];
  }
  return (value as string) || key;
}