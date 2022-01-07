import styled from "styled-components";
import { Breakpoints, LayoutWidth, wrapperStyle } from "../styles/styles";

const Wrapper = styled.div(({ width }) => ({}, wrapperStyle({ width })));

const GridContainer = styled.div({
  padding: "0.5em",
  [Breakpoints.Large]: {
    gridGap: "1em",
  },
});

const GridTitle = styled.h2({
  textTransform: "capitalize",
});

const ProductGrid = styled.div({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
  gridGap: "0.5em",
  margin: 0,
  borderRadius: 5,
  [Breakpoints.Large]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
    gridGap: "1em",
  },
  [Breakpoints.XL]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
  },
});

export const Grid = ({ title, children }) => {
  return (
    <GridContainer>
      <Wrapper width={LayoutWidth}>
        <GridTitle>{title}</GridTitle>
        <ProductGrid>{children}</ProductGrid>
      </Wrapper>
    </GridContainer>
  );
};
