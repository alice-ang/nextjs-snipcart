import styled from "styled-components";

const Buy = styled.button({
  background: "black",
  width: "100%",
  border: "4px solid black",
  color: "white",
  transition: "0.3s",
  padding: "0.5em",
  "&:hover": {
    background: "white",
    color: "black",
  },
});

export const BuyButton = ({
  id,
  price,
  url,
  description,
  image,
  itemName,
  children,
}) => {
  return (
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
  );
};
