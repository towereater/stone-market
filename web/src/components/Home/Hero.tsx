import { Component } from "solid-js";
import { t } from "@/store/i18n";

import styles from "@styles/Hero.module.css";

const Hero: Component = () => {
  return (
    <section class={styles.heroSection}>
      <div 
        class={styles.bgWrapper}
        style={{ "background-image": "url('https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div class={styles.overlay}></div>
      </div>

      <div class={styles.content}>
        <h1 class={styles.title}>{t('hero.title')}</h1>
        <p class={styles.subtitle}>{t('hero.subtitle')}</p>
        <div class={styles.btnContainer}>
          <button class={styles.btnPrimary}>{t('hero.buy')}</button>
          <button class={styles.btnSecondary}>{t('hero.sell')}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
