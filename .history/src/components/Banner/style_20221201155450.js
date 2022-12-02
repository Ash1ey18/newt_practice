import styled from "styled-components";

export const BannerWrapper = styled.div`
  margin: 17px 19px 0;
  height: 111px;
  background-color: #e4f8ea;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  position: relative;
  top: 15px;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      z-index: 100;
      display: block;
      height: 100%;
      width: 100%;
      background-color: #ffff;
      opacity: 0.4;
    }
  }
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 99px !important;
    height: unset !important;
  }
`;

export const Heading = styled.div`
  margin-left: 15px;
`;
export const BannerTitle = styled.span`
  font-weight: 600;
  white-space: pre-wrap;
  font-size: 13px;
  color: #1f1f1f;
  letter-spacing: 0.1em;
`;
export const AppBtnWrapper = styled.div`
  font-weight: 600;
`;
