import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutContainer = styled.div({});

const Content = styled.main({
  backgroundColor: "#f7f7f7",
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />

        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var chatbox = document.getElementById('fb-customer-chat');
          chatbox.setAttribute("page_id", "734860390568287");
          chatbox.setAttribute("attribution", "biz_inbox");
      
          window.fbAsyncInit = function() {
            FB.init({
              appId            : '734860390568287',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v12.0'
            });
          };
        
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '<https://connect.facebook.net/sv_SE/sdk/xfbml.customerchat.js>';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
            `,
        }}
      />
      <LayoutContainer>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </LayoutContainer>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/sv_SE/sdk.js"
      ></script>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
      ></script>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="ZmRjNjc1NTAtYWRlMS00MTk0LWFmMWQtYTlhMDU2ZDA0ODRjNjM3NzUwMjg1MDU2MDEzODMx"
        hidden
      ></div>
    </>
  );
}
