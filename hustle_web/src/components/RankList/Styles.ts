import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const ListContainer = styled.li`
  background-color: ${Colors.TrueWhite};
  list-style-type: none;
  border-top: solid 0.05rem ${Colors.Gray20};
  border-bottom: solid 0.05rem ${Colors.Gray20};
  align-items: center;
  justify-content: center;
`;

export const RankWrap = styled.span`
  font-size: 2.4rem;
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.MainBlack};
`;
export const ImgWrap = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1.25rem;
`;
export const NameWrap = styled.span`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

export const ContentWrap = styled.span`
  width: 11.8rem;
  justify-content: center;
  align-items: center;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  background-color: ${Colors.TrueWhite};
  color: ${Colors.MainBlack};
  border: solid 0.1rem ${Colors.TrueBlack};
  padding: 1.25rem 2.75rem;
`;
