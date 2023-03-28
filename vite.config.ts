import { defineConfig, UserConfigExport } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

const config: UserConfigExport = defineConfig({
  build: {
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: "src/unicornui.scss",
      output: [
        {
          assetFileNames: "[name].[ext]",
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

export default config
