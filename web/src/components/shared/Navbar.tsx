import { Component, createSignal, onMount, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { locale, setLocale, t, Locale } from "@store/i18n";
import { isAuthenticated, logout } from "@store/auth";

import { Button } from "@components/ui/Button";
import { NavbarLink } from "@components/ui/NavbarLink";

const Navbar: Component = () => {
  const [isAuth, setIsAuth] = createSignal(false);

  onMount(() => {
    const checkUser = isAuthenticated();
    setIsAuth(checkUser);
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogout = () => {
    logout();
    
    const checkUser = isAuthenticated();
    setIsAuth(checkUser);

    navigate("/");
  };

  return (
    <header class="absolute top-0 left-0 w-full py-6 px-10 flex items-center justify-between z-50 text-accent">

      <A href="/" class="flex items-center">
        <div class="font-bold text-2xl tracking-[0.2em]">
          M
        </div>
      </A>

      <nav class="md:flex gap-10 font-medium text-sm tracking-widest">
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

      <div class="flex items-center gap-6">
        <select
          class="text-sm cursor-pointer font-medium tracking-widest text-accent"
          value={locale()}
          onChange={(e) => setLocale(e.currentTarget.value as Locale)}
        >
          <option value="en" class="text-accent">EN</option>
          <option value="it" class="text-accent">IT</option>
        </select>

        <Show
          when={isAuth()}
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
