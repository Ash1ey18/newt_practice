import { tabletWidth } from "src/variables";
import styled from "styled-components";
export const BannerWrapper = styled.aside`
  height: 111px;
  margin: 17px 0 0;
  border-radius: 8px;
  background-color: #e4f8ea;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media only screen and (min-width: ${tabletWidth}) {
    height: 180px;
    margin: 40px 0 0;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  top: 15px;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 99px !important;
    height: unset !important;
    @media only screen and (min-width: ${tabletWidth}) {
      width: 170px !important;
    }
  }
`;
export const BannerRight = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  @media only screen and (min-width: ${tabletWidth}) {
    margin-top: 30px;
    margin-left: 64px;
  }
`;
export const Heading = styled.div`
  display: flex;
  column-gap: 16px;
  line-height: 19px;
`;
export const BannerTitle = styled.span`
  font-weight: 600;
  white-space: pre-wrap;
  font-size: 13px;
  color: #1f1f1f;
  letter-spacing: 0.1em;
  @media only screen and (min-width: ${tabletWidth}) {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const AppBtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 8px;
  & span {
    vertical-align: top;
  }
`;
<img
  alt="トップ画像"
  sizes="(min-width:640px) 50vw"
  srcSet="/_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=384&q=75 384w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=3840&q=75 3840w"
  src="/_next/image?url=https%3A%2F%[2Fimages.microcms-assets.io](http://2fimages.microcms-assets.io/)%2Fassets%2Fe0293713c85449168d964f445fb37489%2F1142e42a06a6460c973f22edc4618ee2%2Fimg02.jpg&w=3840&q=75"
  decoding="async"
  data-nimg="fill"
  style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
></img>;
