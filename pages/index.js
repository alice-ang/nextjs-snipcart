import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { TextBlock } from "../components/TextBlock";
import { theme, Breakpoints } from "../styles/styles";

export default function Home() {
  const [hero, setHero] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [homepage, setHomepage] = useState(null);
  const [textBlock, setTextBlock] = useState(null);
  useEffect(() => {
    const homeQuery = groq` *[_type == "page" && name == 'Homepage' ][0]{
      "pageItem": pageItem[]->{
        products[]->
      }
    }`;
    client
      .fetch(homeQuery)
      .then((data) => setHomepage(data))
      .then(() => {
        if (homepage) {
          console.log(homepage);
          homepage.pageItem.map((page) => {
            switch (page._type) {
              case "hero":
                setHero(page);
                break;
              case "textBlock":
                setTextBlock(page);
                break;
              case "featured":
                setFeatured(page);
                break;
            }
          });
        }
      })
      .catch(console.error);
    // const featuredQuery = groq` *[_type == "featured" && name == "Home"][0]{
    //   title,
    //   "products": products[]->{
    //     title,
    //     slug,
    //     mainImage,
    //     price,
    //     currency,
    //     description},
    // }`;
    // client
    //   .fetch(featuredQuery)
    //   .then((data) => setFeatured(data))
    //   .catch(console.error);
  }, []);

  return (
    <div>
      {hero && (
        <Hero image={hero.heroImage}>
          <h1>{hero.heading}</h1>
          <p>{hero.subtitle}</p>
        </Hero>
      )}
      {textBlock && (
        <TextBlock
          color={theme.colors.accent}
          width="60%"
          text={textBlock.text}
        />
      )}

      {featured && (
        <Grid title={featured.title}>
          {featured.products.map(
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
      )}
    </div>
  );
}
