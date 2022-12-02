import styled from "styled-components";
import { tabletWidth, homeMaxWidth } from "src/variables";

export const TagsWrapperDiv = styled.div`
  background-color: #fafafa;
  margin: 16px 20px 0 20px;
  padding: 24px;
  border: 1px solid #eeeeee;
  border-radius: 5px;

  @media only screen and (min-width: ${tabletWidth}) {
    max-width: ${homeMaxWidth};
    margin: 32px auto 0;
  }
`;
export const StyledUl = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  @media only screen and (min-width: ${tabletWidth}) {
    gap: 8px 16px;
  }
`;
export const StyledLi = styled.li`
  font-size: 14px;
  &:hover {
    opacity: 0.7;
  }
`;
