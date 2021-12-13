import { FC } from "react";
import Image from "next/image";

export type IProduct = {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
  image: StaticImageData;
};

type IProductProps = {
  product: IProduct;
};

export const Product: FC<IProductProps> = ({ product }: IProductProps) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        <Image src={product.image} alt={product.image.src} />
      </div>
      <div className="product__price-button-container">
        <div>${product.price.toFixed(2)}</div>
        <button
          data-item-id={product.id}
          data-item-name={product.name}
          data-item-price={product.price}
          data-item-url={product.url}
          data-item-image={product.image.src}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
