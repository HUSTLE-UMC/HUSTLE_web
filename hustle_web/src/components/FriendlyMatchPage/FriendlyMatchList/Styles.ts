import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 34rem;
  height: 15.5rem;
  padding: 1.5rem 0 0 3rem;
  border-radius: 40px;
  border: solid 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 18px;
  align-items: center;
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
  width: auto;
  height: auto;
  //font-family: Pretendard;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

export const Content = styled.span`
  width: auto;
  height: auto;
  //font-family: Pretendard;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  margin-bottom: 6px;
`;
