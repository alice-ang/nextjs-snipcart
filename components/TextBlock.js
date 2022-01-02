import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import { LayoutWidth, wrapperStyle } from "../styles/styles";

const Block = styled.div(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color ? color : undefined,
  padding: "1em",
}));

const Wrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

export const TextBlock = ({ color, text }) => {
  return (
    <Block color={color}>
      <Wrapper width={LayoutWidth}>
        <BlockContent
          blocks={text}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </Wrapper>
    </Block>
  );
};
