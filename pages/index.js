import { ProductList } from "../components/ProductList";
import groq from "groq";
import { client } from "../client";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      home
    </div>
  );
}
