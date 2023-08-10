import styled from 'styled-components';
import FONT from '../../../styles/Font';
import Colors from '../../../styles/Color';
import Checkbox from '../../assets/svg/competition_check.svg';

export const CaptionText = styled.div`
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.LIGHT};
  color: ${Colors.Gray30};
  margin-top: 1.2rem;
`;

export const TitleText = styled.div`
  font-size: ${FONT.SIZE.TITLE3};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.BOLD};
  padding-top: 1.25rem;
`;

export const LeftWrapper = styled.div`
  width: 39.25rem;
  display: flex;
  justify-content: left;
`;

export const SubtitleLightText = styled.div`
  //width: 18rem;
  text-align: left;
  font-size: ${FONT.SIZE.BODY2};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.LIGHT};
  margin-bottom: 0.37rem;
`;

export const ApplyContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${Colors.BGgray};
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const NoticeContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid ${Colors.Gray20};
  padding: 10px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  margin-left: 14rem;
  cursor: pointer;
`;

export const CheckboxContainer2 = styled.label`
  display: flex;
  margin-left: 10.1rem;
  cursor: pointer;
`;

export const NoticeBox = styled.div`
  width: 39.25rem;
  height: 6.25rem;
  margin-top: 1.5rem;
  border: 1px solid #ccc;
  background-color: white;
`;

export const ArrowBox = styled.div`
  margin-left: 36.7rem;
  cursor: pointer;
`;

export const ApplySubtitleText = styled.div`
  //width: 18rem;
  text-align: center;
  font-size: ${FONT.SIZE.BODY2};
  color: ${Colors.MainBlack};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin-top: 1.94rem;
  margin-bottom: 0.75rem;
`;

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 39rem;
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

export const ApplyRowContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.div`
  padding: 0.5rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: red;
`;

export const InputSmall = styled(InputLarge)`
  width: 19rem;
`;

export const SubmitButton = styled.button`
  all: unset;
  width: 40rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Colors.WriteButton};
  color: ${Colors.TrueWhite};
  border-radius: 1.2rem;
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.SEMIBOLD};
  margin: 2rem 0;
  cursor: pointer;
`;
