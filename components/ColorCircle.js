import { Breakpoints } from "../styles/styles";
import styled from "styled-components";

const Circle = styled.div(({ circleColor }) => ({
  height: 8,
  width: 8,
  display: "inline-block",
  borderRadius: "50%",
  margin: "0px 3px",
  backgroundColor: circleColor ? circleColor : "red",
  [Breakpoints.Medium]: {
    height: 10,
    width: 10,
  },
}));

export const ColorCircle = ({ color }) => {
  return <Circle circleColor={color} />;
};
