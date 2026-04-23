import { Component, Show, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import { t } from "@store/i18n";
import { userService } from "@services/user";

import styles from "@styles/Register.module.css";

import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

const Register: Component = () => {
  const navigate = useNavigate();

  // Form data
  const [name, setName] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  // Form status
  const [error, setError] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);

  // Form data validation
  const validateForm = () => {
    if (name().trim().length < 2) {
      setError("Invalid name");
      return false;
    }
    if (password().length < 8) {
      setError("Password is too short");
      return false;
    }

    setError("");
    return true;
  };

  // Form action
  const handleRegister = async (e: Event) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const response = await userService.createUser(name(), username(), password());

      navigate("/login");
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
        <h2 class="text-sm font-light text-gray-600 tracking-widest mb-10 uppercase">{t('auth.registerSubtitle')}</h2>

        {/* Error box */}
        <Show when={error()}>
          <div class="mb-4 text-red-500 text-sm tracking-widest font-medium">
            {error()}
          </div>
        </Show>

        {/* Registration form */}
        <form class="w-full flex flex-col gap-6" onSubmit={handleRegister}>
          <Input
            id="name"
            class={`${error() && name().trim().length < 2 ? 'border-red-500' : ''}`}
            label={t('auth.name')}
            type="text"
            placeholder={t('auth.name')}
            value={name()}
            onInput={(e) => setName(e.currentTarget.value)}
            required
          />
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
              {isLoading() ? 'Registering...' : t('auth.registerBtn')}
            </Button>
          </div>
        </form>

        <p class="mt-10 text-xs font-light text-gray-600 tracking-widest uppercase">
          {t('auth.hasAccount')}
          <A href="/login" class="text-accent font-medium hover:underline ml-1">{t('auth.loginLink')}</A>
        </p>
      </div>
    </main>
  );
};

export default Register;
