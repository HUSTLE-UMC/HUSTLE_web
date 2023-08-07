export interface menuTypes {
  id: number;
  label: string;
  isSelected: boolean;
}

export interface submitTypes {
  id: number;
  msg: string;
  isSubmitted: boolean;
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
