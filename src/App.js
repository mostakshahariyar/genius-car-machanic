import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Esperts from './Pages/Experts/Esperts';
import Home from './Pages/Home/Home';
import Services from './Pages/Serivice/Services';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/expert' element={<Esperts/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/booking/:serviceId' element={ <Booking/> }/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
