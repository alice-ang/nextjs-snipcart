import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body,html {
margin: 0;
box-sizing: border-box;
background: #f0f0f0;
font-family: Arial, Helvetica, sans-serif;
}
`;
export const theme = {
  colors: {
    primary: "#f0f0f0",
    darkPrimary: "#dedede",
    divider: "#e3e3e3",
    dark: "#191919",
    heart: "#f79",
  },
};
export const Breakpoints = {
  TabletOrLarger: "@media (min-width: 501px)",
  LaptopOrLarger: "@media (min-width: 813px)",
  TabletOrSmaller: "@media (max-width: 812px)",
  MediumScreenOrLarger: "@media (min-width: 990px)",
  BigScreenOrLarger: "@media (min-width: 1246px)",
};
