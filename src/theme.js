import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  breakpoints: ["768px", "1199px", "1440px"],
  colors: {
    ...theme.colors,
    transparent: "transparent",
    orange: {
      ...theme.colors.orange,
      brand: "#ec1639",
      hover: "#d53550",
    },
    blue: {
      ...theme.colors.blue,
      brand: "#2e6ac7",
    },
    black: {
      ...theme,
      soft: "#758190",
      semiSoft: "#666",
      dark: "#111",
    },
    white: "#fff",
    red: {
      ...theme.colors.red,
      customRed: "#e9494f",
      hover: "#c52335",
    },
    green: {
      ...theme.colors.green,
      brand: "#009387",
      dark: "#2C7A7B",
      soft: "#319795",
      hover: "#16ab89",
    },
    gray: {
      ...theme.colors.gray,
      soft: "#f6f8f9",
      hover: "#edf2f5",
    },
  },
  borderRadius: {
    soft: "4px",
    full: "9999px",
  },
};
