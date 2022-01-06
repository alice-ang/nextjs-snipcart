import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";

export const useMenuItems = () => {
  const [items, setItems] = useState();

  const getByMenuItems = async () => {
    const menuQuery = groq`*[_type == "menu" && name =="Main Menu"][0]
    {
      items[]->
      {
        ...,"subCategories": subCategories[]->
      },
    }`;

    const result = await client
      .fetch(menuQuery)
      .then((data) => setItems(data.items))
      .catch(console.error);

    return result;
  };

  useEffect(() => {
    getByMenuItems();
  }, []);

  if (!items) {
    return null;
  }
  return items;
};
