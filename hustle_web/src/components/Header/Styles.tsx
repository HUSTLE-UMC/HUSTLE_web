import styled from 'styled-components';
import FONT from '../../styles/Font';
import Colors from '../../styles/Color';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  //포지션 fixed로 하니까 화면 비율과 관련된 문제들이 발생해서 relative로 설정함
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBtn = styled.div`
  display: flex;
  height: 3.875rem;
  padding: 1.58333rem 0rem;
  margin: 0 8rem;
  justify-content: center;
  align-items: center;
  color: ${Colors.MainBlack};
  font-size: ${FONT.SIZE.TITLE3};
  font-weight: ${FONT.WEIGHT.REGULAR};

  &:hover {
    color: ${Colors.MainSemi};
  }

  /* active 상태일 때 스타일 */
  &:active {
    color: ${Colors.MainColor};
  }
`;


// LoginComponent.tsx에서 사용
export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// LoginComponent.tsx에서 사용
export const ProfileText = styled.div`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

// NotLoginComponent.tsx에서 사용
export const LogoutText = styled.div`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.REGULAR};
`;

