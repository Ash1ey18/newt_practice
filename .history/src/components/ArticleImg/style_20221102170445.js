import styled from "styled-components";

export const Wraper = styled.div`
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: relative;
      z-index: 100;
      display: block;
      height: 100%;
      width: 100%;
      background-color: red;
      transform: translateX(100px);
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
