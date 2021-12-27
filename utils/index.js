import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Breakpoints } from "../styles/styles";

export const formatCurrency = (currency, locale) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });
  return formatter;
};

export const urlFor = (source) => {
  const builder = imageUrlBuilder(client);

  return builder.image(source);
};

export const variables = {
  ProductSizeMobile: 150,
  [Breakpoints.BigScreenOrLarger]: {
    ProductSizeLarge: 350,
  },
};

export const staticMenuItems = [
  { url: "/", name: "Hem" },
  { url: "/products", name: "Alla" },
];
