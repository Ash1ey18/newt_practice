import Link from "next/link";
import React from "react";

import {
  BtnContainer,
  List,
  ListItem,
  ListTilte,
  Title,
  // TocBtn,
  TocContents,
  TocSection,
} from "./style";

export default function Toc({ toc }) {
  const newToc = [...toc];
  console.log(newToc);
  return (
    <TocSection>
      <Title>Contents</Title>
      <TocContents>
        <List>
          {newToc.map((item) => {
            if (item.name === "H2") {
              return (
                <ListTilte key={item.id}>
                  <Link href={`#${item.id}`}>
                    <a>{item.text}</a>
                  </Link>
                </ListTilte>
              );
            } else {
              return <ListItem key={item.id}>{item.text}</ListItem>;
            }
          })}
        </List>

        {/* <ListItem>2位 愛河（あいが／アイホー）</ListItem>
        <ListItem>3位美麗島駅（びれいとうえき／メイリーダオ ヂャン）</ListItem>
        <ListItem>4位 旗津半島（きしんはんとう／チージンバンダオ）</ListItem>
        <ListItem>5位 駁二芸術特区（The Pier-2 Art Center）</ListItem> */}
        {/* <ListItem>6位 高雄85ビル（85 Sky Tower）</ListItem>
          <ListItem>7位 西子湾（せいしわん／シーヅーワン）</ListItem>
          <ListItem>8位 澄清湖（ちょうせいこ／チョンチンフー）</ListItem>
          <ListItem>
            9位 打狗英国領事館（だくえいこくりょうじかんぶんかえんく）
          </ListItem>
          <ListItem>10位 三鳳宮（さんほうきゅう）</ListItem> */}
      </TocContents>
      {/* ↓↓↓もっとみるボタンの処理を記述する。 */}
      <BtnContainer>
        {/* <TocBtn onClick={() => setIsSeeMore((prev) => !prev)}>
          もっとみる
        </TocBtn> */}
      </BtnContainer>
    </TocSection>
  );
}
