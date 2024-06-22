import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'


// https://vitejs.dev/config/
export default defineConfig({
    server: { https: true }, // Not needed for Vite 5+
    plugins: [react(), VitePWA({
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.js',
    registerType: 'autoUpdate',
    injectRegister: false,

    pwaAssets: {
      disabled: true,
      config: true,
    },

    manifest: {
      name: 'Guia Vital',
      short_name: 'Guia Vital',
      description: 'Cuidando da sua saúde a todo momento',
      theme_color: '#C7F5FF',
    },

    injectManifest: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})
