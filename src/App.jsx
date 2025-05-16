import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import { NameProvider } from './context/NameContext';

const App = () => {
  return (
    <NameProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
      </Routes>
    </NameProvider>
  );
};

export default App;