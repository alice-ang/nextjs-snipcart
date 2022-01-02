import { Breakpoints } from "../styles/styles";

const WrapperContent = ({ width }) => ({
  [Breakpoints.XXL]: {
    margin: "0 auto",
    width: width ?? undefined,
  },
});

export const Wrapper = ({ width, children }) => {
  return <WrapperContent width={width}>{children}</WrapperContent>;
};
