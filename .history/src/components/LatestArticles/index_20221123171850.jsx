/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import ArticleList from "../ArticleList";
import SectionWraper from "../elements/SectionWrapper";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function LatesetArticles({ latestBlog }) {
  const isTablet = useTabletMqContext();

  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticleList blog={latestblog} />
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
