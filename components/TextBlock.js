import styled from "styled-components";
import { theme, Breakpoints } from "../styles/styles";

const Block = styled.div(({ color }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: color ? color : undefined,
  padding: "1em",
}));

export const TextBlock = ({ color, children }) => {
  return <Block color={color}>{children}</Block>;
};
