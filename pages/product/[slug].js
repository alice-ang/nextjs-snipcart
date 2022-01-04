import styled from "styled-components";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { BuyButton } from "../../components/BuyButton";
import { formatCurrency } from "../../utils";
import { useRouter } from "next/router";
import { SubTitle } from "../../components/SubTitle";
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

const ButtonBar = styled.div({
  display: "flex",
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
    mainImage,
  } = props;
  const router = useRouter();
  return (
    <Wrapper width={LayoutWidth}>
      <ProductPage>
        {props.mainImage && (
          <Image
            src={urlFor(props.mainImage).url()}
            width="500"
            height="500"
            layout="intrinsic"
            objectFit="cover"
            alt={title}
          />
        )}
        <ProductInformation>
          <h2>{title}</h2>
          <SubTitle>lorem ipsum </SubTitle>
          <p>{description}</p>
          <Price>
            {price && formatCurrency(currency, "sv-SE").format(price)}
          </Price>
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
        </ProductInformation>
      </ProductPage>
    </Wrapper>
  );
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  mainImage,
  "images": images[]->asset->,
  price,
  currency,
  description
}`;

Product.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
