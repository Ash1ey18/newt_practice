import React from "react";
import SectionWraper from "src/components/SectionWraper";

import ArticleImg from "src/components/ArticleImg";

export default function LatesetArticles() {
  return (
    <SectionWraper>
      <h2>最新の記事</h2>
      <div>
        <div>
          <ArticleImg srcNo="10" alt="heiyoo" />
        </div>
        <div>
          <h1>記事のタイトル</h1>
          <div>AAA → BBB</div>
        </div>
      </div>
    </SectionWraper>
  );
}
