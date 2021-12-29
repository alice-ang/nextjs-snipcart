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

  useEffect(() => {
    const heroQuery = groq` *[_type == "hero" && name == 'Home' ][0]`;
    client
      .fetch(heroQuery)
      .then((data) => setHero(data))
      .catch(console.error);

    const featuredQuery = groq` *[_type == "featured" && name == "Home"][0]{
      title,
      "products": products[]->{title, slug,
              mainImage,
              price,
              currency,
              description},
    }`;
    client
      .fetch(featuredQuery)
      .then((data) => setFeatured(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {hero && (
        <Hero image={hero.heroImage}>
          <h1>{hero.heading}</h1>
          <p>{hero.subtitle}</p>
        </Hero>
      )}
      <TextBlock>
        <h3>Lorem ipsum</h3>
        Praesent eget sollicitudin augue. Cras hendrerit nisl elit, ac auctor
        ligula tincidunt ut. Donec at dictum nunc.
      </TextBlock>
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
      <TextBlock color={theme.colors.accent}>
        <h3>Lorem ipsum</h3>
        Praesent eget sollicitudin augue. Cras hendrerit nisl elit, ac auctor
        ligula tincidunt ut. Donec at dictum nunc. Fusce tempor imperdiet
        eleifend. Proin faucibus dictum ligula. Pellentesque vitae tortor
        viverra, congue diam et, ullamcorper arcu.
      </TextBlock>
    </div>
  );
}
