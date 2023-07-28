import styled from "styled-components";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const LogoWrapper = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

export const LogoText = styled.span`
  color: #000;
  //font-family: Pretendard;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  margin-left: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const Text = styled.div`
  font-size : 1.2rem;
  font-weight: 400;
  Line height: 1.4rem;
  color : #7B7B7B;
  margin-left: 1rem;
`;

export const Line = styled.div`
  border-left: 1px solid #7b7b7b;
  height: 1rem;
  margin-left: 1rem;
`;
