import PetsPage from './components/Pets/PetsPage';
import {Route, Routes} from 'react-router-dom';
import PetItemPage from './components/Pets/PetItemPage';
import Navigation from './components/Navigation/Navigation';
import StorePage from './components/Orders/StorePage';
import OrderItem from './components/Orders/OrderItem/OrderItem';
import UsersPage from './components/Users/UsersPage';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <div className="app-wrapper-content">
      <Routes>
      <Route element={<PetsPage />} path={'/pets'} />
      <Route element={<PetItemPage />} path={'/pets/:id'} />
      <Route element={<StorePage />} path={'/orders'} />
      <Route element={<OrderItem />} path={'/orders/:id'} />
      <Route element={<UsersPage />} path={'/users'} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
