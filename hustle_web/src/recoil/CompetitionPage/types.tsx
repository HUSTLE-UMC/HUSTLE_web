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

export interface menuTypes {
  id: number;
  label: string;
  isSelected: boolean;
}