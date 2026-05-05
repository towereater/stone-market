import { Component, createSignal, onMount, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";
import { isAuthenticated, logout } from "@store/auth";

import Button from "@components/ui/Button";
import LanguageSelector from "@components/ui/LanguageSelector";
import NavbarLink from "@components/ui/NavbarLink";

const Navbar: Component = () => {
  const [isAuth, setIsAuth] = createSignal(false);

  onMount(() => {
    const checkUser = isAuthenticated();
    setIsAuth(checkUser);
  });

  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();

    const checkUser = isAuthenticated();
    setIsAuth(checkUser);

    navigate("/");
  };

  return (
    <header class="navbar">

      <A href="/" class="flex items-center">
        <img src="/images/logo.png" alt="Logo" class="w-10 h-10"/>
      </A>

      <nav class="flex gap-10 font-medium text-sm tracking-widest">
        <NavbarLink href="/">
          {t('nav.home').toUpperCase()}
        </NavbarLink>
        <NavbarLink href="/search">
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
        <LanguageSelector />

        <Show
          when={isAuth()}
          fallback={
            <div class="flex items-center gap-2">
              <Button variant="secondary" class="w-18 flex-1" onClick={() => navigate("/register")}>
                {t('nav.register')}
              </Button>
              <Button variant="primary" class="w-18 flex-1" onClick={() => navigate("/login")}>
                {t('nav.login')}
              </Button>
            </div>
          }
        ><div class="flex items-center gap-2">
            <Button variant="secondary" class="w-18 flex-1" onClick={() => navigate("/profile")}>
              {t('nav.profile')}
            </Button>
            <Button variant="primary" class="w-18 flex-1" onClick={handleLogout}>
              {t('nav.logout')}
            </Button>
          </div>
        </Show>
      </div>
    </header>
  );
};

export default Navbar;
