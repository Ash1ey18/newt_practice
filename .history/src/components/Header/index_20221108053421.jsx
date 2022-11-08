/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "next/image";
import Link from "next/link.js";
import { Container, HeaderSnsListul, SnsListli } from "./style";
import { useMqContext } from "src/Context/MediaQueryContext";

export default function Header() {
  debugger;
  const isTablet = useMqContext();
  return (
    <Container>
      <Image src="/img/newtlogo1.svg" alt="newt" width={144} height={27} />
      {isTablet && (
        <HeaderSnsListul>
          <SnsListli>
            <Link href="https://page.line.me/847pjqcp?openQrModal=true">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/linelogo.svg"
                  alt="Lineリンク"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </SnsListli>
          <SnsListli>
            <Link href="https://twitter.com/newt_travel?openExternalBrowser=1">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/twitterlogo.svg"
                  alt="Twitterリンク"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </SnsListli>
          <SnsListli>
            <Link href="https://www.instagram.com/newt.travel/?hl=ja&openExternalBrowser=1">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/instagramlogo.svg"
                  alt="instagramリンク"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </SnsListli>
          <SnsListli>
            <Link href="https://www.tiktok.com/@newt_travel?openExternalBrowser=1">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/tiktoklogo.svg"
                  alt="TikTokリンク"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </SnsListli>
          <SnsListli>
            <Link href="https://www.youtube.com/channel/UCdM6a4_8TQCR03ShAGU8CyQ">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/youtubelogo.svg"
                  alt="Youtubeリンク"
                  width={32}
                  height={32}
                />
              </a>
            </Link>
          </SnsListli>
        </HeaderSnsListul>
      )}
    </Container>
  );
}
