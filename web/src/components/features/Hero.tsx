import { Component } from "solid-js";
import { t } from "@/store/i18n";

const Hero: Component = () => {
  return (
    <section class="relative h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center">
      <div
        class="absolute inset-0 bg-cover bg-center z-0"
        style={{ "background-image": "url('https://images.unsplash.com/photo-1620215165604-1b157cb7a60b?q=80&w=1600&auto=format&fit=crop')" }}
      >
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="relative z-10 text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold tracking-wider mb-4 shadow-sm">
          {t('hero.title')}
        </h1>
        <p class="text-lg md:text-xl font-light mb-8">
          {t('hero.subtitle')}
        </p>
        <div class="flex justify-center gap-4">
          <button class="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-sm font-semibold transition-all">
            {t('hero.buy')}
          </button>
          <button class="bg-white/90 hover:bg-white text-blue-900 px-8 py-3 rounded-sm font-semibold transition-all shadow-md">
            {t('hero.sell')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
