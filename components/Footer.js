import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { theme } from "../styles/styles";

const StyledFooter = styled.div({
  width: "100%",
  marginTop: "1em",
  bottom: 0,
  textAlign: "center",
  p: {
    margin: 0,
  },
});

const Socials = styled.div({
  display: "flex",
  justifyContent: "center",
  a: {
    padding: "0.5em",
  },
});

const Heart = styled.span({
  color: theme.colors.heart,
});
export default function Footer() {
  return (
    <StyledFooter>
      <Socials>
        <a
          href="https://www.facebook.com/byewaang-734860390568287"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare color={theme.colors.dark} size={18} />
        </a>
        <a
          href="https://www.instagram.com/by.ewa.ang/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram color={theme.colors.dark} size={18} />
        </a>
      </Socials>
      <p>
        Made with <Heart>♥</Heart> using Sanity and NextJS
      </p>
    </StyledFooter>
  );
}
