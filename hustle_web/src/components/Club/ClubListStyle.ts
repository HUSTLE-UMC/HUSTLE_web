import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const Container = styled.div`
  width: 1440px;
`;

export const FirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const preparingImg = styled.div`
  display: flex;
  justify-content: center;
  padding: 150px;
`;

export const PointImg = styled.img`
  display: flex;
  background-color: none;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.BOLD};
`;

export const WriteButton = styled(Link)`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  text-decoration: none;
  background-color: ${Colors.WriteButton};
  color: white;
  cursor: pointer;
  border: none;
  text-align: center;
  width: 10rem;
  height: 1.5rem;
  margin: 63px 142px 15px 292px;
  padding: 12px 48.5px 13px 47px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Border = styled.span`
  display: flex;
  justify-content: space-between;
  width: auto;
  font-size: 40px;
  font-weight: 700;
`;

export const ButtonWrap = styled.div``;

export const listLayout = styled.div`
  width: 100rem;
  height: 8rem;
  padding: 1rem;
`;

export const IconWrap = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const listContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const List = styled.span`
  flex: 1;
  font-size: 35px;
`;

export const detail = styled.div`
  margin-top: 1rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start; /* 세로 가운데 정렬 */
  justify-content: space-between; /* 가로로 최대한 늘림 */
  flex-direction: row;
  paddign: 10px;
  position: relative; /* li 내부 요소들의 위치를 상대적으로 조정 */
`;

export const Form = styled.form`
  width: 1080px;
  margin: 20px auto;
`;

export const questionContainer = styled.div`
  margin: 0 auto;
  text-align: left;
  padding: 30px 0;
`;

export const contentInput = styled.input`
  border-radius: 10px;
  height: 3rem;
  width: 1038px;
  margin-top: 1.5rem;
  padding: 13px 13px;
  border: solid 1px rgba(0, 0, 0, 0.25);
`;
export const textArea = styled.textarea`
  margin-top: 1.5rem;
  text-align: left;
  padding: 13px 20px;
  border-radius: 10px;
  width: 1034px;
  border: solid 1px rgba(0, 0, 0, 0.25);
`;

export const button = styled.button`
  display: flex;
  background-color: ${Colors.WriteButton};
  color: white;
  cursor: pointer;
  border: none;
  text-align: center;
  width: 23rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  float: right;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 2rem;
`;

export const text = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-top: 2rem;
`;
