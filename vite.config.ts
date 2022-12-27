import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        // enables us to size svg's with the css font-size property
        icon: '1em',
        // enables us to colour svg's with the css color property
        // you need to set the relevant colours to #000000 in the svg file for this to work
        // TODO: SS find a way to automagically do this with all colours, e.g. svgo convertColors plugin
        replaceAttrValues: { '#000000': 'currentColor' },
      },
    }),
  ],

  // @ts-expect-error vite types are incorrect
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
