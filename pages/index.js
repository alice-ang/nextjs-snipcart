import { ProductList } from "../components/ProductList";
import groq from "groq";
import { client } from "../client";

export default function Home(props) {
  return (
    <>
      <ProductList products={props.products} />
    </>
  );
}

Home.getInitialProps = async () => ({
  products: await client.fetch(groq`
    *[_type == "product"]
  `),
});
