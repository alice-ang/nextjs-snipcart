import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

export const useMenuItems = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    const menuQuery = groq`*[_type == "menu" && name =="Main Menu"][0]{
          "items": items[]->title,
    }`;
    client
      .fetch(menuQuery)
      .then((data) => setItems(data))
      .catch(console.error);
  }, []);
  if (!items) {
    return null;
  }
  return items;
};
