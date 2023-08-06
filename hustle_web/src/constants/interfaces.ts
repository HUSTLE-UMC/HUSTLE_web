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

export interface LeftCompetitionProps {
  competitiondate: number;
  recruitdate: number;
  fee: number;
  team: number;
  presidentname: string;
  president2name: string;
  onDataChange: (data: LeftCompetitionProps) => void;
}

export interface RightCompetitionProps {
  competitiondue: number;
  recruitdue: number;
  recruitteam: number;
  finalteam: number;
  presidentphone: string;
  president2phone: string;
  onDataChange: (data: RightCompetitionProps) => void;
}
