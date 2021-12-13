import { GetStaticProps } from "next";
import { Product, IProduct } from "./Product";

type IProductListProps = {
  products: IProduct[];
};

export const ProductList = ({ products }: IProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};
