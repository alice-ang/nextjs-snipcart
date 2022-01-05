import styled from "styled-components";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../../client";
import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { useRouter } from "next/router";

const ProductPage = styled.article({
  padding: "1em",
});

const CategoryTitle = styled.h1({
  textTransform: "capitalize",
});

export default function Category() {
  const [productCategory, setProductCategory] = useState({});
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { products } = productCategory;

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
      {products ? (
        <Grid title={productCategory.title}>
          {products.map(
            ({
              _id,
              title = "",
              slug = "",
              images,
              price,
              categories = [],
              currency,
              description,
            }) =>
              slug && (
                <Card
                  key={_id}
                  subtitle={productCategory.title}
                  itemName={title}
                  url={slug}
                  images={images}
                  description={description}
                  id={slug}
                  price={price}
                  currency={currency}
                />
              )
          )}
        </Grid>
      ) : (
        <Loader />
      )}
    </ProductPage>
  );
}
