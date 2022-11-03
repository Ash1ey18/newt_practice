import styled from "styled-components";

export const Styledaside = styled.aside``;

export const StyledWrapperdiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  /* margin: 0 auto; */
`;
export const Styledh2 = styled.h2`
  white-space: pre-wrap;
  margin: 0;
`;
export const ImgWrapper = styled.div`
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: unset !important;
  }
`;
