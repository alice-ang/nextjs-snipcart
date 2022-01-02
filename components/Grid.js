import styled from "styled-components";
import { Breakpoints, LayoutWidth, wrapperStyle } from "../styles/styles";

const Wrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

const GridContainer = styled.div({
  padding: "1em",
});

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
  gridGap: "1em",
  margin: 0,
  [Breakpoints.Large]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`,
    gridGap: "1em",
  },
  [Breakpoints.XL]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
    gridGap: "2em",
  },
});

export const Grid = ({ title, children }) => {
  return (
    <GridContainer>
      <Wrapper width={LayoutWidth}>
        <h2>{title}</h2>
        <ProductGrid>{children}</ProductGrid>
      </Wrapper>
    </GridContainer>
  );
};
