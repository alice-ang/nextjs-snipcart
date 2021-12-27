import styled from "styled-components";
import { useEffect, useState } from "react";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { Loader } from "../../components/Loader";
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

export default function Category() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const query = groq`*[_type == "product"]`;
    client
      .fetch(query)
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  const router = useRouter();
  console.log(categories);
  return (
    <ProductPage>
      <Loader />
    </ProductPage>
  );
}
