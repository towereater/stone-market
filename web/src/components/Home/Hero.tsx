import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";

import Button from "@components/ui/Button";

const Hero: Component = () => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate("/search");
  };
  
  return (
    <section class="min-h-200 mx-0 md:mx-30 lg:mx-48 flex flex-col items-center justify-center bg-cover bg-[url(/images/background.png)]">
      <div class="text-primary text-center px-0 md:px-32 lg:px-48">
        <h1 class="text-5xl md:text-7xl tracking-[0.2em]">{t('hero.title')}</h1>
        <p class="text-lg md:text-xl font-light tracking-widest">{t('hero.subtitle')}</p>
        <div class="flex justify-center px-24 my-12 gap-6">
          <Button variant="secondary" class="w-12 flex-1" onClick={handleBuy}>
            {t('hero.buy')}
          </Button>
          <Button variant="primary" class="w-12 flex-1">{t('hero.sell')}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
