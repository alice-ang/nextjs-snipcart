import { theme } from "../styles/styles";
import styled from "styled-components";

const Content = styled.div({
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  backgroundColor: theme.colors.primary,
  width: "100%",
  padding: "0px 1em 1.5em 1em",
  borderBottom: `5px solid ${theme.colors.accent}`,
  zIndex: 12,
  height: "fit-content",

  a: {
    width: "100%",
    textDecoration: "none",
    color: theme.colors.dark,
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const DropDownContent = ({ children }) => {
  return <Content>{children}</Content>;
};
