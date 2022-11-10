import styled from "styled-components";

export const Styledaside = styled.aside`
  border-top: 1px solid #eeeeee;
  padding: 24px 24px 20px 24px;
  @media only screen and (min-width: 640px) {
    padding: 24px 0 0 0;
    display: grid;
    grid-template:
      "img areaA" 1fr
      "img areaB" 1fr
      / auto 350px;
    justify-content: space-between;
    row-gap: 20px;
    & span {
      grid-area: img;
    }
  }
`;

export const StyledWrapperdiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  @media only screen and (min-width: 640px) {
    justify-content: left bottom;
    margin-top: 36px;
  }
`;
export const StyledSpan = styled.span`
  white-space: pre-wrap;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.29em;
  @media only screen and (min-width: 640px) {
    font-size: 20px;
  }
`;
export const ImgWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  > span {
    position: unset !important;
  }
  & img {
    position: relative !important;
    width: 100% !important;
    height: 245px !important;
  }
`;

export const BtnDiv = styled.div`
  margin-top: 24px;
  padding: 10px 0;
  background-color: #34cd68;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  line-height: 28px;
  text-align: center;
`;
