import styled from "styled-components";
import { Breakpoints } from "../styles/styles";

const GridContainer = styled.div({
  padding: "0px 1em 1em 1em",
});

const ProductGrid = styled.div(({}) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
  gridGap: "1em",
  margin: 0,
  [Breakpoints.TabletOrLarger]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`,
    gridGap: "1em",
  },
  [Breakpoints.LaptopOrLarger]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
    gridGap: "2em",
  },
}));

export const Grid = ({ title, children }) => {
  return (
    <GridContainer>
      <h2>{title}</h2>
      <ProductGrid>{children}</ProductGrid>
    </GridContainer>
  );
};
