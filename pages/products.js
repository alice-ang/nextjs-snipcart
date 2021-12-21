import styled from "styled-components";
import groq from "groq";
import client from "../client";
import { Card } from "../components/Card";

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(100px, 1fr))`,
  gridGap: "1em",
  padding: "1em",
  margin: 0,
});

export default function Products(props) {
  const { products = [] } = props;
  return (
    <div>
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
                url={`/products/${slug}`}
                image={mainImage}
                description={description}
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
