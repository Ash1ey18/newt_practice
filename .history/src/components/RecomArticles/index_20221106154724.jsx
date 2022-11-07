import React from "react";
import Link from "next/link";
import {
  ArticlesWraper,
  ArticleWraper,
  ArticleContentdiv,
  Title,
} from "./style";
import SectionWraper from "src/components/SectionWrapper";
import ArticleImg from "src/components/ArticleImg";
import LoctionPoint from "src/components/LocationPoint";

export default function RecomArticles() {
  return (
    <SectionWraper type={"recomArti"}>
      <h2>おすすめの記事</h2>
      <ArticlesWraper>
        <ArticleWraper>
          <ArticleImg srcNo="04" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                【2022年最新】韓国の人気観光地21選！ソウルの名所や地方の穴場スポットを厳選
              </Link>
            </Title>
            <LoctionPoint />
          </ArticleContentdiv>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="05" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                台湾・台北の安いホテル15選！きれい・駅近・おしゃれなホテルを厳選
              </Link>
            </Title>
          </ArticleContentdiv>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="06" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                韓国の慶州で訪れたい観光地10選！世界遺産や人気ドラマロケ地も
              </Link>
            </Title>
          </ArticleContentdiv>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="07" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                【2022年最新】フランス旅行1週間の費用を解説！物価や旅費の節約方法も紹介
              </Link>
            </Title>
          </ArticleContentdiv>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="08" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                【2022年最新】ドイツ旅行1週間の費用・予算は？安い時期や物価も紹介
              </Link>
            </Title>
          </ArticleContentdiv>
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="09" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                シンガポールの高級ホテルランキング17選！ラグジュアリーホテルを厳選
              </Link>
            </Title>
          </ArticleContentdiv>
        </ArticleWraper>
      </ArticlesWraper>
    </SectionWraper>
  );
}
