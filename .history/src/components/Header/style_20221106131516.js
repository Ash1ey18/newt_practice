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
    align-items: center;
    box-shadow: 3px 2px 11px -6px rgb(0 0 0 / 60%);
  }
`;

export const HeaderSnsListul = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  & a:hover {
    opacity: 0.6;
  }
`;
