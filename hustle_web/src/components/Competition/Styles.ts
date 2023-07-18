import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 564px;
  height: 200px;
  border-radius: 40px;
  border: 1px solid black;
  margin: 43px 142px 10px 69px;
  padding: 24px 0 0 42px;
  background-color: white;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 17px;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin-right: 24px;
`;



export const Title = styled.span`
  //font-family: Pretendard;
  width: auto;
  height: auto;
  margin: 1px 0;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
`;

export const Sub = styled.span`
  //font-family: Pretendard;
  width: auto;
  height: auto;
  margin: 2.5px 0;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  color: #000;
`;

