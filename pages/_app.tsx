import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";
import Layout from "../components/Layout";

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
