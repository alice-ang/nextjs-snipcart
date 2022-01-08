import { useEffect, useState } from "react";
import groq from "groq";
import client from "../../client";
import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import { useRouter } from "next/router";

export default function Category() {
  const [productCategory, setProductCategory] = useState({});
  const router = useRouter();

  const getByCategory = async (router) => {
    const cat = router.query.param;
    const query = groq`*[_type=="category" && title == $cat || _type=="subCategory" && name == $cat ][0]{
      ...,
      "products": *[ _type == "product" && references(^._id) ]

    }`;

    const result = await client
      .fetch(query, { cat })
      .then((data) => setProductCategory(data))
      .catch(console.error);

    return result;
  };

  useEffect(() => {
    getByCategory(router);
  }, [router]);

  if (!productCategory) {
    return null;
  }

  return (
    <article>
      {productCategory.products ? (
        <Grid title={productCategory.title ?? productCategory.name}>
          {productCategory.products.map(
            ({
              _id,
              title = "",
              slug = "",
              images,
              price,
              currency,
              colors,
              description,
            }) =>
              slug && (
                <Card
                  key={_id}
                  colors={colors}
                  subtitle={productCategory.title ?? productCategory.name}
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
    </article>
  );
}
