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
import {
  Breakpoints,
  LayoutWidth,
  wrapperStyle,
  theme,
} from "../../styles/styles";
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
  gridTemplateColumns: `repeat(auto-fill, minmax(50px, 1fr))`,
  gridGap: 5,
  margin: 0,
  borderRadius: 5,
  cursor: "pointer",
  [Breakpoints.Large]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(70px, 1fr))`,
  },
});

const VariantWrapper = styled.span(({ hasBorder }) => ({
  borderBottom: hasBorder ? `3px solid ${theme.colors.footer}` : undefined,
  paddingBottom: hasBorder ? 5 : undefined,
}));

const StyledColorCircle = styled(ColorCircle)({
  cursor: "pointer",
  margin: 4,
  [Breakpoints.Large]: {
    height: 14,
    width: 14,
  },
});

const VariantTitle = styled.p({
  fontWeight: "bold",
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
  const [variantTitle, setVariantTitle] = useState(
    variants ? variants[0].title : null
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  return (
    <Wrapper width={LayoutWidth}>
      <ProductPage>
        {images && <ImageGrid images={images} variant={variantUrl} />}
        <ProductInformation>
          <h2>{title}</h2>
          {variants && (
            <>
              <SubTitle>{categories[0].title}</SubTitle>
              {variantTitle && <VariantTitle>{variantTitle}</VariantTitle>}
              {variants.map((variant, i) => {
                return (
                  <span
                    key={variant.color}
                    onClick={() => {
                      setVariantTitle(variant.title);
                      setVariantUrl(variant.variantImage);
                      setActiveIndex(i);
                    }}
                  >
                    <StyledColorCircle color={variant.color} />
                  </span>
                );
              })}
              <VariantImages>
                {variants.map((variant, index) => {
                  return (
                    <VariantWrapper
                      key={variant._id}
                      hasBorder={index == activeIndex}
                    >
                      <Image
                        src={urlFor(variant.variantImage).url()}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        alt="alt"
                        onClick={() => {
                          setVariantUrl(variant.variantImage);
                          setVariantTitle(variant.title);
                          setActiveIndex(index);
                        }}
                      />
                    </VariantWrapper>
                  );
                })}
              </VariantImages>
            </>
          )}

          <p>{description}</p>
          <Price>
            {price && formatCurrency(currency, "sv-SE").format(price)}
          </Price>
          <BuyButton
            id={title}
            price={price}
            url={router.asPath}
            variant={variantTitle}
            variants={variants}
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
