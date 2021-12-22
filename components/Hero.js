import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../utils";

const HeroContainer = styled.div({
  display: "block",
  position: "relative",
  textAlign: "center",
  height: "40vh",
});

const HeroText = styled.div({
  opacity: 1,
  width: "100%",
  color: "white",
  margin: 0,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 4,
  h1: {
    margin: 0,
  },
});

const Overlay = styled.div({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  opacity: 0.3,
  zIndex: 3,
});

export const Hero = ({ image, children }) => {
  return (
    <HeroContainer>
      <Image src={urlFor(image).url()} layout="fill" objectFit="cover" />
      <HeroText> {children}</HeroText>
      <Overlay />
    </HeroContainer>
  );
};
