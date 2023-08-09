import styled from 'styled-components';

export const ButtonLayout = styled.div`
  width: 6rem;
  height: 3.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.color || 'black'};
`;
