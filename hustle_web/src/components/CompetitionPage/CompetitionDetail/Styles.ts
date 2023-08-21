// Styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  //margin-bottom: 2rem;
`;

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamLogo = styled.img`
  width: 100px;
  height: 100px;
`;

export const TeamName = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

export const MatchResult = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerResult = styled.div`
  margin: 5px 0;
`;

// Add more styling as needed
