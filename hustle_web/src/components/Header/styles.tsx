import styled from "styled-components";

export const HeaderContainer = styled.div`
  /*display: flex;
  flex-direction: column;
  background-color: #616161;
  align-items: normal;*/
  //margin 및 padding은 있다면 rem으로??
  display: flex;
  width: 100%;
  padding: 2.25rem 2.69rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //gap: 109px;
  @media (min-width: 768px) {
    //flex-direction: column;
    //justify-content: space-between;
    align-items: center;
    justify-content: center;
    //flex-direction: column;
  }
`;

export const GapContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 6.8125rem;
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`

export const LogoContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
`;

export const LogoWrapper = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
}
`

export const Nav = styled.div`
  display: flex;
  //text-align: center;
  justify-content: center;
  align-items: center;
  gap: 3.12rem;
  @media (max-width: 768px) {
    //justify-content: center;
    //align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`

export const LogoText = styled.span`
    color: #000;
    //font-family: Pretendard;
    font-size: 3.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  gap: 3.12rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`

export const NavTextbox = styled.a`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.25rem;
  }
`;

export const ProfileBtn = styled.div`
  width: 170px;
  height: 60px;
  border-radius: 2.5rem;
  border: 0.3px solid #000;
  background: #FFF;
  box-shadow: 10px 10px 4px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 768px) {
    width: 120px;
    height: 40px;
  }
`;

export const ProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.31rem;
  margin: 0.62rem 1.5rem 0.62rem 1.12rem;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: 0.62rem 1.5rem;
  }
`;

export const SVGWrapper = styled.div`
    width: 2.5rem;
    height: 2.5rem;

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const UserName = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HamburgerContainer = styled.img`
  width: 2.25rem;
  height: 1.75rem;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 1rem;
    height: 1rem;
  }
`
