import PetsPage from './components/Pets/PetsPage';
import {Route, Routes, useLocation} from 'react-router-dom';
import PetItemPage from './components/Pets/PetItemPage';
import Navigation from './components/Navigation/Navigation';
import StorePage from './components/Orders/StorePage';
import OrderItem from './components/Orders/OrderItem/OrderItem';

function App() {
  return (
    <div>
      <Navigation />
      <div>
      <Routes>
      <Route element={<PetsPage />} path={'/pets'} />
      <Route element={<PetItemPage />} path={'/pets/:id'} />
      <Route element={<StorePage />} path={'/orders'} />
      <Route element={<OrderItem />} path={'/orders/:id'} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
