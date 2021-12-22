import styled from "styled-components";
import groq from "groq";
import client from "../client";
import { Hero } from "../components/Hero";

export default function Home({ hero }) {
  return (
    <div>
      <Hero image={hero.heroImage}>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </Hero>
    </div>
  );
}

Home.getInitialProps = async () => ({
  hero: await client.fetch(groq`
      *[_type == "hero" && name == 'Home'][0]
    `),
});
