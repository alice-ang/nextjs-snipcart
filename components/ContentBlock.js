import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../utils";
import { TextBlock } from "./TextBlock";

const ContentWrapper = styled.div({
  display: "flex",
});

export const ContentBlock = ({ image, textBlock }) => {
  return (
    <ContentWrapper>
      <Image
        src={urlFor(image).url()}
        layout="fill"
        objectFit="cover"
        priority
        alt="alt"
      />
      {textBlock && <TextBlock color={theme.colors.accent} block={textBlock} />}
    </ContentWrapper>
  );
};
