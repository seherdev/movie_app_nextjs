// chakra-ui/theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7caca",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: `'Segoe UI', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default theme;
