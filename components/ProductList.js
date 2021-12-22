import styled from "styled-components";
import { Product } from "./Product";
import { variables } from "../utils";
import { Breakpoints } from "../styles/styles";

const List = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  gridGap: "1em",
  padding: "1em",
  margin: 0,
  // [Breakpoints.BigScreenOrLarger]: {
  //   display: "grid",
  //   gridTemplateColumns: `repeat(auto-fill, minmax(${variables.ProductSizeLarge}px, 1fr))`,
  //   gridGap: "3em",
  //   padding: "3em",
  // },
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
