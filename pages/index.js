import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

export default function Home() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const heroQuery = groq` *[_type == "hero" && name == 'Home' ][0]`;
    client
      .fetch(heroQuery)
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      {hero && (
        <Hero image={hero.heroImage}>
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </Hero>
      )}
    </div>
  );
}
