import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// Se instalo vite-plugin-svgr para poder convertir los svg en componentes
// Es necesario añadirlo en configuracion de vite para que se aplique a todo el pro

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
})
