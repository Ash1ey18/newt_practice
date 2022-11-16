/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import {
  ArticlesWraper,
  ArticleWraper,
  Title,
  ArtiDescriotn,
  BtnDiv,
} from "./style";

import SectionWraper from "src/components/elements/SectionWrapper";
import ArticleImg from "src/components/elements/ArticleImg";
import LocationPoint from "src/components/elements/LocationPoint";
import ArticleDate from "src/components/elements/ArticleDate";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

export default function LatesetArticles({ blog }) {
  const isTablet = useTabletMqContext();

  return (
    <SectionWraper where="latestArti">
      <h2>最新の記事</h2>
      <ArticlesWraper>
        {blog.map((_blog) => {
          console.log(blog.main_img.url);
          return (
            <ArticleWraper key={_blog.id}>
              <ArticleImg src={_blog.main_img} alt="heiyoo" />
              <Title>
                <Link href={`/blog/${_blog.id}`}>
                  <a>{_blog.title}</a>
                </Link>
              </Title>
              <LocationPoint categry="ハワイ・グアム" area="グアム" />
              {isTablet && (
                <>
                  <ArticleDate date="2022年11月8日" />
                  <ArtiDescriotn>
                    上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
                  </ArtiDescriotn>
                </>
              )}
            </ArticleWraper>
          );
        })}
        {/* <ArticleWraper>
          <ArticleImg srcNo="11" alt="heiyoo" />
          <Title>
            <Link href="">
              <a>
                【2022年最新】初めてのグアム旅行！費用やおすすめの安い時期を完全ガイド
              </a>
            </Link>
          </Title>
          <LocationPoint categry="ハワイ・グアム" area="グアム" />

          {isTablet && (
            <>
              <ArticleDate date="2022年11月8日" />
              <ArtiDescriotn>
                上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
              </ArtiDescriotn>
            </>
          )}
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="12" alt="heiyoo" />
          <Title>
            <Link href="">
              <a>
                ハワイで人気のグルメ20選！ランキング形式で定番の食べ物やローカルフードまで紹介
              </a>
            </Link>
          </Title>
          <LocationPoint categry="ハワイ・グアム" area="グアム" />
          {isTablet && (
            <>
              <ArticleDate date="2022年11月8日" />
              <ArtiDescriotn>
                上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
              </ArtiDescriotn>
            </>
          )}
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="13" alt="heiyoo" />
          <Title>
            <Link href="">
              <a>
                【2022年10月最新】韓国、入国後のPCR検査義務が廃止！渡航情報・入国手続き・規制について解説
              </a>
            </Link>
          </Title>
          <LocationPoint categry="ハワイ・グアム" area="グアム" />
          {isTablet && (
            <>
              <ArticleDate date="2022年11月8日" />
              <ArtiDescriotn>
                上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
              </ArtiDescriotn>
            </>
          )}
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="14" alt="heiyoo" />
          <Title>
            <Link href="">
              <a>
                バンコクの買い物スポット12選！おすすめのショッピングモールから安いお店まで
              </a>
            </Link>
          </Title>
          <LocationPoint categry="ハワイ・グアム" area="グアム" />
          {isTablet && (
            <>
              <ArticleDate date="2022年11月8日" />
              <ArtiDescriotn>
                上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
              </ArtiDescriotn>
            </>
          )}
        </ArticleWraper>
        <ArticleWraper>
          <ArticleImg srcNo="02" alt="heiyoo" />
          <Title>
            <Link href="">
              <a>
                【2022年最新】ドイツ旅行1週間の費用・予算は？安い時期や物価も紹介
              </a>
            </Link>
          </Title>
          <LocationPoint categry="ハワイ・グアム" area="グアム" />
          {isTablet && (
            <>
              <ArticleDate date="2022年11月8日" />
              <ArtiDescriotn>
                上海は中国の経済の中心地で、女子旅など観光地としても人気です。街並みがおしゃれで、センスの良い雑貨屋やカフェも数多くあります。さらに、2016年にはディズニーもオープンしたことで話題になりました。しかし、中国旅行にどれくらい費用がかかるのか想定しづらいですよね。そこで今回は、2泊3日の上海旅行にかかる費用について解説します。
              </ArtiDescriotn>
            </>
          )}
        </ArticleWraper> */}
      </ArticlesWraper>
      <BtnDiv>
        <p>
          <Link href="">
            <a>もっとみる</a>
          </Link>
        </p>
      </BtnDiv>
    </SectionWraper>
  );
}
