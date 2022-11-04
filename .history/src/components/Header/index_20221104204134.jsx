import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import { Container } from "./style";
import { SnsListul } from "src/components/FollowUs/style";
import Link from "next/link.js";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 600px)",
  });
  return (
    <Container>
      <Image src="/img/newtlogo1.svg" alt="newt" width={140} height={27} />
      {isDesktopOrLaptop && (
        <>
          <SnsListul>
            <li>
              <Link href="https://page.line.me/847pjqcp?openQrModal=true">
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/img/linelogo.svg"
                    alt="Lineリンク"
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
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
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </li>
          </SnsListul>
        </>
      )}
    </Container>
  );
}
