import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client";
import { LayoutWidth, wrapperStyle } from "../styles/styles";
import { serializer } from "../utils";

const Block = styled.div(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color ? color : undefined,
  padding: "1em",
}));

const Wrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

export const TextBlock = ({ block, color }) => {
  return (
    <Block color={color}>
      <Wrapper width={LayoutWidth}>
        <BlockContent
          blocks={block.text}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
          serializers={serializer}
        />
      </Wrapper>
    </Block>
  );
};
