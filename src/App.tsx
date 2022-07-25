import React from 'react';
import logo from './logo.svg';
import './App.css';
import PetsPage from './components/PetsPage';
import {NavLink, Route, Routes} from 'react-router-dom';
import PetItemPage from './components/PetItemPage';

function App() {
  return (
    <div>
      <div>
         <NavLink to='/pets'>Pets</NavLink>
      </div>
      <Routes>
      <Route element={<PetsPage />} path={'/pets'} />
      <Route element={<PetItemPage />} path={'/pets/:id'} />
      </Routes>
    </div>
  );
}

export default App;
