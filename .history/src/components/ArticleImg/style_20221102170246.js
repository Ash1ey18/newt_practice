import styled from "styled-components";

export const Wraper = styled.div`
  position: relative;
  &:hover {
    &::before {
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
