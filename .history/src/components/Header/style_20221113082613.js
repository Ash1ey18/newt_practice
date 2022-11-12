import styled from "styled-components";
import { tabletWidth } from "src/variables";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  > span {
    vertical-align: middle;
    /* height: 24px; */
  }
  @media only screen and (min-width: ${tabletWidth}) {
    padding-left: 48px;
    padding-right: 56px;
    height: 80px;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgb(0 0 0 / 5%);
    & > a:hover {
      opacity: 0.6;
    }
  }
`;

export const HeaderSnsListul = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 19px;
  & a:hover {
    opacity: 0.6;
  }
`;
export const SnsListli = styled.li`
  height: 32px;
`;
