import styled from "styled-components";

export const StyledUl = styled.ul`
  list-style: none;
  margin: 31px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (min-width: 640px) {
    margin: 48px 0 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }
`;
export const StyledLi = styled.li`
  height: 164px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;
export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    z-index: 100;
    height: 100%;
    width: 100%;
    background-color: #1f1f1f;
    opacity: 0.2;
  }
  &::after {
    content: "${(props) => props.content}";
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%, -50%);
    @media only screen and (min-width: 640px) {
      width: 60%;
      font-size: 18px;
      font-weight: 600;
    }
  }
  &:hover {
    &::before {
      opacity: 0.1;
    }
    &::after {
      opacity: 0.8;
    }
  }
  > span {
    height: 100% !important;
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;
