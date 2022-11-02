import styled from "styled-components";
import Image from "next/image";

export const StyledUl = styled.ul`
  list-style: none;
  padding-inline-start: 0 !important;
  margin: 12px 20px 0 20px;
`;
export const StyledLi = styled.li`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 100;
    height: 100%;
    width: 100%;
    background-color: #1f1f1f;
    opacity: 0.7;
  }
  &::after {
    content: "はわぅ";
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
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

export const StyledImage = styled(Image)``;
