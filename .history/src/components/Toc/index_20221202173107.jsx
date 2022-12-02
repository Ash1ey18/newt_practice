import React from "react";
import Link from "next/link";
import { TocWrapper, Title, ListTilte } from "./style";
export default function Toc() {
  return (
    <TocWrapper>
      <Title>Contents</Title>
      <ListTilte>
        <Link></Link> 台湾・高雄の定番観光スポットランキングTOP10
      </ListTilte>
      <li>
        1位
        蓮池潭・龍虎塔（れんちたん・りゅうことう／ロンフーター・リェンチータン）
      </li>
      <li>2位 愛河（あいが／アイホー）</li>
      <li>3位美麗島駅（びれいとうえき／メイリーダオ</li>
      <li>4位 旗津半島（きしんはんとう／チージンバンダオヂャン）</li>
      <li>5位 駁二芸術特区（The Pier-2 Art Center）</li>
      <li>6位 高雄85ビル（85 Sky Tower）</li>
      <li>7位 西子湾（せいしわん／シーヅーワン）</li>
      <li>8位 澄清湖（ちょうせいこ／チョンチンフー）</li>
      <li>9位 打狗英国領事館（だくえいこくりょうじかんぶんかえんく）</li>
      <li>10位 三鳳宮（さんほうきゅう）</li>
    </TocWrapper>
  );
}
