import React from "react";
import Link from "next/link";

import {
  ArticlesWraper,
  ArticleWraper,
  ArticleContentdiv,
  Title,
} from "./style";
import SectionWraper from "src/components/elements/SectionWrapper";
import ArticleImg from "src/components/elements/ArticleImg";
import LoctionPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function RecomArticles({ blog }) {
  const isTablet = useTabletMqContext();
  return (
    <SectionWraper type={"recomArti"}>
      <h2>おすすめの記事</h2>
      {blog.map((_blog) => {
        const category = _blog.category;
        const categoryName = { ...category[0] };
        const area = _blog.area;
        const areaName = { ...area[0] };
        const publishedAt = _blog.publishedAt;
        return (
          <ArticleWraper key={_blog.id}>
            <ArticleImg src={_blog.main_img.url} alt="メインビジュアル" priority={} />
            <ArticleContentdiv>
              <Title>
                <Link href="/">{_blog.title}</Link>
              </Title>
              {isTablet && (
                <>
                  <LoctionPoint
                    categry={categoryName.name}
                    area={areaName.name}
                  />
                  <ArticleDate date={publishedAt} />
                </>
              )}
            </ArticleContentdiv>
          </ArticleWraper>
        );
      })}
      <ArticlesWraper>
        {/* <ArticleWraper>
          <ArticleImg srcNo="05" alt="heiyo" />
          <ArticleContentdiv>
            <Title>
              <Link href="">
                台湾・台北の安いホテル15選！きれい・駅近・おしゃれなホテルを厳選
              </Link>
            </Title>
            {isTablet && (
              <>
                <LoctionPoint categry="フランス" />
                <ArticleDate date="2022年11月1日" />
              </>
            )}
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
            {isTablet && (
              <>
                <LoctionPoint categry="フランス" />
                <ArticleDate date="2022年11月1日" />
              </>
            )}
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
            {isTablet && (
              <>
                <LoctionPoint categry="フランス" />
                <ArticleDate date="2022年11月1日" />
              </>
            )}
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
            {isTablet && (
              <>
                <LoctionPoint categry="フランス" />
                <ArticleDate date="2022年11月1日" />
              </>
            )}
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
            {isTablet && (
              <>
                <LoctionPoint categry="フランス" />
                <ArticleDate date="2022年11月1日" />
              </>
            )}
          </ArticleContentdiv>
        </ArticleWraper> */}
      </ArticlesWraper>
    </SectionWraper>
  );
}
