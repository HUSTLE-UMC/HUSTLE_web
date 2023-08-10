export interface QuestionProps {
  title: string;
  content: string;
}

export interface LoginProps {
  username: string;
  password: string;
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
  clubName: string;
  person: string;
  contact: string;
}

export interface PostMatchProps {
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

export interface MainCompetitionProps {
  competitionname: string;
  teamname: string;
  support: string;
  competitiondue: number;
  recruitdue: number;
  recruitteam: number;
  finalteam: number;
  presidentphone: string;
  president2phone: string;
  competitiondate: number;
  recruitdate: number;
  fee: number;
  team: number;
  presidentname: string;
  president2name: string;
}

export interface CompetitionApplyProps {
  teamname: string;
  name: string;
  phone: string;
}
