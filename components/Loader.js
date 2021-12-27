import { theme } from "../styles/styles";
import styled from "styled-components";

const SpinnerContainer = styled.div({
  display: "flex",
  justifyContent: "center",
});
const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid ${theme.colors.loader};

  border-radius: 50%;
  border-top-color: ${theme.colors.darkPrimary};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <SpinnerContainer>
      <Spinner></Spinner>
    </SpinnerContainer>
  );
};
