import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../utils";
import { TextBlock } from "./TextBlock";

const ContentWrapper = styled.div(({ isLeft }) => ({
  display: "flex",
  flexDirection: isLeft ? "row-reverse" : "row",
  flexWrap: "wrap",
  position: "relative",
}));

export const ContentBlock = ({ image, textBlock, isTextAlignedLeft }) => {
  return (
    <ContentWrapper isLeft={isTextAlignedLeft}>
      <div>
        <Image
          src={urlFor(image).url()}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          priority
          alt="alt"
        />
      </div>

      {textBlock && <TextBlock block={textBlock} />}
    </ContentWrapper>
  );
};
