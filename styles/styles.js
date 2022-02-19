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
    textNeutral: "#6c6b6b",
    chat: "#0A7CFF",
    rainbow:
      "linear-gradient( 90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 154, 0, 1) 10%, rgba(208, 222, 33, 1) 20%, rgba(79, 220, 74, 1) 30%, rgba(63, 218, 216, 1) 40%, rgba(47, 201, 226, 1) 50%, rgba(28, 127, 238, 1) 60%, rgba(95, 21, 242, 1) 70%, rgba(186, 12, 248, 1) 80%, rgba(251, 7, 217, 1) 90%, rgba(255, 0, 0, 1) 100%)",
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
  ${Breakpoints.XL} {
    margin: 0 auto;
    width: ${width ?? undefined};
  }
`;

export const LayoutWidth = "60%";
