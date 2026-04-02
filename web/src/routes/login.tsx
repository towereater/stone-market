import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { t } from "@store/i18n";

const Login: Component = () => {
  return (
    <div class="min-h-screen flex flex-col relative">
      <main class="flex-grow relative flex flex-col items-center justify-center">
        <div 
          class="absolute inset-0 bg-cover bg-center z-0"
          style={{ "background-image": "url('https://images.unsplash.com/photo-1620215165604-1b157cb7a60b?q=80&w=1600&auto=format&fit=crop')" }}
        >
          <div class="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        </div>

        <div class="relative z-10 w-full max-w-md flex flex-col items-center text-center px-4 py-8">
          <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-2xl text-gray-600 shadow-inner mb-4">
            M
          </div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2 tracking-wide">MARBLE EXCHANGE</h1>
          <h2 class="text-xl font-medium text-gray-800 mb-8">{t('auth.loginSubtitle')}</h2>

          <form class="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('auth.email')} 
              class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
            />
            <input 
              type="password" 
              placeholder={t('auth.password')} 
              class="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
            />
            
            <div class="flex items-center gap-4 mt-2">
              <button 
                type="submit" 
                class="bg-blue-800 hover:bg-blue-900 text-white px-8 py-2.5 rounded-md font-semibold transition-colors shadow-md"
              >
                {t('auth.loginBtn')}
              </button>
              <a href="#" class="text-blue-800 font-medium text-sm hover:underline">
                {t('auth.forgotPwd')}
              </a>
            </div>
          </form>

          <p class="mt-8 text-sm font-medium text-gray-800">
            {t('auth.noAccount')} <A href="/register" class="text-blue-800 hover:underline">{t('auth.registerLink')}</A>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
