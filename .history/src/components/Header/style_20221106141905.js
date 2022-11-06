import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  @media only screen and (min-width: 640px) {
    position: relative;
    padding-left: 48px;
    padding-right: 56px;
    height: 80px;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgsb(0 0 0 / 5%);
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
