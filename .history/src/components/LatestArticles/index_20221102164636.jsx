import React from "react";
import SectionWraper from "src/components/SectionWraper";

import ArticleImg from "src/components/ArticleImg";
import { ArticlesWraper, ArticleWraper } from "./style";

export default function LatesetArticles() {
  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticlesWraper>
        <ArticleWraper>
          <ArticleImg srcNo="10" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="11" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="12" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="13" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="14" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="10" alt="heiyoo" />
          <h1>
            記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル記事のタイトル
          </h1>
          <div>
            <div>AAA → BBB</div>
          </div>
        </ArticleWraper>
      </ArticlesWraper>
    </SectionWraper>
  );
}
