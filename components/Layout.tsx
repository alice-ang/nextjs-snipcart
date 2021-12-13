import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

const LayoutContainer = styled.div({
  width: "min(800px, 100%)",
  margin: "0 auto",
  background: "red",
});

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
}
