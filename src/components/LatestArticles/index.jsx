/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import ArticleList from "src/components/elements/ArticleList";
import SectionWraper from "src/components/elements/SectionWrapper";

import { BtnDiv } from "./style";

export default function LatestArticles({ latestBlog }) {
  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticleList blog={latestBlog} />
      <Link href="/all">
        <a>
          <BtnDiv>
            <p>もっとみる</p>
          </BtnDiv>
        </a>
      </Link>
    </SectionWraper>
  );
}
