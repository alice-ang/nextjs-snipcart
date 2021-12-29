import styled from "styled-components";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Loader } from "../components/Loader";
import { Grid } from "../components/Grid";
import { Breakpoints } from "../styles/styles";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

const ProductContainer = styled.div({
  padding: "1em",
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
          <h1>{hero.heading}</h1>
          <p>{hero.paragraph}</p>
        </Hero>
      )}

      <ProductContainer>
        {products ? (
          <>
            <h1>Produkter </h1>
            <Grid>
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
            </Grid>
          </>
        ) : (
          <Loader />
        )}
      </ProductContainer>
    </>
  );
}
