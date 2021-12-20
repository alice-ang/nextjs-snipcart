import groq from "groq";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import client from "../../client";
import { urlForImage } from "../../utils";

export default function Product(props) {
  const { title = "Missing title", categories, description } = props;
  console.log(title);
  return {
    /* <article>
        <h1>{title}</h1>
        {props.mainImage && (
          <Image
            src={urlFor(props.mainImage).url()}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        )}

        {categories && (
          <ul>
            Posted in
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        <BlockContent
          blocks={description}
          imageOptions={{ w: 320, h: 240, fit: "max" }}
        projectId={client.projectId}
        dataset={client.dataset}
        />
      </article> */
  };
}
const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  slug,
  "categories": categories[]->title,
  mainImage,
  description
}`;
Product.getInitialProps = async (ctx) => {
  const { slug = "" } = ctx.query;
  return await client.fetch(query, { slug });
};
