import Link from "next/link";
import React, { useState } from "react";

import {
  BtnContainer,
  ListItem,
  ListTilte,
  Title,
  TocBtn,
  TocContents,
  TocSection,
} from "./style";

export default function Toc({ toc }) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const newToc = [...toc];
  const arry = newToc.map((item) => {
    if (item.name === "H2") {
      return (
        <ListTilte key={item.id}>
          <Link href={`#${item.id}`}>
            <a>{item.text}</a>
          </Link>
        </ListTilte>
      );
    } else {
      return (
        <ListItem key={item.id}>
          <Link href={`#${item.id}`}>
            <a>{item.text}</a>
          </Link>
        </ListItem>
      );
    }
  });
  console.log(arry);
  console.log(isSeeMore);
  return (
    <TocSection>
      <Title>Contents</Title>
      <TocContents>{}</TocContents>
      {/* ↓↓↓もっとみるボタンの処理を記述する。 */}
      <BtnContainer>
        {newToc.length >= 7 && (
          <TocBtn onClick={() => setIsSeeMore((prev) => !prev)}>
            もっとみる
          </TocBtn>
        )}
      </BtnContainer>
    </TocSection>
  );
}
