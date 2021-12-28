import styled from "styled-components";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Loader } from "../components/Loader";
import { Breakpoints } from "../styles/styles";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

const ProductContainer = styled.div({
  padding: "1em",
});

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
  gridGap: "1em",
  margin: 0,
  [Breakpoints.TabletOrLarger]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
    gridGap: "2em",
  },
});

export default function Products() {
  const products = useProducts();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const heroQuery = groq` *[_type == "hero" && name == 'Products' ][0]`;
    client
      .fetch(heroQuery)
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {hero && (
        <Hero image={hero.heroImage}>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Hero>
      )}

      <ProductContainer>
        {products ? (
          <>
            <h1>Produkter </h1>
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
          </>
        ) : (
          <Loader />
        )}
      </ProductContainer>
    </>
  );
}
