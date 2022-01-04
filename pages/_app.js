import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/styles";
import Layout from "../components/Layout";
import { theme } from "../styles/styles";
import "./_app.css";
import { MessengerChat } from "react-messenger-chat-plugin";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <MessengerChat
            pageId="734860390568287"
            language="sv_SE"
            themeColor={theme.colors.chat}
            height={24}
            autoExpand={true}
            debugMode={false}
          />
          ;
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
