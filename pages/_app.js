import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";
import Layout from "../components/Layout";
import { theme } from "../styles/styles";

function MyApp({ Component, pageProps }) {
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
