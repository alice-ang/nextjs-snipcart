import Head from "next/head";
import Script from "next/script";
import { ProductList } from "../components/ProductList";

import { IProduct } from "../components/Product";
import svg from "../public/vercel.svg";
import { GetStaticProps } from "next";

interface IProductListProps {
  products: IProduct[];
}

export default function Home({ products }: IProductListProps) {
  return (
    <>
      <Head>
        <title>My awesome store</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <main>
        <ProductList products={products} />
      </main>
      <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={process.env.API_KEY}></div>
    </>
  );
}

export const products: IProduct[] = [
  {
    id: "halfmoon",
    name: "Halfmoon Betta",
    price: 25.0,
    image: svg,
    description:
      "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
    url: "/api/products/halfmoon",
  },
  {
    id: "dragonscale",
    name: "Dragon Scale Betta",
    price: 35,
    image: svg,
    description:
      "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
    url: "/api/products/dragonscale",
  },
  {
    id: "crowntail",
    name: "Crowntail Betta",
    price: 7.5,
    image: svg,
    description:
      "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    url: "/api/products/crowntail",
  },
  {
    id: "veiltail",
    name: "Veiltail Betta",
    price: 5.0,
    image: svg,
    description:
      "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
    url: "/api/products/veiltail",
  },
];

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      products,
    },
  };
};
