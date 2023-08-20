export interface menuTypes {
  id: number;
  label: string;
  isSelected: boolean;
}

export interface CompetitionMenuTypes {
  id: number;
  label: string;
  type: 'Preliminary' | 'Finals';
  isSelected: boolean;
}

export interface sortTypes {
  id: number;
  sort: string;
  label: string;
}

export interface CompetitionTypes {
  id: number;
  img: string;
  sort: string;
  title: string;
  location: string;
  date: string;
}

export interface clubListsTypes {
  sportId: number;
  sport: string;
  img: string;
  clubName: string;
  title: string;
  location: string;
  date: string;
  person: string;
  contact: string;
}

export interface selectedTypes {
  selected: boolean;
}

export interface CompetitionResultTypes {
  sportId: number;
  sortId: number;
  id: number;
  date: string;
  time: string;
  matchName: string;
  team1: string;
  team2: string;
  score: string;
}

export interface scoreTypes {
  club1Id: number;
  club2Id: number;
  score: string;
}
