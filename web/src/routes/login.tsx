import { Component, Show, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";
import { login } from "@store/auth";

import styles from "@styles/Login.module.css"

const Login: Component = () => {
  // Navigator
  const navigate = useNavigate();

  // Login data
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  // Login status
  const [error, setError] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  // Login data validation
  const validateForm = () => {
    // if (!username().includes("@")) {
    //   setError("Invalid username");
    //   return false;
    // }
    if (password().trim().length === 0) {
      setError("Password is mandatory");
      return false;
    }

    setError("");
    return true;
  };

  // Login action
  const handleLogin = async (e: Event) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://a770dbb4-5041-4cfb-a9b7-9ddf5b97bc93.mock.pstmn.io/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username(),
          password: password()
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      
      if (data.authorization) {
        login(data.authorization);
        navigate("/");
      }
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
          <h2 class={styles.subtitle}>{t('auth.loginSubtitle')}</h2>

          {/* Error box */}
          <Show when={error()}>
            <div class="mb-4 text-red-500 text-sm tracking-widest uppercase font-medium">
              {error()}
            </div>
          </Show>

          {/* Login form */}
          <form class={styles.form} onSubmit={handleLogin}>
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
              class={`${styles.input} ${error() && password().length === 0 ? 'border-red-500' : ''}`}
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              required
            />
            
            <div class={styles.actions}>
              <button type="submit" class={styles.submitBtn} disabled={isLoading()}>
                {isLoading() ? 'Logging in...' : t('auth.loginBtn')}
              </button>
              <a href="#" class={styles.forgotPwd}>
                {t('auth.forgotPwd')}
              </a>
            </div>
          </form>

          <p class={styles.footerText}>
            {t('auth.noAccount')} 
            <A href="/register" class={styles.registerLink}>{t('auth.registerLink')}</A>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
