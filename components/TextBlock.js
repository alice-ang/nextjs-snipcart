import styled from "styled-components";
import { theme, Breakpoints } from "../styles/styles";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";

const Block = styled.div(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color ? color : undefined,
  padding: "1em",
}));

const ContentWrapper = styled.div(({ width }) => ({
  [Breakpoints.LaptopOrLarger]: {
    margin: "0 auto",
    width: width ?? undefined,
  },
}));

export const TextBlock = ({ color, text }) => {
  return (
    <Block color={color}>
      <ContentWrapper>
        <BlockContent
          blocks={text}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </ContentWrapper>
    </Block>
  );
};
