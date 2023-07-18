import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPage"));
const Question = React.lazy(() => import("./pages/Community/Question"));
const Community = React.lazy(() => import("./pages/Community/Community"));
const Club = React.lazy(() => import("./pages/Community/Club"));
const Join = React.lazy(() => import("./pages/Join/Join"));
const Match = React.lazy(() => import("./pages/FriendlyMatch/FriendlyMatch"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/mypage", element: MyPage },
  { path: "/question", element: Question },
  { path: "/community", element: Community },
  { path: "/club", element: Club },
  { path: "/join", element: Join },
  { path: "/match", element: Match },
];

export default routes;
