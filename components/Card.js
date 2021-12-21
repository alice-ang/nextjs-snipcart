import styled from "styled-components";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "./BuyButton";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: "f0f5f6",
});

const CardContent = styled.div({
  padding: "1em",
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

        {price && formatCurrency(currency, "sv-SE").format(price)}
      </CardContent>

      <BuyButton
        id={id}
        price={price}
        url={url}
        description={description}
        image={urlFor(image).url()}
        itemName={itemName}
      >
        Köp
      </BuyButton>
    </CardContainer>
  );
};
