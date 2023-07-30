import styled from "styled-components";
import FONT from "../../styles/Font";
import Colors from "../../styles/Color";

export const Header = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
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

