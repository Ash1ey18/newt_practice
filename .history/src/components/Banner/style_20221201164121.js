import styled from "styled-components";
import { tabletWidth } from "src/variables";
export const BannerWrapper = styled.div`
  height: 111px;
  margin: 17px 19px 0;
  border-radius: 8px;
  background-color: #e4f8ea;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media only screen and (min-width: ${tabletWidth}) {
    height: 180px;
    margin: 40px 0 0 0;
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
  }
`;
export const BannerRight = styled.div`
  margin-top: 15px;
  margin-left: 15px;
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
  height: 29px;
  display: flex;
  column-gap: 8px;
`;
