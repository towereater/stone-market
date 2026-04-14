import { Component, createSignal, For, Show } from "solid-js";
import { Listing } from "@/classes/Listing";

import styles from "@styles/ListingsHistory.module.css";

const ListingsHistory: Component = () => {
  const [expandedCards, setExpandedCards] = createSignal<number[]>([]);

  const mockListings: Listing[] = [
    { id: 1, title: "Verde Alpi", date: "2025-01-01 14:00:00", size: "120cm x 90cm", slabs: 10, image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=200&auto=format&fit=crop" },
    { id: 2, title: "Verde Alpi", date: "2025-01-01 14:00:00", size: "120cm x 90cm", slabs: 10, image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=200&auto=format&fit=crop" },
    { id: 3, title: "Verde Alpi", date: "2025-01-01 14:00:00", size: "120cm x 90cm", slabs: 10, image: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?q=80&w=200&auto=format&fit=crop" },
  ];

  const toggleExpand = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    );
  };

  return (
    <div class={styles.pageWrapper}>
      
      <div class={styles.listContainer}>
        <h1 class={styles.pageTitle}>Listings History</h1>

        <For each={mockListings}>
          {(listing) => {
            const isExpanded = () => expandedCards().includes(listing.id);

            return (
              <div class={styles.card}>
                <img src={listing.image} alt={listing.title} class={styles.cardImg} />
                
                <div class={styles.cardInfo}>
                  <div class={styles.cardHeader}>
                    <div>
                      <h2 class={styles.title}>{listing.title}</h2>
                      <p class={styles.date}>Listing date: {listing.date}</p>
                    </div>
                    
                    <button 
                      class={isExpanded() ? styles.btnCollapse : styles.btnDetails}
                      onClick={() => toggleExpand(listing.id)}
                    >
                      {isExpanded() ? 'Collapse' : 'Details'}
                    </button>
                  </div>

                  <p class={styles.detailText}>Size: {listing.size}</p>
                  <p class={styles.detailText}>Available slabs: {listing.slabs}</p>

                  <Show when={isExpanded()}>
                    <div class={styles.docsArea}>
                      <div class={styles.docItem}>
                        <div class={styles.pdfIcon}>PDF</div>
                        <span class={styles.docName}>Marble.pdf</span>
                      </div>
                      <div class={styles.docItem}>
                        <div class={styles.pdfIcon}>PDF</div>
                        <span class={styles.docName}>Marble.pdf</span>
                      </div>
                    </div>
                  </Show>
                </div>
              </div>
            );
          }}
        </For>
      </div>

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

        <div class={styles.filterActions}>
          <button class={styles.btnApply}>Apply</button>
          <button class={styles.btnClear}>Clear</button>
        </div>
      </aside>

    </div>
  );
};

export default ListingsHistory;
