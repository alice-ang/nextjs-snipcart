import { useState } from "react";
import styled from "styled-components";
import groq from "groq";
import client from "../../client";
import { urlFor } from "../../utils";
import Image from "next/image";
import { BuyButton } from "../../components/buttons/BuyButton";
import { formatCurrency } from "../../utils";
import { useRouter } from "next/router";
import { SubTitle } from "../../components/SubTitle";
import { ImageGrid } from "../../components/ImageGrid";
import { Breakpoints, LayoutWidth, wrapperStyle } from "../../styles/styles";
import { ColorCircle } from "../../components/ColorCircle";

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
  width: "100%",
  [Breakpoints.Medium]: {
    padding: "1em",
  },
});

const Price = styled.p({
  fontWeight: "bold",
});

const VariantImages = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(50px, 1fr))`,
  gridGap: 5,
  margin: 0,
  borderRadius: 5,
});

const StyledColorCircle = styled(ColorCircle)({
  cursor: "pointer",
  [Breakpoints.Medium]: {
    height: 14,
    width: 14,
    marginRight: 2,
  },
});

export default function Product(props) {
  const {
    title = "Missing title",
    price,
    currency,
    description,
    categories = [],
    variants = [],
    images = [],
  } = props;

  const [variantUrl, setVariantUrl] = useState(null);
  const [variantTitle, setVariantTitle] = useState(null);
  const router = useRouter();

  return (
    <Wrapper width={LayoutWidth}>
      <ProductPage>
        {images && <ImageGrid images={images} variant={variantUrl} />}
        <ProductInformation>
          <h2>{title}</h2>
          <SubTitle>{categories[0].title}</SubTitle>
          {variantTitle && <p>{variantTitle}</p>}
          {variants.map((variant) => {
            return (
              <StyledColorCircle
                color={variant.color}
                key={variant.color}
                onClick={() => console.log(variant.name)}
              />
            );
          })}
          <VariantImages>
            {variants.map((variant) => {
              return (
                <Image
                  key={variant._id}
                  src={urlFor(variant.variantImage).url()}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                  alt="alt"
                  onClick={() => setVariantUrl(variant.variantImage)}
                />
              );
            })}
          </VariantImages>

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
  "categories": categories[]->,
  "variants": variants[]->,
  images
}`;

Product.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
