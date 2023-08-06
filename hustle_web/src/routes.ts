import React from 'react';

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
const Match = React.lazy(() => import('./pages/FriendlyMatch/FriendlyMatch'));
const List1 = React.lazy(() => import('./components/Competition/list1'));
const QuestionForm = React.lazy(
  () => import('./components/Community/Question/QuestionForm')
);
const PostMatch = React.lazy(
  () => import('./components/FriendlyMatchPage/PostMatch/PostMatch')
);
const ApplyMatch = React.lazy(
  () => import('./components/FriendlyMatchPage/ApplyMatch/ApplyMatch')
);

const ForgotPage = React.lazy(() => import('./pages/Forgot/Forgotpage'));

const ResetPage = React.lazy(() => import('./pages/Forgot/Reset/Resetpage'));

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
  { path: '/match', element: Match },
  { path: '/competitions', element: List1 },
  { path: '/post', element: PostMatch },
  { path: '/apply', element: ApplyMatch },
  { path: '/forgot', element: ForgotPage },
  { path: '/reset', element: ResetPage }
];

export default routes;
