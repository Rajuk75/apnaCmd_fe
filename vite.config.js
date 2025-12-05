import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({

  plugins: [
    react({
      fastRefresh: true,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    visualizer({
      filename: './dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@react-three/fiber', '@react-three/drei'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: [
      'dev-ambikaschool.onrender.com',
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/three') ||
            id.includes('@react-three/fiber') ||
            id.includes('@react-three/drei')) {
            return 'three-vendor';
          }

          if (id.includes('node_modules/lucide-react')) {
            return 'icons-vendor';
          }
          if (id.includes('node_modules/axios') || id.includes('node_modules/lenis')) {
            return 'utils-vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
    minify: 'esbuild',
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
})
