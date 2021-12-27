import { Hero } from "../components/Hero";
import { useHero } from "../hooks/useHero";

export default function Home() {
  const hero = useHero();
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
