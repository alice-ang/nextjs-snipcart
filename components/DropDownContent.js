import { theme } from "../styles/styles";
import styled from "styled-components";

const Content = styled.div({
  display: "flex",
  position: "absolute",
  justifyContent: "space-around",
  backgroundColor: theme.colors.primary,
  width: "100%",
  padding: "0px 1em 2em 1em",
  borderBottom: `5px solid ${theme.colors.footer}`,
  zIndex: 12,
  height: "fit-content",
});

export const DropDownContent = ({ children }) => {
  return <Content>{children}</Content>;
};
