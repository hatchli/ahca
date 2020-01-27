import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";
const theme = {
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  soothingPink: "rgb(252, 240, 227)",
  headingRed: "#F36B7F",
  maxWidth: [1, "768px", null, "1024px", "1536px"],
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  breakpoints: ["40em", "48em", "56em", "60em", "70em"],
  // breakpoints: ["40em", "52em", "64em", "70em", "76em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
    bold: 1.5
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em"
  },
  fonts: {
    body: "rtraleway",
    heading: "rtraleway",
    bold: "rtraleway"
  },
  ul: {
    listStyleType: "none"
  },
  text: {
    heading: {
      caps: {
        textTransform: "uppercase"
      }
    }
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid"
  ],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 63, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 63, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: "#393939",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    gray: " #777",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    black: "#393939",
    grey: "#3A3A3A",
    lightgrey: "#E1E1E1",
    offWhite: "#EDEDED",
    soothingPink: "rgb(252, 240, 227)",
    headingRed: "#F36B7F",
    white: "#fff",
    transparent: "transparent",
    blacks: [
      "rgba(0,0,0,.0125)",
      "rgba(0,0,0,.025)",
      "rgba(0,0,0,.05)",
      "rgba(0,0,0,.1)",
      "rgba(0,0,0,.2)",
      "rgba(0,0,0,.3)",
      "rgba(0,0,0,.4)",
      "rgba(0,0,0,.5)",
      "rgba(0,0,0,.6)",
      "rgba(0,0,0,.7)",
      "rgba(0,0,0,.8)",
      "rgba(0,0,0,.9)"
    ],
    whites: [
      "rgba(255,255,255,.0125)",
      "rgba(255,255,255,.025)",
      "rgba(255,255,255,.05)",
      "rgba(255,255,255,.1)",
      "rgba(255,255,255,.2)",
      "rgba(255,255,255,.3)",
      "rgba(255,255,255,.4)",
      "rgba(255,255,255,.5)",
      "rgba(255,255,255,.6)",
      "rgba(255,255,255,.7)",
      "rgba(255,255,255,.8)",
      "rgba(255,255,255,.9)"
    ],
    "dark-red": "#e7040f",
    red: "#ff4136",
    "light-red": "#ff725c",
    orange: "#ff6300",
    gold: "#ffb700",
    yellow: "#ffd700",
    "light-yellow": "#fbf1a9",
    purple: "#5e2ca5",
    "light-purple": "#a463f2",
    "dark-pink": "#d5008f",
    "hot-pink": " #ff41b4",
    pink: "#ff80cc",
    "light-pink": "#ffa3d7",
    "dark-green": "#137752",
    green: "#19a974",
    "light-green": "#9eebcf",
    navy: "#001b44",
    "dark-blue": "#00449e",
    blue: "#357edd",
    "light-blue": "#96ccff",
    "lightest-blue": "#cdecff",
    "washed-blue": "#f6fffe",
    "washed-green": "#e8fdf5",
    "washed-yellow": "#fffceb",
    "washed-red": "#ffdfdf"
  },
  variants: {
    addToCart: {
      borderRadius: 2,
      bg: "blue",
      color: "white",
      height: [4, 6],
      width: [6, 8]
    }
  }
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 2rem 0rem 0rem 0rem;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'rtraleway';
    src: url('/static/rtraleway-bold-webfont.woff2') format('woff2');
    font-weight: bold;
    font-style: bold;
  }
  @font-face {
    font-family: 'rtraleway';
    src: url('/static/rtraleway-regular-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'rtraleway';
    background-color: ${props => props.theme.offWhite};
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    font-family: 'rtraleway';
  }
  button {
    font-family: 'rtraleway';
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <Footer />
        </StyledPage>
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}

export default Page;
