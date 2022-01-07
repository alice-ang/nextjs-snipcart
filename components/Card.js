import styled from "styled-components";
import { useEffect, useState } from "react";
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
  width: "100%",
  justifyContent: "space-between",
  h3: {
    flexGrow: 2,
  },
  p: {
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

export const Card = ({
  price,
  currency,
  url,
  colors,
  images = [],
  itemName,
  subtitle,
}) => {
  const [mainUrl, setMainUrl] = useState(images[0]);
  const numOfColors = Object.values(colors).length;

  return (
    <CardContainer>
      <Link href={`/product/${encodeURIComponent(url.current)}`} passHref>
        <a>
          <CardImage
            onMouseEnter={() => setMainUrl(images[1])}
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
                <h3>{itemName}</h3>
                {colors &&
                  Object.values(colors).map((color, index) => {
                    if (index > 1) {
                      return <p key={index}>{`+${numOfColors - 2}`}</p>;
                    }
                    return <ColorCircle color={color} key={color} />;
                  })}
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
