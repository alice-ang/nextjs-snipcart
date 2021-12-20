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
  ProductSize: 150,
  [Breakpoints.LaptopOrLarger]: {
    ProductSize: 250,
  },
};
