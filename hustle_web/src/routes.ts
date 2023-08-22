import React from 'react';
import { Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignIn = React.lazy(() => import('./pages/SignIn'));
const MyPage = React.lazy(() => import('./pages/MyPage/MyPageMain'));
const Question = React.lazy(
  () => import('./pages/Community/Question/QuestionPage')
);
const Community = React.lazy(() => import('./pages/Community/CommunityPage'));
const Club = React.lazy(() => import('./pages/Community/Club/Club'));
const Join = React.lazy(() => import('./pages/Join/Join'));
const Friendly = React.lazy(
  () => import('./pages/FriendlyMatch/FriendlyMatch')
);
const Competition = React.lazy(() => import('./pages/Competition/Competition'));
const QuestionForm = React.lazy(
  () => import('./components/Community/Question/QuestionForm')
);
const PostMatch = React.lazy(
  () => import('./components/FriendlyMatchPage/PostMatch/PostMatch')
);
const ApplyMatch = React.lazy(
  () => import('./components/FriendlyMatchPage/ApplyMatch/ApplyMatch')
);
const ApplyForm = React.lazy(
  () => import('./components/FriendlyMatchPage/ApplyMatch/ApplyForm')
);
const FriendlyLists = React.lazy(
  () =>
    import(
      './components/FriendlyMatchPage/MainMatch/FriendlyLists/FriendlyLists'
    )
);
const ForgotPage = React.lazy(() => import('./pages/Forgot/Forgotpage'));

const ResetPage = React.lazy(() => import('./pages/Forgot/Reset/Resetpage'));

const MainCompetition = React.lazy(
  () => import('./pages/MainCompetition/MainCompetition')
);

const ApplyCompetition = React.lazy(
  () => import('./pages/MainCompetition/ApplyCompetition')
);
const CompetitionApply = React.lazy(
  () => import('./pages/Competition/CompetitionApply/CompetitionApply')
);
const CompetitionResult = React.lazy(
  () => import('./pages/Competition/CompetitionResult/CompetitionResultPage')
);
const CompetitionDetailResult = React.lazy(
  () =>
    import(
      './pages/Competition/CompetitionDetailResult/CompetitionDetailResult'
    )
);
const CompetitionInput = React.lazy(
  () => import('./pages/Competition/CompetitionInputPage/CompetitionInputPage')
);

const PostCompetition = React.lazy(
  () => import('./components/MainCompetition/PostCompetition/PostCompetition')
);
const RankingPage = React.lazy(() => import('./pages/Ranking/RankingPage'));
const CompetitionApplyForm = React.lazy(
  () => import('./components/MainCompetition/ApplyForm/CompetitionApplyForm')
);

const routes = [
  { path: '/', element: Home },
  { path: '/login', element: Login },
  { path: '/signIn', element: SignIn },
  { path: '/mypage', element: MyPage },
  { path: '/community/question', element: Question },
  { path: '/community/question/write', element: QuestionForm },
  { path: '/community', element: Community },
  { path: '/club', element: Club },
  { path: '/join', element: Join },
  { path: '/friendly', element: Friendly },
  { path: '/friendly/match', element: FriendlyLists },
  { path: '/friendly/invite', element: FriendlyLists },
  { path: '/competitions', element: Competition },
  { path: '/competitions/applyform', element: CompetitionApplyForm },
  { path: '/competitions/apply/:competitionId', element: CompetitionApply },
  { path: '/competitions/post', element: PostCompetition },
  { path: '/competitions/result', element: CompetitionResult },
  { path: '/competitions/detail', element: CompetitionDetailResult },
  { path: '/competitions/input', element: CompetitionInput },
  { path: '/friendly/post', element: PostMatch },
  { path: '/friendly/apply', element: ApplyMatch },
  { path: '/friendly/apply/form', element: ApplyForm },
  { path: '/forgot', element: ForgotPage },
  { path: '/reset', element: ResetPage },
  { path: '/maincompetition', element: MainCompetition },
  { path: '/maincompetition/apply', element: ApplyCompetition },
  { path: '/ranking', element: RankingPage }
];

export default routes;
