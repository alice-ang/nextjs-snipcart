import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

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
  },
};
export const Breakpoints = {
  TabletOrLarger: "@media (min-width: 501px)",
  LaptopOrLarger: "@media (min-width: 813px)",
  TabletOrSmaller: "@media (max-width: 812px)",
  MediumScreenOrLarger: "@media (min-width: 990px)",
  BigScreenOrLarger: "@media (min-width: 1246px)",
};

export const wrapperStyle = ({ width }) => css`
  ${Breakpoints.LaptopOrLarger} {
    margin: 0 auto;
    width: ${width ?? undefined};
  }
`;
