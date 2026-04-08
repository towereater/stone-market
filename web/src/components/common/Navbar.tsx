import { Component, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { locale, setLocale, t, Locale } from "@store/i18n";
import { isAuthenticated, logout } from "@store/auth";

import styles from "@styles/Navbar.module.css";

const Navbar: Component = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header class={styles.header}>
      
      <A href="/" class="flex items-center gap-2">
        <div class={styles.logoText}>
          M
        </div>
      </A>

      <nav class={styles.navLinks}>
        <A href="/" class={styles.link} activeClass={styles.linkActive}>
          {t('nav.home')}
        </A>
        <A href="/buy" class={styles.link} activeClass={styles.linkActive}>
          {t('nav.buy')}
        </A>
        <A href="/sell" class={styles.link} activeClass={styles.linkActive}>
          {t('nav.sell')}
        </A>
        <A href="/about" class={styles.link} activeClass={styles.linkActive}>
          {t('nav.about')}
        </A>
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
              <A href="/register" class={styles.btnRegister}>
                {t('nav.register').toUpperCase()}
              </A>
              <A href="/login" class={styles.btnLogin}>
                {t('nav.login').toUpperCase()}
              </A>
            </>
          }
        >
          <button onClick={handleLogout} class={styles.btnLogin}>
            Logout
          </button>
        </Show>
      </div>
    </header>
  );
};

export default Navbar;
