import styled from "styled-components";
import { useEffect, useState } from "react";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { BuyButton } from "../../components/BuyButton";
import { formatCurrency } from "../../utils";
import { useRouter } from "next/router";

const ProductPage = styled.article({
  padding: "1em",
});

const ButtonBar = styled.div({
  display: "flex",
});

const Price = styled.p({
  fontWeight: "bold",
});

export default function Category(props) {
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    const query = groq`*[_type == "product"]`;
    client
      .fetch(query)
      .then((data) => setFoods(data))
      .catch(console.error);
  }, []);

  const router = useRouter();
  console.log(foods);
  return <ProductPage>hej</ProductPage>;
}

// const query = groq`*[_type == "product" && $keyword in categories[]->slug.current]{
//   title,
// slug
// }`;

// Category.getInitialProps = async function (context) {
//   const { keyword = "" } = context.query;
//   console.log(keyword);
//   return await client.fetch(query, { keyword });
// };
