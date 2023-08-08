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
  width: 39.25rem;
  display: flex;
  justify-content: center;
  text-align: center;
  place-items: center;
`;

export const RowContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
`;

export const RightWrapper = styled.div`
  width: 34rem;
  display: flex;
  justify-content: right;
`;

export const Error = styled.div`
  padding: 0.5rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: red;
`;

export const CancleImageBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 39.25rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
  &&::placeholder {
    color: ${Colors.Gray30};
  }
`;

export const InputSmall = styled(InputLarge)`
  width: 19rem;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CurrencyText = styled.span`
  position: absolute;
  right: 20px;
  font-size: ${FONT.SIZE.BODY3};
  top: 50%;
  color: ${Colors.Gray30};
  transform: translateY(-50%);
`;
