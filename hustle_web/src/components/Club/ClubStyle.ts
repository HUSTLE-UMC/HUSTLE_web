import styled from 'styled-components';
import FONT from '../../styles/Font';

import { Input } from '../../stories/Inputs/Input';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FONT.SIZE.BODY1};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

export const Search = styled(Input)`
  align-items: center;
`;
