import styled from "styled-components";

export const Wraper = styled.div`
  position: relative;
  &:hover:active {
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
    width: 100% !important;
    height: unset !important;
  }
`;
