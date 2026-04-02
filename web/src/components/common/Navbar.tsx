import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { locale, setLocale, t, Locale } from "@store/i18n";

const Navbar: Component = () => {
  return (
    <header class="bg-white py-4 px-8 flex items-center justify-between shadow-sm sticky top-0 z-50">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-xl text-gray-600 shadow-inner">
          M
        </div>
      </div>

      <nav class="hidden md:flex gap-8 font-semibold text-blue-900">
        <A href="/" class="hover:text-blue-600 transition-colors" activeClass="text-blue-600 border-b-2 border-blue-600">
          {t('nav.home')}
        </A>
        <A href="/buy" class="hover:text-blue-600 transition-colors" activeClass="text-blue-600 border-b-2 border-blue-600">
          {t('nav.buy')}
        </A>
        <A href="/sell" class="hover:text-blue-600 transition-colors" activeClass="text-blue-600 border-b-2 border-blue-600">
          {t('nav.sell')}
        </A>
        <A href="/about" class="hover:text-blue-600 transition-colors" activeClass="text-blue-600 border-b-2 border-blue-600">
          {t('nav.about')}
        </A>
      </nav>

      <div class="flex items-center gap-4">
          <select 
            class="bg-transparent text-sm border-none cursor-pointer outline-none font-semibold text-gray-600"
            value={locale()} 
            onChange={(e) => setLocale(e.currentTarget.value as Locale)}
          >
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
          <A href="/register" class="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-900 transition-colors">
            {t('nav.register')}
          </A>
          <A href="/login" class="border border-blue-800 text-blue-800 px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors bg-white">
            {t('nav.login')}
          </A>
      </div>
    </header>
  );
};

export default Navbar;
