import styled from "styled-components";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: "red",
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

      {price && formatCurrency(currency, "sv-SE").format(price)}
      <p>{itemName}</p>
      <button
        className="snipcart-add-item"
        data-item-id={id}
        data-item-price={price}
        data-item-url={url}
        data-item-description={description}
        data-item-image={image}
        data-item-name={itemName}
      >
        Add to cart
      </button>
    </CardContainer>
  );
};
