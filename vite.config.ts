import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: false,
    rollupOptions: {
      input: "src/unicornui.scss",
      output: [
        {
          assetFileNames: "[name].[ext]",
        },
        {
          assetFileNames: "[name].min.[ext]",
        },
      ],
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { src: "src/unicornui.scss", dest: "" },
        { src: "src/lib/**", dest: "lib" },
      ],
    }),
  ],
})
