import { Component } from "solid-js";
import { locale, setLocale, t, Locale } from "@store/i18n";

const LanguageSelector: Component = () => {
  return (
    <select
      class="text-sm cursor-pointer font-medium tracking-widest text-accent"
      value={locale()}
      onChange={(e) => setLocale(e.currentTarget.value as Locale)}
    >
      <option value="en" class="text-accent">EN</option>
      <option value="it" class="text-accent">IT</option>
    </select>
  );
};

export default LanguageSelector;
