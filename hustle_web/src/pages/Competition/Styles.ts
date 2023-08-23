import styled from 'styled-components';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SortWrap = styled.div`
  width: 120rem;
  height: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 0.2rem solid ${Colors.MainBlack};
  border-bottom: 0.1rem solid ${Colors.MainBlack};
  margin-top: 4.5rem;
  background-color: white;
  //padding: 10px;
`;

export const LabelBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.6rem;
  height: 8rem;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.2rem;
  height: 8rem;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
`;

export const PeriodBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.4rem;
  height: 8rem;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 8rem;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.REGULAR};
  font-family: Pretendard;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 14rem;
`;

export const PostBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20rem;
  height: 14rem;
  margin-top: 2rem;
  margin-right: 10rem;
  margin-left: auto;
`;