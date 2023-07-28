import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));

const routes = [
  { path: "/", element: Home },
  { path: "/Login", element: Login },
];

export default routes;
