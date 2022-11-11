/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FooterWrapper,
  Nav,
  Section,
  SectionTitleh2,
  SectionListul,
  Listli,
  SnsListul,
  Snsli,
  LowerAreadiv,
  Linkul,
  Linkli,
  CopyRightp,
} from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <Nav>
        <Section>
          <SectionTitleh2>NEWTについて</SectionTitleh2>
          <SectionListul>
            <Listli>
              <Link href="/">
                <a>NEWTとは</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>NEWT Brand</a>
              </Link>
            </Listli>
          </SectionListul>
        </Section>
        <Section>
          <SectionTitleh2>NEWTのサービス</SectionTitleh2>
          <SectionListul>
            <Listli>
              <Link href="/">
                <a>NEWT Magazine</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>海外渡航らくらくパック</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>トラベルコンシェルジュ</a>
              </Link>
            </Listli>
          </SectionListul>
        </Section>
        <Section>
          <SectionTitleh2>運営会社</SectionTitleh2>
          <SectionListul>
            <Listli>
              <Link href="/">
                <a>株式会社 令和トラベル</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>お知らせ</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>採用情報</a>
              </Link>
            </Listli>
          </SectionListul>
        </Section>
        <Section>
          <SectionTitleh2>サポート＆お問い合わせ</SectionTitleh2>
          <SectionListul>
            <Listli>
              <Link href="/">
                <a>ヘルプセンター</a>
              </Link>
            </Listli>
            <Listli>
              <Link href="/">
                <a>お問い合わせ</a>
              </Link>
            </Listli>
          </SectionListul>
          <Listli>
            <SnsListul>
              <Snsli>
                <Link href="https://twitter.com/newt_travel?openExternalBrowser=1">
                  <a>
                    <Image
                      src="/img/twitterlogo2.svg"
                      alt="twitterIcon"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </Snsli>
              <Snsli>
                <Link href="https://www.instagram.com/newt.travel/?hl=ja&openExternalBrowser=1">
                  <a>
                    <Image
                      src="/img/instagramlogo2.svg"
                      alt="instagramIcon"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </Snsli>
              <Snsli>
                <Link href="https://www.tiktok.com/@newt_travel?openExternalBrowser=1">
                  <a>
                    <Image
                      src="/img/tiktoklogo2.svg"
                      alt="tiktokIcon"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </Snsli>
              <Snsli>
                <Link href="https://page.line.me/847pjqcp?openQrModal=true">
                  <a>
                    <Image
                      src="/img/linelogo2.svg"
                      alt="lineIcon"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </Snsli>
              <Snsli>
                <Link href="https://www.youtube.com/channel/UCdM6a4_8TQCR03ShAGU8CyQ">
                  <a>
                    <Image
                      src="/img/youtubelogo2.svg"
                      alt="youtubeIcon"
                      width={40}
                      height={40}
                    />
                  </a>
                </Link>
              </Snsli>
            </SnsListul>
          </Listli>
        </Section>
      </Nav>
      <LowerAreadiv>
        <Linkul>
          <Linkli>
            <Link href="/">
              <a>利用規約</a>
            </Link>
          </Linkli>
          <Linkli>
            <Link href="/">
              <a>プライバシーポリシー</a>
            </Link>
          </Linkli>
          <Linkli>
            <Link href="/">
              <a>旅行業登録票</a>
            </Link>
          </Linkli>
        </Linkul>
        <CopyRightp>© 2021 Reiwa Travel, Inc.</CopyRightp>
      </LowerAreadiv>
    </FooterWrapper>
  );
}
