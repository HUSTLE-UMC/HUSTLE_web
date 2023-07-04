import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {RecoilRoot} from "recoil";

const loadingPage = <div>화면 로딩중.../</div>;

// Pages
const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));


//컴포넌트
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
