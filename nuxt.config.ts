import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 css: ['~/assets/css/main.css'],
                    vite: {
                      plugins: [
                        tailwindcss(),
                        ],
                    },
  compatibilityDate: "2025-04-18",
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon']
})