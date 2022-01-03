import styled from "styled-components";
import { theme } from "../styles/styles";

const Title = styled.p({
  fontSize: "0.8em",
  fontWeight: "bold",
  color: theme.colors.text,
  textTransform: "uppercase",
});

export const SubTitle = ({ children }) => {
  return <Title>{children}</Title>;
};
