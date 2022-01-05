import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import groq from "groq";
import client from "../client";
import { MessengerChat } from "react-messenger-chat-plugin";

import { Loader } from "../components/Loader";
import { TextBlock } from "../components/TextBlock";
import { theme } from "../styles/styles";

export default function About() {
  const [hero, setHero] = useState(null);
  const [textBlock, setTextBlock] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const pageQuery = groq` *[_type == "page" && name == 'About'][0]{
      "pageItem": pageItem[]->{...}, 
    }`;

    client
      .fetch(pageQuery)
      .then(setLoading(true))
      .then((data) => {
        data.pageItem.map((page) => {
          switch (page._type) {
            case "hero":
              setHero(page);
              break;
            case "textBlock":
              setTextBlock(page);
              break;
          }
        });
      })
      .then(setLoading(false))
      .catch(console.error);
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {hero && <Hero image={hero.heroImage} />}
      {textBlock && <TextBlock color={theme.colors.accent} block={textBlock} />}
      <MessengerChat
        pageId="734860390568287"
        language="sv_SE"
        themeColor={theme.colors.chat}
        height={24}
        autoExpand={true}
        debugMode={false}
      />
    </div>
  );
}
