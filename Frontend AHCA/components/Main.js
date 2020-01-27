import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";
import Hero from "./Hero";
import ProductsFeature from "./ProductsFeature";

const Main = () => (
  <ThemeProvider theme={theme}>
    <Hero />
    <ProductsFeature />
  </ThemeProvider>
);
export default Main;
