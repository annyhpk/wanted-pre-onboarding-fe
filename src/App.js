import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Spiner from './components/Spiner';

const MainPage = lazy(() => import('./pages/MainPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

function App() {
  return (
    <Suspense fallback={<Spiner />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
