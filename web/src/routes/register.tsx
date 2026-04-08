import { Component, Show, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";
import { login } from "@store/auth";

import styles from "@styles/Login.module.css"

const Register: Component = () => {
  // Navigator
  const navigate = useNavigate();

  // Registration data
  const [name, setName] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  // Registration status
  const [error, setError] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  // Registation data validation
  const validateForm = () => {
    if (name().trim().length < 2) {
      setError("Invalid name");
      return false;
    }
    // if (!username().includes("@")) {
    //   setError("Invalid username");
    //   return false;
    // }
    if (password().length < 8) {
      setError("Password is too short");
      return false;
    }

    setError("");
    return true;
  };

  // Registration action
  const handleRegister = async (e: Event) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://a770dbb4-5041-4cfb-a9b7-9ddf5b97bc93.mock.pstmn.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username(),
          password: password(),
          name: name()
        }),
      });

      if (!response.ok) {
        throw new Error("Registration error");
      }

      //const data = await response.json();
      
      // Se l'API logga direttamente l'utente dopo la registrazione:
      // if (data.token) {
      //   login(data.token);
      //   navigate("/");
      // } else {
        // Altrimenti lo mandiamo al login
        navigate("/login");
      //}
    } catch (err: any) {
      setError(err.message || "Connection error. Retry again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div class={styles.pageWrapper}>
      <header class={styles.header}>
        <A href="/" class={styles.logoText}>M.EX.</A>
        <nav>
          <A href="/" class={styles.navLink}>{t('nav.home')}</A>
        </nav>
      </header>

      <main class={styles.mainContent}>
        <div 
          class={styles.bgWrapper}
          style={{ "background-image": "url('https://images.unsplash.com/photo-1620215165604-1b157cb7a60b?q=80&w=1600&auto=format&fit=crop')" }}
        >
          <div class={styles.overlay}></div>
        </div>

        <div class={styles.formContainer}>
          <h1 class={styles.title}>M.EX.</h1>
          <h2 class={styles.subtitle}>{t('auth.registerSubtitle')}</h2>

          {/* Error box */}
          <Show when={error()}>
            <div class="mb-4 text-red-500 text-sm tracking-widest uppercase font-medium text-center">
              {error()}
            </div>
          </Show>

          {/* Registration form */}
          <form class={styles.form} onSubmit={handleRegister}>
            <input 
              type="text" 
              placeholder={t('auth.name')} 
              class={`${styles.input} ${error() && name().length < 2 ? 'border-red-500' : ''}`}
              value={name()}
              onInput={(e) => setName(e.currentTarget.value)}
              required
            />
            <input 
              type="username" 
              placeholder={t('auth.username')} 
              class={`${styles.input} ${error() /*&& !username().includes('@')*/ ? 'border-red-500' : ''}`}
              value={username()}
              onInput={(e) => setUsername(e.currentTarget.value)}
              required
            />
            <input 
              type="password" 
              placeholder={t('auth.password')} 
              class={`${styles.input} ${error() && password().length > 0 && password().length < 8 ? 'border-red-500' : ''}`}
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              required
              minlength="8"
            />
            
            <div class={styles.actions}>
              <button type="submit" class={styles.submitBtn} disabled={isLoading()}>
                {isLoading() ? 'Registering...' : t('auth.registerBtn')}
              </button>
            </div>
          </form>

          <p class={styles.footerText}>
            {t('auth.hasAccount')} 
            <A href="/login" class={styles.registerLink}>{t('auth.loginLink')}</A>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
