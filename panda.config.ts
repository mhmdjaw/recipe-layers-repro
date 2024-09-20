import { defineConfig, defineRecipe, defineSlotRecipe } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      // loader recipe
      recipes: {
        loader: defineRecipe({
          className: "loader",
          base: {
            fontWeight: "bold",
            fontSize: "md",
          },
          variants: {
            variant: {
              spinner: {
                color: "pink.500",
              },
            },
          },
          defaultVariants: { variant: "spinner" },
        }),
      },

      //button slot recipe
      slotRecipes: {
        button: defineSlotRecipe({
          className: "button",
          slots: ["loader"],
          base: {
            loader: { fontSize: "3xl" },
          },
          variants: {
            variant: {
              solid: {
                loader: { color: "blue.500" },
              },
            },
          },
          defaultVariants: { variant: "solid" },
        }),
      },
    },
  },

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
