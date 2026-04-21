import { Component, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { locale, setLocale, t, Locale } from "@store/i18n";
import { isAuthenticated, logout } from "@store/auth";

import { Button } from "@components/ui/Button";
import { NavbarLink } from "@components/ui/NavbarLink";

import styles from "@styles/Navbar.module.css";

const Navbar: Component = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <header class={styles.header}>
      
      <A href="/" class="flex items-center gap-2">
        <div class={styles.logoText}>
          M
        </div>
      </A>

      <nav class={styles.navLinks}>
        <NavbarLink href="/">
          {t('nav.home').toUpperCase()}
        </NavbarLink>
        <NavbarLink href="/buy">
          {t('nav.buy').toUpperCase()}
        </NavbarLink>
        <NavbarLink href="/create-listing">
          {t('nav.sell').toUpperCase()}
        </NavbarLink>
        <NavbarLink href="/about">
          {t('nav.about').toUpperCase()}
        </NavbarLink>
      </nav>

      <div class={styles.actionsContainer}>
        <select 
          class={styles.languageSelect}
          value={locale()} 
          onChange={(e) => setLocale(e.currentTarget.value as Locale)}
        >
          <option value="en" class="text-black">EN</option>
          <option value="it" class="text-black">IT</option>
        </select>

        <Show
          when={isAuthenticated()} 
          fallback={
            <>
              <Button variant="secondary" onClick={handleRegister}>
                {t('nav.register')}
              </Button>
              <Button variant="primary" onClick={handleLogin}>
                {t('nav.login')}
              </Button>
            </>
          }
        >
          <NavbarLink href="/profile">
            {t('nav.profile').toUpperCase()}
          </NavbarLink>
          <Button variant="primary" onClick={handleLogout}>
            {t('nav.logout')}
          </Button>
        </Show>
      </div>
    </header>
  );
};

export default Navbar;
