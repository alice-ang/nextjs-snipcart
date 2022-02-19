import styled from "styled-components";
import { useState } from "react";
import { urlFor } from "../utils";
import { formatCurrency } from "../utils";
import Image from "next/image";
import Link from "next/link";
import { theme } from "../styles/styles";
import { SubTitle } from "./SubTitle";
import { ColorCircle } from "./ColorCircle";

const CardContainer = styled.div({
  display: "inline-flex",
  flexDirection: "column",
  background: theme.colors.light,
  borderRadius: 5,
  "h3,h4,p": {
    margin: 0,
  },
  p: {
    margin: "0.5em 0px",
  },
  a: {
    textDecoration: "none",
    color: theme.colors.dark,
  },
});

const ColorWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  h4: {
    flexGrow: 2,
  },
  p: {
    display: "inline-block",
    fontSize: "0.8em",
    fontWeight: "bold",
  },
});

const CardImage = styled(Image)({
  borderRadius: "5px 5px 0px 0px",
});

const CardContent = styled.div({
  padding: "1em",
  display: "flex",
  justifyContent: "space-between",
});

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flexGrow: 2,
});

const CardTitle = styled.h4({
  paddingRight: "0.2em",
});

export const Card = ({
  price,
  currency,
  url,
  variants = [],
  images = [],
  itemName,
  subtitle,
}) => {
  const [mainUrl, setMainUrl] = useState(images[0]);
  const maxNumOfColors = 2;
  const remainingColors =
    variants && variants.length > 2 ? variants.length - 2 : null;

  return (
    <CardContainer>
      <Link href={`/product/${encodeURIComponent(url.current)}`} passHref>
        <a>
          <CardImage
            onMouseEnter={() => (images[1] ? setMainUrl(images[1]) : null)}
            onMouseLeave={() => setMainUrl(images[0])}
            src={urlFor(mainUrl).url()}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt={itemName}
          />
          <CardContent>
            <ContentContainer>
              <ColorWrapper>
                <CardTitle>{itemName}</CardTitle>
                <span>
                  {variants &&
                    variants.map((variant, index) => {
                      if (index >= maxNumOfColors) {
                        return null;
                      }
                      return (
                        <ColorCircle color={variant.color} key={variant._id} />
                      );
                    })}
                  {remainingColors && <p>{`+${remainingColors}`}</p>}
                </span>
              </ColorWrapper>
              <SubTitle>{subtitle} </SubTitle>
              {price && formatCurrency(currency, "sv-SE").format(price)}
            </ContentContainer>
          </CardContent>
        </a>
      </Link>
    </CardContainer>
  );
};
