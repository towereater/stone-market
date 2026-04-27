import { Component } from "solid-js";

import Button from "@components/ui/Button";

import styles from "@styles/ListingsHistory.module.css";

const ListingFilterMenu: Component = () => {
  return (
      <aside class={styles.filterSidebar}>
        <h2 class={styles.filterTitle}>Filters</h2>

        <div class={styles.filterGroup}>
          <div class={styles.filterLabel}>
            Marble type
            <span>&#8964;</span>
          </div>
        </div>

        <div class={styles.filterGroup}>
          <div class={styles.filterLabel}>
            Listing date
            <span>&#8964;</span>
          </div>
        </div>

        <div class="flex gap-4 mt-8">
          <Button variant="secondary">Apply</Button>
          <Button variant="primary">Clear</Button>
        </div>
      </aside>
  );
};

export default ListingFilterMenu;
