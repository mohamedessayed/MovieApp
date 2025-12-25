import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],

  build:{
    target:'esnext',
    minify:'esbuild',
    cssMinify:true,
    emptyOutDir:true,
    sourcemap:false,
    chunkSizeWarningLimit:500,
    rollupOptions:{
      output:{
        manualChunks:{
          react:['react','react-dom'],
        }
      }
    }
  }
})
