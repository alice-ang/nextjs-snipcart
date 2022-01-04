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
            themeColor={"#F2F3G2"}
            height={24}
            loggedInGreeting="Hello logged in user!"
            loggedOutGreeting="Hello stranger!"
            autoExpand={true}
            debugMode={false}
            onMessengerShow={() => {
              console.log("onMessengerShow");
            }}
            onMessengerHide={() => {
              console.log("onMessengerHide");
            }}
            onMessengerDialogShow={() => {
              console.log("onMessengerDialogShow");
            }}
            onMessengerDialogHide={() => {
              console.log("onMessengerDialogHide");
            }}
          />
          ;
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
