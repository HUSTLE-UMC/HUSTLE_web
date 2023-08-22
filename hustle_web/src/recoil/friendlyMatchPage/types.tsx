import * as P from '../../constants/interfaces';

export interface menuTypes {
  id: number;
  label: string;
  isSelected: boolean;
}

export interface matchListsTypes {
  category: string;
  club: P.ClubProps;
  id: number;
  location: P.locationProps;
  locationAddress: string;
  name: string;
  phoneNumber: string;
  sportEvent: P.sportEventProps;
  startDate: string;
  title: string;
  user: { id: number };
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
