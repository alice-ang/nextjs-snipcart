import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../utils";
import { Breakpoints } from "../styles/styles";

const ImageContainer = styled.div({});

const MainImage = styled(Image)({});

export const ImageGrid = ({ mainImage, images }) => {
  const [mainUrl, setMainUrl] = useState("");

  return (
    <ImageContainer>
      <MainImage
        src={urlFor(mainImage).url()}
        layout="fill"
        objectFit="cover"
        priority
        alt="alt"
      />
      {images.map((image) => {
        return (
          <Image
            src={urlFor(image).url()}
            layout="fill"
            objectFit="cover"
            priority
            alt="alt"
          />
        );
      })}
    </ImageContainer>
  );
};
