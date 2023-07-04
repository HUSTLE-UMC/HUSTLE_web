import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));


const routes = [
    { path: "/", element: Home },
    { path: "/login", element: Login },

];

export default routes;
