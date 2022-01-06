import Image from "next/image";
import { formatCurrency } from "../utils";
import styled from "styled-components";
import Link from "next/link";
import { urlFor } from "../utils";

const ProductContainer = styled.div({
  position: "relative",
});

export const Product = ({ product }) => {
  return (
    <ProductContainer>
      <Link
        href="/product/[slug]"
        as={`/product/${product.slug.current}`}
        passHref
      >
        <h2>
          <a>{product.title}</a>
        </h2>
      </Link>
      <p>{product.descripiton}</p>
      {product.images && (
        <Image
          src={urlFor(product.images[0]).url()}
          layout="fill"
          objectFit="cover"
          alt={product.title}
        />
      )}
      <div className="product__price-button-container">
        {product.description}
        <div>
          {formatCurrency(product.currency, "sv-SE").format(product.price)}
        </div>
      </div>
    </ProductContainer>
  );
};
