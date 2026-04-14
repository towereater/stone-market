import { Component, createSignal } from "solid-js";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

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

    // TODO: PERFORM API CALL
    
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
              <Input
                label="Full Name" 
                value={name()} 
                onInput={(e) => setName(e.currentTarget.value)} 
              />
            </div>
            <div class={styles.formGroup}>
              <Input
                label="Email Address"
                type="email"
                value={email()}
                disabled
                class="bg-gray-100 cursor-not-allowed text-gray-500"
              />
            </div>
            <div class={styles.formGroup}>
              <Input
                label="Phone Number"
                type="tel"
                value={phone()}
                onInput={(e) => setPhone(e.currentTarget.value)}
              />
            </div>
          </div>

          <h2 class={styles.sectionTitle}>Business Details</h2>
          <div class={styles.formGrid}>
            <div class={styles.formGroup}>
              <Input
                label="Company Name"
                value={company()}
                onInput={(e) => setCompany(e.currentTarget.value)}
              />
            </div>
          </div>

          <Button type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
