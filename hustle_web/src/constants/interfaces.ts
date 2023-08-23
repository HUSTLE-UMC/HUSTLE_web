export interface QuestionProps {
  title: string;
  content: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface kakaoLoginProps {
  onSuccess: string;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  updateAccessToken: (token: string) => void;
  refreshAccessToken: () => Promise<void>;
  logoutHandler: () => void;
}

export interface buttonProps {
  active: boolean;
}

export interface forgotProps {
  name: string;
  birth: number;
}

export interface ErrorProps {
  onError: boolean;
}

export interface findPwProps {
  name: string;
  birth: number;
  id: string;
}

export interface isMatchProps {
  isMatch: boolean;
}

export interface ApplyMatchProps {
  type: 'WAIT' | 'ACCEPT' | 'DECLINE';
  name: string;
  phoneNumber: string;
  locationAddress?: string;
}

export interface PostMatchProps {
  title: string;
  category: string;
  name: string;
  phoneNumber: string;
  startDate: string;
  location: locationProps;
  locationAddress: string;
  sportEventId: number;
  clubId: number;
}

export interface MainCompetitionProps {
  title: string;
  host: string;
  place: string;
  sponsor: string;
  endDate: string;
  recruitmentEndDate: string;
  maxEntryCount: string; //
  finalRoundTeamCount: string; //
  // presidentphone: string;
  // president2phone: string;
  startDate: string;
  recruitmentStartDate: string;
  entryFee: string; //
  preRoundGroupCount: string; //
  // presidentname: string;
  // president2name: string;
  posterUrl: string;
  contacts: [
    {
      name: string;
      phoneNumber: string;
    },
    {
      name: string;
      phoneNumber: string;
    }
  ];
}

export interface CompetitionApplyProps {
  teamname: string;
  name: string;
  phone: string;
}

export interface SignInProps {
  email: string;
  password: string;
  passwordcheck: string;
  name: string;
  birthday: string;
  universityId: string;
  gender: string;
}

export interface RankingProps {
  id: number;
  rank: string;
  teamname: string;
  matchesNumber: number;
  win: number;
  undefeat: number;
  defeat: number;
  logo: string;
  menuId: number;
}

export interface ApplyCompetitionProps {
  title: string;
  host: string;
  startDate: string;
  dueDate: string;
}

export interface UniversityProps {
  id: number;
  name: string;
  address: string;
}

export interface ClubProps {
  id: number;
  instagram: string;
  mainArea: string;
  name: string;
  point: number;
  profileImageUrl: string;
  sportEvent: sportEventProps;
  university: UniversityProps;
  youtubeUrl: string;
}

export interface sportEventProps {
  id: number;
  name: string;
}

export interface locationProps {
  coordinates: number[];
  type: string;
}
