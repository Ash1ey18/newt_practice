import React from "react";
import Link from "next/link";
import {
  TocWrapper,
  Title,
  ListTilte,
  TocSection,
  List,
  ListItem,
  TocBtn,
} from "./style";
export default function Toc() {
  return (
    <TocWrapper>
      <Title>Contents</Title>
      <TocSection>
        <ListTilte>
          <Link href="">
            <a>台湾・高雄の定番観光スポットランキングTOP10</a>
          </Link>
        </ListTilte>
        <List>
          <ListItem>
            1位
            蓮池潭・龍虎塔（れんちたん・りゅうことう／ロンフーター・リェンチータン）
          </ListItem>
          <ListItem>2位 愛河（あいが／アイホー）</ListItem>
          <ListItem>
            3位美麗島駅（びれいとうえき／メイリーダオ ヂャン）
          </ListItem>
          <ListItem>4位 旗津半島（きしんはんとう／チージンバンダオ）</ListItem>
          <ListItem>5位 駁二芸術特区（The Pier-2 Art Center）</ListItem>
          <ListItem>6位 高雄85ビル（85 Sky Tower）</ListItem>
          <ListItem>7位 西子湾（せいしわん／シーヅーワン）</ListItem>
          <ListItem>8位 澄清湖（ちょうせいこ／チョンチンフー）</ListItem>
          <ListItem>
            9位 打狗英国領事館（だくえいこくりょうじかんぶんかえんく）
          </ListItem>
          <ListItem>10位 三鳳宮（さんほうきゅう）</ListItem>
        </List>
      </TocSection>
      <TocBtn>もっとみる</TocBtn>
    </TocWrapper>
  );
}
