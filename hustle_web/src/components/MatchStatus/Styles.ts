import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const StatusContainer = styled.div<{ status: string }>`
  width: 8rem;
  height: 3rem;
  display: flex;
  border: solid 0.1rem ${Colors.Gray20};
  background-color: ${({ status }) => {
    switch (status) {
      case 'before':
        return Colors.Before;
      case 'applying':
        return Colors.Applying;
      case 'ongoing':
        return Colors.Ongoing;
      case 'finish':
        return Colors.Finish;
      default:
        return Colors.Gray20;
    }
  }};
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: ${FONT.SIZE.BODY3};
  color: ${Colors.TrueWhite};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
`;
