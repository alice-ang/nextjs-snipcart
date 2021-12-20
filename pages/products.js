import styled from "styled-components";
import groq from "groq";
import client from "../client";
import { Card } from "../components/Card";
import { variables } from "../utils";
import { Breakpoints } from "../styles/styles";

const ProductGrid = styled.div({
  background: "blue",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${variables.ProductSize}px, 1fr))`,
  gridGap: "3em",
  padding: 0,
  margin: 0,
  [Breakpoints.LaptopOrLarger]: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${variables.ProductSize}px, 1fr))`,
    gridGap: "1em",
  },
});

export default function Products(props) {
  const { products = [] } = props;
  return (
    <div>
      <h1>Products </h1>
      <ProductGrid>
        {products.map(
          ({ _id, title = "", slug = "", mainImage, price, currency, body }) =>
            slug && (
              <Card
                key={_id}
                itemName={title}
                url={`/products/${slug}`}
                image={mainImage}
                description={body}
                id={slug}
                price={price}
                currency={currency}
              />
            )
        )}
      </ProductGrid>
    </div>
  );
}

Products.getInitialProps = async () => ({
  products: await client.fetch(groq`
      *[_type == "product"]
    `),
});
