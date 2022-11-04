import styled from "styled-components";

export const HeadContainer = styled.div`
  width: 100%;
  height: 56px;
`;
export const ImgContainer = styled.div`
  position: relative;
  margin: 0 auto;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;
