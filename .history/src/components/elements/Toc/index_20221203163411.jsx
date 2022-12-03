import Link from "next/link";
import React from "react";

import {
  BtnContainer,
  List,
  ListItem,
  ListTilte,
  Title,
  // TocBtn,
  TocContents,
  TocSection,
} from "./style";

export default function Toc({ toc }) {
  const newToc = [...toc];
  console.log(newToc);
  return (
    <TocSection>
      <Title>Contents</Title>
      <TocContents>
        <List>
          {newToc.map((item) => {
            if (item.name === "H2") {
              return (
                <ListTilte key={item.id}>
                  <Link href={`#${item.id}`}>
                    <a>{item.text}</a>
                  </Link>
                </ListTilte>
              );
            } else {
              return <ListItem key={item.id}>{item.text}</ListItem>;
            }
          })}
        </List>
      </TocContents>
      {/* ↓↓↓もっとみるボタンの処理を記述する。 */}
      <BtnContainer>
        {/* <TocBtn onClick={() => setIsSeeMore((prev) => !prev)}>
          もっとみる
        </TocBtn> */}
      </BtnContainer>
    </TocSection>
  );
}
