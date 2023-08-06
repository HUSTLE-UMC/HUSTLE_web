import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const CompetitonContainer = styled.div``;

export const TitleText = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.BOLD};
  padding-top: 1.25rem;
`;

export const SubtitleText = styled.div`
  width: 18rem;
  text-align: left;
  font-size: ${FONT.SIZE.BODY2};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  padding-top: 1.87rem;
  padding-bottom: 0.75rem;
`;

export const CenterWrapper = styled.div`
  width: 32rem;
  display: flex;
  justify-content: center;
  text-align: center;
  place-items: center;
`;

export const RowContainer = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: row;
`;

export const RightWrapper = styled.div`
  width: 32rem;
  display: flex;
  justify-content: right;
`;

export const Error = styled.div`
  width: 32rem;
  padding: 5px;
  flex-shrink: 0;
`;
