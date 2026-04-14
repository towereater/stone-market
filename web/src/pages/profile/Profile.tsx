import { Component, createSignal } from "solid-js";

import styles from "@styles/Profile.module.css";

const Profile: Component = () => {
  const [name, setName] = createSignal("Mario Rossi");
  const [email, setEmail] = createSignal("mario.rossi@example.com");
  const [company, setCompany] = createSignal("Rossi Marmi SRL");
  const [phone, setPhone] = createSignal("+39 333 1234567");

  const handleSave = (e: Event) => {
    e.preventDefault();
    console.log("Changing profile data:", {
        name: name(),
        email: email(),
        company: company(),
        phone: phone()
    });

    // TODO: Chiamata API PUT per aggiornare il profilo
    
    alert("Profile updated successfully!");
  };

  return (
    <div class={styles.container}>
      <h1 class={styles.pageTitle}>My Profile</h1>

      <div class={styles.formCard}>
        <form onSubmit={handleSave}>
          
          <h2 class={styles.sectionTitle}>Personal Information</h2>
          <div class={styles.formGrid}>
            <div class={styles.formGroup}>
              <label class={styles.label}>Full Name</label>
              <input 
                type="text" 
                class={styles.input} 
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div class={styles.formGroup}>
              <label class={styles.label}>Email Address</label>
              <input 
                type="email" 
                class={styles.input} 
                value={email()}
                disabled
              />
            </div>
            <div class={styles.formGroup}>
              <label class={styles.label}>Phone Number</label>
              <input 
                type="tel" 
                class={styles.input} 
                value={phone()}
                onInput={(e) => setPhone(e.currentTarget.value)}
              />
            </div>
          </div>

          <h2 class={styles.sectionTitle}>Business Details</h2>
          <div class={styles.formGrid}>
            <div class={styles.formGroup}>
              <label class={styles.label}>Company Name</label>
              <input 
                type="text" 
                class={styles.input} 
                value={company()}
                onInput={(e) => setCompany(e.currentTarget.value)}
              />
            </div>
          </div>

          <button type="submit" class={styles.btnSave}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
