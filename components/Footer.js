import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { theme } from "../styles/styles";
import { useCurrentYear } from "../hooks/useCurrentYear";

const StyledFooter = styled.div({
  width: "100%",
  bottom: 0,
  textAlign: "center",
  backgroundColor: theme.colors.footer,
  color: theme.colors.light,
  p: {
    margin: 0,
    padding: "0px 0.5em",
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
  const year = useCurrentYear();

  return (
    <StyledFooter>
      <Socials>
        <a
          href="https://www.facebook.com/byewaang-734860390568287"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare color={theme.colors.light} size={24} />
        </a>
        <a
          href="https://www.instagram.com/by.ewa.ang/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram color={theme.colors.light} size={24} />
        </a>
      </Socials>
      <p>
        Copyright &copy; {year} by.ewa.ang | Utvecklad med <Heart>♥</Heart> av
        Alice Anglesjö
      </p>
    </StyledFooter>
  );
}
