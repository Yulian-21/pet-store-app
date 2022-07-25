import React from 'react';
import logo from './logo.svg';
import './App.css';
import PetsPage from './components/pets/PetsPage';
import {Route, Routes, useLocation} from 'react-router-dom';
import PetItemPage from './components/pets/PetItemPage';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <div>
      <Routes>
      <Route element={<PetsPage />} path={'/pets'} />
      <Route element={<PetItemPage />} path={'/pets/:id'} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
