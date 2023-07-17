import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPageMain"));
const Question = React.lazy(() => import("./pages/Community/QuestionPage"));
const Community = React.lazy(() => import("./pages/Community/CommunityPage"));
const Club = React.lazy(() => import("./pages/Community/Club"));
const Join = React.lazy(() => import("./pages/Join/Join"));

const routes = [
  { path: "/", element: Home },
  { path: "/Login", element: Login },
  { path: "/mypage", element: MyPage },
  { path: "/Question", element: Question },
  { path: "/Community", element: Community },
  { path: "/Club", element: Club },
  { path: "/Join", element: Join },
];

export default routes;
