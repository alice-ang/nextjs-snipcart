import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";
import Layout from "../components/Layout";
import { theme } from "../styles/styles";
import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <div className="fb-customerchat" page_id="734860390568287"></div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
