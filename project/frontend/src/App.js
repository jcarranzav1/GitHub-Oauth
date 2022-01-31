import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Home />} path="/home" />
    </Routes>
  );
}

export default App;
