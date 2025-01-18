import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
<<<<<<< HEAD
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        
=======
        main:    resolve(__dirname, "src/index.html"),
        cart:    resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
>>>>>>> 508cd9840bb44c53d5aecccd368f3faea001a87a
      },
    },
  },
});
