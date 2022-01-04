import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";
import { Grid } from "../components/Grid";
import { Card } from "../components/Card";
import { TextBlock } from "../components/TextBlock";
import { theme } from "../styles/styles";
import { Loader } from "../components/Loader";

export default function About() {
  const [hero, setHero] = useState(null);
  const [featured, setFeatured] = useState(null);
  const [textBlock, setTextBlock] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const homeQuery = groq` *[_type == "page" && name == 'Homepage' ][0]{
      "pageItem": pageItem[]->{..., "products": products[]->}, 
    }`;

    client
      .fetch(homeQuery)
      .then(setLoading(true))
      .then((data) => {
        data.pageItem.map((page) => {
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
      })
      .then(setLoading(false))
      .catch(console.error);
  }, []);

  return <div>About</div>;
}
