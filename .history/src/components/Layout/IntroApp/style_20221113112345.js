import styled from "styled-components";

import { tabletWidth } from "src/variables";

export const IntroAppWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #eeeeee;
`;

export const Styledaside = styled.aside`
  padding: 24px 24px 20px 24px;
  @media only screen and (min-width: ${tabletWidth}) {
    max-width: 720px;
    position: relative;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template:
      "img areaA" 1fr
      "img areaB" 140px
      / auto 350px;
    justify-content: space-between;
    & > span {
      margin: 14px 0 16px !important;
      grid-area: img;
    }
  }
`;

export const StyledWrapperdiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  @media only screen and (min-width: ${tabletWidth}) {
    height: 80px;
    margin-top: auto;
    justify-content: space-between;
  }
`;
export const StyledSpan = styled.span`
  white-space: pre-wrap;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.29em;
  @media only screen and (min-width: ${tabletWidth}) {
    font-size: 20px;
    display: inline-block;
    margin-right: 14px;
  }
`;
export const ImgWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: 245px !important;
  }
`;

export const DownloadIcons = styled.div`
  display: flex;
  column-gap: 24px;
  height: 48px;
  margin-top: 34px;
  grid-area: areaB;
`;

export const QRWrapperdiv = styled.div`
  position: absolute;
  width: 99px;
  height: 99px;
  top: 145px;
  left: 725px;
`;

export const BtnDiv = styled.div`
  margin-top: 24px;
  padding: 10px 0;
  background-color: #34cd68;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
`;
