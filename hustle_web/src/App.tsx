import React from 'react';
import Router from './Router';
import { AuthProvider } from './components/Auth/AuthProvider';

// const loadingPage = <div>화면 로딩중...</div>;
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
// const Home = React.lazy(() => import('./pages/Home'));
// const Login = React.lazy(() => import('./pages/Login'));

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
