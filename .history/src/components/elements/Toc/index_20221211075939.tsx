/* eslint-disable no-unused-vars */
/*global JSX */
import Link from "next/link";
import React, { FC, useState } from "react";
import { Toc_Props, TocHandler } from "src/types/article-type";

import {
  ListItem,
  ListTilte,
  Title,
  TocBtn,
  TocContents,
  TocSection,
} from "./style";

const TestTitle = () => {
  return <Title>Contents</Title>;
};
export const SsTitle = React.memo(TestTitle);

const Toc: FC<Toc_Props> = ({ tocHeadings }) => {
  const [isSeeMore, setIsSeeMore] = useState(false);
  const newToc = [
    ...tocHeadings.map((heading) => {
      if (heading.name === "H2") {
        return (
          <ListTilte key={heading.id}>
            <Link href={`#${heading.id}`}>
              <a>{heading.text}</a>
            </Link>
          </ListTilte>
        );
      } else {
        return (
          <ListItem key={heading.id}>
            <Link href={`#${heading.id}`}>
              <a>{heading.text}</a>
            </Link>
          </ListItem>
        );
      }
    }),
  ];
  const TocHandler: TocHandler = (aryLength) => {
    const _ary = [];
    for (let i = 0; i < aryLength; i++) {
      _ary.push(newToc[i]);
    }
    return _ary;
  };
  const tocList = TocHandler(isSeeMore ? newToc.length : 6);
  return (
    <>
      {Boolean(newToc.length) && (
        <TocSection>
          <SsTitle />
          <TocContents>{tocList}</TocContents>
          {/* 見出しが６個以下かつまだボタンが押されていないときにボタンを表示 */}
          {tocList.length <= 6 && !isSeeMore && (
            <TocBtn onClick={() => setIsSeeMore((prev) => !prev)}>
              もっとみる
            </TocBtn>
          )}
        </TocSection>
      )}
    </>
  );
};
export default Toc;
