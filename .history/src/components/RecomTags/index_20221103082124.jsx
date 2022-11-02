import React from "react";
import Link from "next/link";

import SectionWrapper from "src/components/SectionWrapper";
import { TagsWrapperDiv, StyledUl } from "./style";

export default function RecomTags() {
  return (
    <SectionWrapper>
      <h2>オススメのタグ</h2>
      <TagsWrapperDiv>
        <StyledUl>
          <li>
            <Link>#ドバイ 観光</Link>
          </li>
          <li>#イタリア 観光</li>
          <li>#カナダ 観光</li>
          <li>#トルコ 観光</li>
          <li>#シンガポール ホテル</li>
          <li>#シンガポール 観光</li>
          <li>#フィリピン 観光</li>
          <li>#セブ 観光</li>
          <li>#ニューヨーク 観光</li>
          <li>#韓国 ホテル</li>
          <li>#韓国 グルメ</li>
          <li>#韓国 観光</li>
          <li>#グアム グルメ</li>
          <li>#グアム ホテル</li>
          <li>#グアム 観光</li>
          <li>#オアフ島 ホテル</li>
          <li>#オアフ島 観光</li>
          <li>#サムイ ホテル</li>
          <li>#パタヤ 観光</li>
          <li>#パタヤ ホテル</li>
          <li>#オーシャンビュー</li>
          <li>#チェンマイ 観光</li>
          <li>#カップル</li>
          <li>#ハワイ島 グルメ</li>
          <li>#ハワイ島 観光</li>
          <li>#アユタヤ 観光</li>
          <li>#航空券</li>
          <li>#ハウツー</li>
          <li>#ビーチ</li>
          <li>#フォトジェニック</li>
          <li>#ラグジュアリーホテル</li>
          <li>#女子旅</li>
          <li>#初心者</li>
          <li>#家族連れ</li>
          <li>#子連れ</li>
          <li>#モデルコース</li>
          <li>#ランキング</li>
          <li>#ハネムーン</li>
          <li>#プーケット ホテル</li>
          <li>#プーケット 観光</li>
          <li>#タイ 旅費</li>
          <li>#タイ グルメ</li>
          <li>#タイ ホテル</li>
          <li>#タイ 観光</li>
          <li>#バンコク グルメ</li>
          <li>#バンコク ホテル</li>
          <li>#バンコク 観光</li>
          <li>#ハワイ 旅費</li>
          <li>#ハワイ ホテル</li>
          <li>#ハワイ グルメ</li>
          <li>#ハワイ 観光</li>
        </StyledUl>
      </TagsWrapperDiv>
    </SectionWrapper>
  );
}
