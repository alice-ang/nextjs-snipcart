import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../utils";
import { Breakpoints } from "../styles/styles";

const MainImage = styled.div`
  grid-area: main;
  cursor: default;
`;
const ImageContainer = styled.div`
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "main main main"
    "main main main"
    "main main main";
  cursor: pointer;
  ${Breakpoints.Large}: {
    grid-gap: 1rem;
  }
`;

export const ImageGrid = ({ images, variant }) => {
  const [mainUrl, setMainUrl] = useState(images[0]);

  useEffect(() => {
    if (variant !== null) {
      setMainUrl(variant);
    }
  }, [variant]);

  return (
    <ImageContainer>
      <MainImage>
        <Image
          src={urlFor(mainUrl).url()}
          width="800"
          height="1000"
          layout="intrinsic"
          objectFit="cover"
          alt="alt"
        />
      </MainImage>

      {images.map((image) => {
        return (
          <Image
            key={image._key}
            src={urlFor(image).url()}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt="alt"
            onClick={() => {
              setMainUrl(image);
            }}
          />
        );
      })}
    </ImageContainer>
  );
};
