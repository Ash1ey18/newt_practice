import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;

export const Header = styled.header`
  margin: 16px 20px 0;
  padding: 0 0 16px;
`;
