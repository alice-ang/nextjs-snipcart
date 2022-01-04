import { createGlobalStyle } from "styled-components";
import { styled, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,html {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4 {
font-family: 'Prata', serif;
}
`;

export const theme = {
  colors: {
    primary: "#f2f0ec",
    loader: "rgba(222, 222, 222, 0.3)",
    darkPrimary: "#dedede",
    light: "#fff",
    accent: "#e7e0d4",
    divider: "#e5e5e5",
    dark: "#191919",
    heart: "#f79",
    footer: "#a09891",
    text: "#a3a1a1",
    chat: "#0A7CFF",
  },
};

export const Breakpoints = {
  Small: "@media (min-width: 576px)",
  Medium: "@media (min-width: 768px)",
  Large: "@media (min-width: 992px)",
  XL: "@media (min-width: 1200px)",
  XXL: "@media (min-width: 1400px)",
};

export const wrapperStyle = ({ width }) => css`
  ${Breakpoints.XXL} {
    margin: 0 auto;
    width: ${width ?? undefined};
  }
`;

export const LayoutWidth = "70%";
