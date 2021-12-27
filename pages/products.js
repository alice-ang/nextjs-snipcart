import styled from "styled-components";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Breakpoints } from "../styles/styles";
import { useHero } from "../hooks/useHero";
import { useProducts } from "../hooks/useProducts";
import { Loader } from "../components/Loader";

const ProductContainer = styled.div({
  padding: "1em",
});

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
  gridGap: "1em",
  margin: 0,
  [Breakpoints.LaptopOrLarger]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
    gridGap: "2em",
  },
});

export default function Products() {
  const hero = useHero();
  const products = useProducts();

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
          </>
        ) : (
          <Loader />
        )}
      </ProductContainer>
    </>
  );
}
