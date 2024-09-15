import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  optimizeDeps: {
    include: ["pdfjs-dist"], // optionally specify dependency name
    esbuildOptions: {
      supported: {
        "top-level-await": true
      },
    },
  },

  build: {
    sourcemap: true
  },

  plugins: [sentryVitePlugin({
    org: "abdul-ag",
    project: "javascript-nextjs"
  })]
});