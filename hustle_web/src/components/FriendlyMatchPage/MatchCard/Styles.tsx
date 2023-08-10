import { styled } from 'styled-components';

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 30rem;
  border: 0.5px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.25) 4px 4px 3px;
  font-size: 23px;
  padding-top: 1rem;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-weight: 700;
  margin: 3rem 0;
`;

export const Message = styled.div`
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 6rem;
`;
