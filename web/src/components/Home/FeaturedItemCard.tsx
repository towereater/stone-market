import { Component } from "solid-js";
import { t } from "@store/i18n";
import { FeaturedItem } from "@classes/FeaturedItem";

import styles from "@styles/FeaturedItemCard.module.css";

interface FeaturedItemCardProps {
  item: FeaturedItem;
}

const FeaturedItemCard: Component<FeaturedItemCardProps> = (props) => {
  return (
    <div class={styles.card}>
      <div class={styles.imgWrapper}>
        <img 
          src={props.item.img} 
          alt={props.item.name} 
          class={styles.img}
        />
      </div>
      <div class={styles.textWrapper}>
        <h3 class={styles.name}>{props.item.name}</h3>
        <p class={styles.detail}>{t('featured.dimensions')}: {props.item.dim}</p>
        <p class={styles.detail}>{t('featured.seller')}: {props.item.seller}</p>
      </div>
    </div>
  );
};

export default FeaturedItemCard;
