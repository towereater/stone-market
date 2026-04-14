import { Component } from "solid-js";
import { A } from "@solidjs/router";
import Navbar from "@/components/common/Navbar";

import styles from "@styles/ProfileLayout.module.css"

const ProfileLayout: Component<any> = (props) => {
  return (
    <div class={styles.layoutWrapper}>
      <Navbar/>

      <div class={styles.mainContainer}>
        
        <aside class={styles.sidebar}>
          <h2 class={styles.menuTitle}>Menu</h2>
          
          <div class={styles.menuSection}>
            <A href="/profile" class={styles.menuItem}>Profile</A>
          </div>

          <div class={styles.menuSection}>
            <h3 class={styles.sectionTitle}>Sell</h3>
            <div class={styles.menuList}>
              <A href="/profile/active-listings" class={styles.menuItem}>Active Listings</A>
              <A href="/profile/received-orders" class={styles.menuItem}>Received Orders</A>
              <A href="/profile/history" class={styles.menuItem} activeClass={styles.menuItemActive}>
                Listings History
              </A>
            </div>
          </div>

          <div class={styles.menuSection}>
            <h3 class={styles.sectionTitle}>Buy</h3>
            <div class={styles.menuList}>
              <A href="/profile/active-orders" class={styles.menuItem}>Active Orders</A>
              <A href="/profile/orders-history" class={styles.menuItem}>Orders History</A>
            </div>
          </div>

          <button class={styles.logoutBtn}>Log Out</button>
        </aside>

        <main class={styles.contentArea}>
          {props.children}
        </main>

      </div>
    </div>
  );
};

export default ProfileLayout;
