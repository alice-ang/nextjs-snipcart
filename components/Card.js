import styled from "styled-components";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "./BuyButton";
import { theme } from "../styles/styles";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: "f0f5f6",
  h3: {
    margin: 0,
  },
});

const CardContent = styled.div({
  padding: "1em",
});

const Divider = styled.hr({
  borderTop: `1px solid ${theme.colors.divider}`,
});

export const Card = ({
  id,
  price,
  currency,
  url,
  description,
  image,
  itemName,
}) => {
  return (
    <CardContainer>
      <Link href="/product/[slug]" as={`/product/${url.current}`}>
        <Image
          src={urlFor(image).url()}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      </Link>
      <CardContent>
        <h3>{itemName}</h3>
        <Divider />
        {price && formatCurrency(currency, "sv-SE").format(price)}
      </CardContent>
    </CardContainer>
  );
};
