import Head from "next/head";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LayoutContainer = styled.div({});

const Content = styled.main({
  backgroundColor: "#f7f7f7",
  height: "100vh",
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
      <LayoutContainer>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </LayoutContainer>
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="ZmRjNjc1NTAtYWRlMS00MTk0LWFmMWQtYTlhMDU2ZDA0ODRjNjM3NzUwMjg1MDU2MDEzODMx"
        hidden
      ></div>
    </>
  );
}
