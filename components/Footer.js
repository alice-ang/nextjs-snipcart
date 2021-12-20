import styled from "styled-components";

const StyledFooter = styled.footer({
  background: "red",
});

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Next.js app with a&nbsp;<a href="<https://snipcart.com>">Snipcar t</a>
        &nbsp;- powered store
        <div>
          <a href="<https://github.com/snipcart/snipcart-nextjs>-spa">Github</a>
        </div>
      </p>
    </StyledFooter>
  );
}
