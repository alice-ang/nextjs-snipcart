import styled from "styled-components";
import { Product, IProduct } from "./Product";

type IProductListProps = {
  products: IProduct[];
};

const List = styled.div({
  width: "100%",
  maxWidth: 1000,
  marginLeft: "auto",
  marginRight: "auto",
});
export const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};
