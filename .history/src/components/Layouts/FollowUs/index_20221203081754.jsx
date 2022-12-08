/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTabletMqContext } from "src/Context/MediaQueryContext";

import {
  FollowUsWrapper,
  SnsListul,
  Styledaside,
  Styledh1,
  Styledp,
} from "./style";

export default function FollowUs() {
  const isTablet = useTabletMqContext();
  return (
    <FollowUsWrapper>
      <Styledaside>
        <Styledh1>Follow Us</Styledh1>
        <Styledp>
          最新の渡航ニュースやおすすめスポットなど、
          {`\n`}
          海外旅行の情報をお届けします✈️
        </Styledp>
        <SnsListul>
          <li>
            <Link href="https://page.line.me/847pjqcp?openQrModal=true">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/img/linelogo.svg"
                  alt="Lineリンク"
                  width={isTablet ? 48 : 40}
                  height={isTablet ? 48 : 40}
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
                  width={isTablet ? 48 : 40}
                  height={isTablet ? 48 : 40}
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
                  width={isTablet ? 48 : 40}
                  height={isTablet ? 48 : 40}
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
                  width={isTablet ? 48 : 40}
                  height={isTablet ? 48 : 40}
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
                  width={isTablet ? 48 : 40}
                  height={isTablet ? 48 : 40}
                />
              </a>
            </Link>
          </li>
        </SnsListul>
      </Styledaside>
    </FollowUsWrapper>
  );
}
