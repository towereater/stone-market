import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { t } from "@store/i18n";

import LanguageSelector from "@components/ui/LanguageSelector";
import NavbarLink from "../ui/NavbarLink";

const AccessNavbar: Component = () => {
  return (
    <header class="navbar">
      <A href="/" class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="w-10 h-10" />
      </A>

      <nav class="flex gap-10 font-medium text-sm tracking-widest">
        <NavbarLink href="/">
          {t('nav.home').toUpperCase()}
        </NavbarLink>
      </nav>

      <div class="flex items-center gap-6">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default AccessNavbar;
