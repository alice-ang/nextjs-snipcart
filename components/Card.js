import styled from "styled-components";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { BuyButtonRound } from "./BuyButtonRound";
import { theme } from "../styles/styles";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: theme.colors.light,
  borderRadius: 5,
  h3: {
    margin: 0,
  },
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
  },
});

const CardImage = styled(Image)({
  borderRadius: "5px 5px 0px 0px",
});

const CardContent = styled.div({
  padding: "1em",
  display: "flex",
  justifyContent: "space-between",
});

const Divider = styled.hr({
  border: `1px solid ${theme.colors.divider}`,
  width: "100%",
});

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexGrow: 2,
  paddingRight: "1em",
});

export const Card = ({ price, currency, url, image, itemName }) => {
  return (
    <CardContainer>
      <Link href={`/product/${encodeURIComponent(url.current)}`} passHref>
        <a>
          <CardImage
            src={urlFor(image).url()}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={itemName}
          />
          <CardContent>
            <ContentContainer>
              <h3>{itemName}</h3>
              <Divider />
              {price && formatCurrency(currency, "sv-SE").format(price)}
            </ContentContainer>
            <BuyButtonRound />
          </CardContent>
        </a>
      </Link>
    </CardContainer>
  );
};
