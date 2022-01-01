import styled from "styled-components";
import { theme, Breakpoints } from "../styles/styles";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import { wrapperStyle } from "../styles/styles";

const Block = styled.div(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color ? color : undefined,
  padding: "1em",
}));

const ContentWrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

export const TextBlock = ({ width, color, text }) => {
  return (
    <Block color={color}>
      <ContentWrapper width={width}>
        <BlockContent
          blocks={text}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </ContentWrapper>
    </Block>
  );
};
