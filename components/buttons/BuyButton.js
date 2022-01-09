import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/styles";

const Buy = styled.button({
  background: theme.colors.dark,
  width: "100%",
  border: `4px solid ${theme.colors.dark}`,
  fontWeight: "bold",
  color: "white",
  transition: "0.3s",
  padding: "0.5em",
  "&:hover": {
    background: "white",
    color: theme.colors.dark,
  },
});

export const BuyButton = ({
  id,
  price,
  url,
  description,
  image,
  itemName,
  variants = [],
  children,
}) => {
  const [colors, setColors] = useState("");
  const variantArray = [];

  useEffect(() => {
    if (!variants) {
      return null;
    }

    variants.map((variant) => {
      variantArray.push(variant.title);
      setColors(variantArray.join("|"));
    });
  }, [variants]);

  return (
    <>
      {colors ? (
        <Buy
          className="snipcart-add-item"
          data-item-id={id}
          data-item-price={price}
          data-item-url={url}
          data-item-description={description}
          data-item-image={image}
          data-item-name={itemName}
          data-item-custom1-name="Färg"
          data-item-custom1-options={colors}
          data-item-custom1-required="true"
        >
          {children}
        </Buy>
      ) : (
        <Buy
          className="snipcart-add-item"
          data-item-id={id}
          data-item-price={price}
          data-item-url={url}
          data-item-description={description}
          data-item-image={image}
          data-item-name={itemName}
        >
          {children}
        </Buy>
      )}
    </>
  );
};
