import styled from "styled-components";

export const Styledaside = styled.aside`
  padding: 24px 24px 20px 24px;
`;

export const StyledWrapperdiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const StyledSpan = styled.span`
  white-space: pre-wrap;
  margin: 0;
  font-weight: 600;
`;
export const ImgWrapper = styled.div`
  /* position: relative; */
  margin-left: 20px;
  margin-right: 20px;

  /* height: 245px !important; 
   > span {
    position: unset !important;
  } */
  & img {
    /* position: relative !important;
    width: 100% !important;
    height: unset !important; */
    margin-top: 20px;
  }

  text-align: center;
`;
export const BtnDiv = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  background-color: #34cd68;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  text-align: center;
`;
