import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPageMain"));
const Question = React.lazy(() => import("./pages/Community/QuestionPage"));
const Community = React.lazy(() => import("./pages/Community/CommunityPage"));
const Club = React.lazy(() => import("./pages/Community/Club"));
const Join = React.lazy(() => import("./pages/Join/Join"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/mypage", element: MyPage },
  { path: "/question", element: Question },
  { path: "/community", element: Community },
  { path: "/club", element: Club },
  { path: "/join", element: Join },
];

export default routes;
