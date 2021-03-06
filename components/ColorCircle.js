import { Breakpoints } from "../styles/styles";
import styled from "styled-components";

const Circle = styled.div(({ circleColor }) => ({
  height: 10,
  width: 10,
  display: "inline-block",
  borderRadius: "50%",
  marginRight: 4,
  backgroundColor: circleColor ? circleColor : "red",
  [Breakpoints.Large]: {
    height: 14,
    width: 14,
    marginRight: 6,
  },
}));

export const ColorCircle = ({ color, className }) => {
  return <Circle circleColor={color} className={className} />;
};
