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
  const [productCategory, setProductCategory] = useState({});
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const getByCategory = async (router) => {
    const cat = router.query.param;
    const query = groq`*[_type=="category" && title == $cat][0]{
      ...,
      "products": *[ _type == "product" && references(^._id) ]

    }`;

    const result = await client
      .fetch(query, { cat })
      .then(setLoading(true))
      .then((data) => setProductCategory(data))
      .then(setLoading(false))
      .catch(console.error);

    return result;
  };

  useEffect(() => {
    getByCategory(router);
  }, [router]);

  return (
    <ProductPage>
      {isLoading && <Loader />}

      {productCategory && <h1>{productCategory.title}</h1>}
    </ProductPage>
  );
}
