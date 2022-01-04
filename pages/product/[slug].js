import styled from "styled-components";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { BuyButton } from "../../components/BuyButton";
import { formatCurrency } from "../../utils";
import { useRouter } from "next/router";
import { SubTitle } from "../../components/SubTitle";
import { ImageGrid } from "../../components/ImageGrid";
import { Breakpoints, LayoutWidth, wrapperStyle } from "../../styles/styles";

const Wrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

const ProductPage = styled.article({
  display: "flex",
  flexDirection: "column",
  padding: "1em",
  h2: {
    marginBottom: 0,
  },
  [Breakpoints.Medium]: {
    flexDirection: "row",
  },
});

const ProductInformation = styled.div({
  padding: "1em",
});

const Price = styled.p({
  fontWeight: "bold",
});

export default function Product(props) {
  console.log(props);
  const {
    title = "Missing title",
    price,
    currency,
    description,
    images = [],
  } = props;

  const router = useRouter();

  return (
    <Wrapper width={LayoutWidth}>
      <ProductPage>
        {images && <ImageGrid images={images} />}
        <ProductInformation>
          <h2>{title}</h2>
          <SubTitle>lorem ipsum </SubTitle>
          <p>{description}</p>
          <Price>
            {price && formatCurrency(currency, "sv-SE").format(price)}
          </Price>
          <BuyButton
            id={title}
            price={price}
            url={router.asPath}
            description={description}
            image={urlFor(images[0]).url()}
            itemName={title}
          >
            Köp
          </BuyButton>
        </ProductInformation>
      </ProductPage>
    </Wrapper>
  );
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  ...,
  images
}`;

Product.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
