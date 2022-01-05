import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Breakpoints } from "../styles/styles";
import Image from "next/image";

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
  [Breakpoints.XXL]: {
    ProductSizeLarge: 350,
  },
};

export const staticMenuItems = [
  { url: "/", name: "Hem" },
  { url: "/about", name: "Om " },
  { url: "/products", name: "Alla" },
];

export const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const serializer = {
  types: {
    image: (props) => (
      <Image
        src={urlFor(props.node.asset).url()}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
        alt="alt"
      />
    ),
  },
};
