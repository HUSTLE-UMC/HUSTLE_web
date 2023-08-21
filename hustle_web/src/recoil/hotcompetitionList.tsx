// hotcompetitionList.tsx
export {}; 
export interface Contact {
    id: number;
    name: string;
    phoneNumber: string;
  }
  
  export interface SportEvent {
    id: number;
    name: string;
  }
  
  export interface HotCompetition {
    id: number;
    title: string;
    host: string;
    place: string;
    startDate: string;
    endDate: string;
    recruitmentStartDate: string;
    recruitmentEndDate: string;
    entryFee: number;
    maxEntryCount: number;
    entryCount: number;
    sponsor: string;
    posterUrl: string;
    preRoundGroupCount: number;
    finalRoundTeamCount: number;
    competitionState: string;
    contacts: Contact[];
    sportEvent: SportEvent;
  }
  