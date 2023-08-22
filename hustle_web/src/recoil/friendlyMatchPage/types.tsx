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

export interface matchListsTypes {
  sportId: number;
  sport: string;
  clubName: string;
  title: string;
  location: string;
  date: string;
  person: string;
  contact: string;
}

export interface invitationListsTypes {
  sportId: number;
  sport: string;
  clubName: string;
  title: string;
  location: string;
  date: string;
  person: string;
  contact: string;
}

export interface pageNumberTypes {
  id: number;
  isSelected: boolean;
}

export interface currentLocationTypes {
  lat: number;
  lng: number;
}
