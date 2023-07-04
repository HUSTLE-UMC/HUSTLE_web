import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const loadingPage = <div>화면 로딩중.../</div>;

const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));

const App = () => {
  return (
      <BrowserRouter>
        <Suspense fallback={loadingPage}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
};

export default App;
