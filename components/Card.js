import styled from "styled-components";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { theme } from "../styles/styles";
import { Product } from "./Product";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: "f0f5f6",
  h3: {
    margin: 0,
  },
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
  },
});

const CardContent = styled.div({
  padding: "1em",
});

const Divider = styled.hr({
  border: `1px solid ${theme.colors.divider}`,
});

export const Card = ({ price, currency, url, image, itemName }) => {
  return (
    <CardContainer>
      <Link href={`/product/${encodeURIComponent(url.current)}`} passHref>
        <a>
          <Image
            src={urlFor(image).url()}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={itemName}
          />
          <CardContent>
            <h3>{itemName}</h3>
            <Divider />
            {price && formatCurrency(currency, "sv-SE").format(price)}
          </CardContent>
        </a>
      </Link>
    </CardContainer>
  );
};
