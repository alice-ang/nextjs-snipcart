import Head from "next/head";
import styled from "styled-components";
import { Breakpoints } from "../styles/styles";
import Header from "../components/Header";
const LayoutContainer = styled.div({
  // [Breakpoints.BigScreenOrLarger]: {
  //   width: "80%",
  //   margin: "0 auto",
  // },
});

export default function Layout({ children }) {
  return (
    <LayoutContainer>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />

        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
        />

        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
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
    </LayoutContainer>
  );
}