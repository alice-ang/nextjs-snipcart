import styled from "styled-components";
import { theme } from "../styles/styles";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Breakpoints } from "../styles/styles";

const RoundButton = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 30,
  height: 30,
  alignSelf: "end",
  background: theme.colors.light,
  color: theme.colors.dark,
  borderRadius: 50,
  textAlign: "center",
  border: `2px solid ${theme.colors.dark}`,
  transition: "0.3s",
  "&:hover": {
    background: theme.colors.dark,
    color: theme.colors.light,
  },
  [Breakpoints.XL]: {
    width: 40,
    height: 40,
  },
});

const StyledCart = styled(BsFillCartPlusFill)({
  width: 18,
  height: 18,
  [Breakpoints.XL]: {
    width: 20,
    height: 20,
  },
});

export const BuyButtonRound = ({
  id,
  price,
  url,
  description,
  image,
  itemName,
}) => {
  return (
    <RoundButton
      className="snipcart-add-item"
      data-item-id={id}
      data-item-price={price}
      data-item-url={url}
      data-item-description={description}
      data-item-image={image}
      data-item-name={itemName}
    >
      <StyledCart />
    </RoundButton>
  );
};
