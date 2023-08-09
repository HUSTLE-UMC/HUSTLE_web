import styled from 'styled-components';

export const MediumButton = styled.div`
  width: 43rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #677af5;
  color: white;
  border-radius: 1rem;
  font-size: 25px;
  font-weight: 700;
  margin: 2rem 0;
`;

export const SmallButton = styled(MediumButton)`
  width: 30rem;
  height: 4rem;
  margin: 3rem 1rem;
  border-radius: 0.5rem;
  font-size: 20px;
`;

export const IconWrap = styled.div`
  margin-left: 1rem;
  padding-top: 0.3rem;
`;
