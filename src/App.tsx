import PetsPage from './components/Pets/PetsPage';
import {Route, Routes, useLocation} from 'react-router-dom';
import PetItemPage from './components/Pets/PetItemPage';
import Navigation from './components/Navigation/Navigation';
import StorePage from './components/Orders/StorePage';
import OrderItem from './components/Orders/OrderItem/OrderItem';
import UsersPage from './components/Users/UsersPage';

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
      <Route element={<UsersPage />} path={'/users'} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
