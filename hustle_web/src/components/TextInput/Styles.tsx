import styled from 'styled-components';

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 0.1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  width: 50rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  font-size: 17px;
  border-radius: 0.8rem;
  margin: 0.5rem 0;
  &&::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const InputSmall = styled(InputLarge)`
  width: 16rem;
`;

export const InputMedium = styled(InputLarge)`
  width: 32rem;
`;
