import { Breakpoints } from "../styles/styles";
import styled from "styled-components";

const Circle = styled.div(({ circleColor }) => ({
  height: 11,
  width: 11,
  display: "inline-block",
  borderRadius: "50%",
  marginRight: 2,
  backgroundColor: circleColor ? circleColor : "red",
  [Breakpoints.Medium]: {
    height: 14,
    width: 14,
    marginRight: 2,
  },
}));

export const ColorCircle = ({ color }) => {
  return <Circle circleColor={color} />;
};
