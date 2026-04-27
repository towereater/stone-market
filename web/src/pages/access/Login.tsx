import { Component, Show, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";
import { login } from "@store/auth";
import sessionService from "@services/session";

import Input from "@components/ui/Input";
import Button from "@components/ui/Button";

const Login: Component = () => {
  const navigate = useNavigate();

  // Form data
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  // Form status
  const [error, setError] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  // Form data validation
  const validateForm = () => {
    if (password().trim().length === 0) {
      setError("Password is mandatory");
      return false;
    }

    setError("");
    return true;
  };

  // Form action
  const handleLogin = async (e: Event) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await sessionService.createSession(username(), password());

      if (response.authorization) {
        login(response.authorization);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main class="flex flex-col items-center justify-center min-h-screen bg-cover bg-[url(/images/background-access.png)]">
      <div class="w-full max-w-md flex flex-col items-center text-center px-8 py-12 bg-white/50 backdrop-blur-md shadow-2xl">
        <h1 class="text-3xl font-light tracking-[0.2em] text-gray-900 mb-2">MARBLE EXCHANGE</h1>
        <h2 class="text-sm font-light text-gray-600 tracking-widest mb-10 uppercase">{t('auth.loginSubtitle')}</h2>

        {/* Error box */}
        <Show when={error()}>
          <div class="mb-4 text-red-500 text-sm tracking-widest font-medium">
            {error()}
          </div>
        </Show>

        {/* Login form */}
        <form class="w-full flex flex-col gap-6" onSubmit={handleLogin}>
          <Input
            id="username"
            class={`${error() && username().length < 2 ? 'border-red-500' : ''}`}
            label={t('auth.username')}
            type="text"
            placeholder={t('auth.username')}
            value={username()}
            onInput={(e) => setUsername(e.currentTarget.value)}
            required
          />
          <Input
            id="password"
            class={`${error() && password().length < 8 ? 'border-red-500' : ''}`}
            label={t('auth.password')}
            type="password"
            placeholder={t('auth.password')}
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
            required
          />
          <div class="flex flex-col gap-4 mt-6">
            <Button type="submit" variant="secondary" class="mx-16" disabled={isLoading()}>
              {isLoading() ? 'Logging in...' : t('auth.loginBtn')}
            </Button>
            <a href="#" class="text-gray-500 font-light text-xs tracking-widest hover:text-black transition-colors uppercase">
              {t('auth.forgotPwd')}
            </a>
          </div>
        </form>

        <p class="mt-10 text-xs font-light text-gray-600 tracking-widest uppercase">
          {t('auth.noAccount')}
          <A href="/register" class="text-accent font-medium hover:underline ml-1">{t('auth.registerLink')}</A>
        </p>
      </div>
    </main>
  );
};

export default Login;
