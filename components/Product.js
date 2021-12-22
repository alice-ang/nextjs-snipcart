import Image from "next/image";
import { formatCurrency } from "../utils";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Link from "next/link";
import { urlFor } from "../utils";
const ProductContainer = styled.div({
  position: "relative",
});

export const Product = ({ product }) => {
  console.log(product);
  return (
    <ProductContainer>
      <Link href="/product/[slug]" as={`/product/${product.slug.current}`}>
        <h2>
          <a>{product.title}</a>
        </h2>
      </Link>
      <p>{product.descripiton}</p>
      {product.mainImage && (
        <Image
          src={urlFor(product.mainImage).url()}
          layout="fill"
          objectFit="cover"
        />
      )}
      <div className="product__price-button-container">
        {product.description}
        <div>
          {formatCurrency(product.currency, "sv-SE").format(product.price)}
        </div>

        <button
          className="snipcart-add-item"
          data-item-id={product.slug}
          data-item-price={product.price}
          data-item-url={`/products/${product.slug}`}
          data-item-description={product.description}
          data-item-image={product.mainImage}
          data-item-name={product.title}
        >
          Add to cart
        </button>
      </div>
    </ProductContainer>
  );
};
