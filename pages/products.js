import styled from "styled-components";
import groq from "groq";
import client from "../client";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";

const ProductContainer = styled.div({
  padding: "1em",
});

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
  gridGap: "1em",
  margin: 0,
});

export default function Products(props) {
  const { products = [], hero } = props;
  return (
    <>
      <Hero image={hero.heroImage}>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </Hero>
      <ProductContainer>
        <h1>Products </h1>
        <ProductGrid>
          {products.map(
            ({
              _id,
              title = "",
              slug = "",
              mainImage,
              price,
              currency,
              description,
            }) =>
              slug && (
                <Card
                  key={_id}
                  itemName={title}
                  url={slug}
                  image={mainImage}
                  description={description}
                  id={slug}
                  price={price}
                  currency={currency}
                />
              )
          )}
        </ProductGrid>
      </ProductContainer>
    </>
  );
}

Products.getInitialProps = async () => ({
  products: await client.fetch(groq`
      *[_type == "product"]
    `),
  hero: await client.fetch(groq`
  *[_type == "hero" && name == 'Products'][0]
`),
});
