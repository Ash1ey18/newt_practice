import Link from "next/link";
import React, { useState } from "react";

import {
  ListItem,
  ListTilte,
  Title,
  TocBtn,
  TocContents,
  TocSection,
} from "./style";

export default function Toc({ toc }) {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const newToc = [
    ...toc.map((item) => {
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
    }),
  ];
  function TocHander(aryLength) {
    const _ary = [];
    for (let i = 0; i < aryLength; i++) {
      _ary.push(newToc[i]);
    }
    return _ary;
  }
  const tocList = TocHander(isSeeMore ? newToc.length : 6);
  return (
    <>
      {Boolean(newToc.length) && (
        <TocSection>
          <Title>Contents</Title>
          <TocContents>{tocList}</TocContents>
          {tocList.length <= 6 && !isSeeMore && (
            <TocBtn onClick={() => setIsSeeMore((prev) => !prev)}>
              もっとみる
            </TocBtn>
          )}
        </TocSection>
      )}
    </>
  );
}
