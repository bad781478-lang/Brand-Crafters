import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';

function asyncInitialCss() {
  return {
    name: 'async-initial-css',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+index-[^"]+\.css)">/g,
          [
            '<link rel="preload" as="style" crossorigin href="$1">',
            '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'">',
            '<noscript><link rel="stylesheet" crossorigin href="$1"></noscript>',
          ].join(''),
        );
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    asyncInitialCss(),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  build: {
    minify: 'oxc',
    sourcemap: false,
  },
});
