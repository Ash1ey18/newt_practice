import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  @media only screen and (min-width: 640px) {
    padding-left: 48px;
    padding-right: 56px;
    height: 80px;
    justify-content: space-between;
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