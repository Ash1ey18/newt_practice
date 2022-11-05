/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Image from "next/image";
import Link from "next/link.js";
import { HeaderSnsListul, Container } from "./style";

export default function Header() {
  const [hydrated, setHydrated] = useState(false);
  const isDesktop = useMediaQuery(
    { query: "(min-width: 600px)" },
    hydrated ? {} : { deviceWidth: 0 }
  );

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <Container>
      <Image src="/img/newtlogo1.svg" alt="newt" width={140} height={27} />
      {isDesktop && (
        <HeaderSnsListul>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </HeaderSnsListul>
      )}
    </Container>
  );
}
