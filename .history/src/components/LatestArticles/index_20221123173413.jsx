/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import ArticleList from "src/components/ArticleList";
import { BtnDiv } from "./style";
import SectionWraper from "../elements/SectionWrapper";

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
