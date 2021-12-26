import styled from "styled-components";

const StyledFooter = styled.div({
  width: "100%",
  marginTop: "1em",
  bottom: 0,
  textAlign: "center",
});

const Heart = styled.span({
  color: ({ theme }) => theme.colors.heart,
});
export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Made with <Heart>♥</Heart> using Sanity and NextJS
      </p>
    </StyledFooter>
  );
}
