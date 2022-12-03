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
