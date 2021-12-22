import styled from "styled-components";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { BuyButton } from "../../components/BuyButton";
import { formatCurrency } from "../../utils";
import { useRouter } from "next/router";

const ProductPage = styled.article({
  padding: "1em",
});

const ButtonBar = styled.div({
  display: "flex",
});

const Price = styled.p({
  fontWeight: "bold",
});

export default function Product(props) {
  const {
    title = "Missing title",
    price,
    currency,
    description,
    slug,
    mainImage,
  } = props;
  const router = useRouter();
  return (
    <ProductPage>
      {props.mainImage && (
        <Image
          src={urlFor(props.mainImage).url()}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <Price>{price && formatCurrency(currency, "sv-SE").format(price)}</Price>
      <ButtonBar>
        <BuyButton
          id={title}
          price={price}
          url={router.asPath}
          description={description}
          image={urlFor(mainImage).url()}
          itemName={title}
        >
          Köp
        </BuyButton>
      </ButtonBar>

      {/* {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )} */}
    </ProductPage>
  );
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  mainImage,
  price,
  currency,
  description
}`;

Product.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
