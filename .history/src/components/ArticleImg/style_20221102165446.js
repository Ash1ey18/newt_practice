import styled from "styled-components";

export const Wraper = styled.div`
  position: relative;
  &:hover::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: red;
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
