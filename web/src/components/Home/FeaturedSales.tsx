import { Component, For } from "solid-js";
import { t } from "@store/i18n";
import FeaturedItemCard from "@components/Home/FeaturedItemCard";
import { FeaturedItem } from "@classes/FeaturedItem";

import styles from "@styles/FeaturedSales.module.css";

const FeaturedSales: Component = () => {
  const featuredItems: FeaturedItem[] = [
    { id: 1, name: "Verde Alpi", dim: "100x100", seller: "Mario Rossi SRL", img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=400&auto=format&fit=crop" },
    { id: 2, name: "Calacatta Gold", dim: "120x120", seller: "Marmi Pregiati SPA", img: "https://images.unsplash.com/photo-1620215165604-1b157cb7a60b?q=80&w=400&auto=format&fit=crop" },
    { id: 3, name: "Nero Marquina", dim: "80x80", seller: "Stone Design", img: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section class={styles.section}>
      <div class={styles.header}>
        <h2 class={styles.title}>
          {t('featured.title')}
        </h2>
      </div>

      <div class={styles.carousel}>
        <button class={styles.arrowBtn}>&lsaquo;</button>

        <div class={styles.grid}>
          <For each={featuredItems}>
            {(item) => <FeaturedItemCard item={item} />}
          </For>
        </div>

        <button class={styles.arrowBtn}>&rsaquo;</button>
      </div>
    </section>
  );
};

export default FeaturedSales;
