import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

export const useProducts = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const productsQuery = groq`*[_type == "product"]`;
    client
      .fetch(productsQuery)
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);
  if (!products) {
    return null;
  }
  return products;
};
