import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

export const useHero = () => {
  const [hero, setHero] = useState(null);
  useEffect(() => {
    const heroQuery = groq` *[_type == "hero" && name == 'Products'][0]`;
    client
      .fetch(heroQuery)
      .then((data) => setHero(data))
      .catch(console.error);
  }, []);
  if (!hero) {
    return null;
  }
  return hero;
};
