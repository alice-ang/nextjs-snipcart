import styled from "styled-components";
import { Product } from "./Product";
import { variables } from "../utils";
import { Breakpoints } from "../styles/styles";

const List = styled.div({
  background: "blue",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${variables.ProductSize}px, 1fr))`,
  gridGap: "3em",
  padding: 0,
  margin: 0,
  [Breakpoints.LaptopOrLarger]: {
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${variables.ProductSize}px, 1fr))`,
    gridGap: "1em",
  },
});
export const ProductList = ({ products }) => {
  return (
    <List>
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </List>
  );
};
