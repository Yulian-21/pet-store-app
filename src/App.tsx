import PetsPage from './components/Pets/PetsPage';
import {Route, Routes, useLocation} from 'react-router-dom';
import PetItemPage from './components/Pets/PetItemPage';
import Navigation from './components/Navigation/Navigation';

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
