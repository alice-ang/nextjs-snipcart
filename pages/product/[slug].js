import styled from "styled-components";
import groq from "groq";
import Image from "next/image";
import client from "../../client";
import { urlFor } from "../../utils";
import { BuyButton } from "../../components/BuyButton";

const ProductPage = styled.article({
  padding: "1em",
});

export default function Product(props) {
  console.log(props);
  const { title = "Missing title", categories, description, slug } = props;
  return (
    <ProductPage>
      {props.mainImage && (
        <Image
          src={urlFor(props.mainImage).url()}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <BuyButton
        id={url}
        price={price}
        url={url}
        description={description}
        image={urlFor(image).url()}
        itemName={itemName}
      >
        Köp
      </BuyButton>
      {/* {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )} */}
    </ProductPage>
  );
}

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  "categories": categories[]->title,
  mainImage,
  description
}`;

Product.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
