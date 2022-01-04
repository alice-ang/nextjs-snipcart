import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";
import Layout from "../components/Layout";
import { theme } from "../styles/styles";
import "./_app.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <MessengerCustomerChat
            pageId="734860390568287"
            appId="317769970274664"
          />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
