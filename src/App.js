import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./pages/MainNavbar";
import Home from './pages/Home';
import Flights from './pages/Flights';
import Booking from './pages/Booking';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Signup from './pages/Signup';
import LoggedIn from './pages/LoggedIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavbar />}>
          <Route index element={<Home />} /> 
          <Route path='flights' element={<Flights />} /> 
          <Route path='booking' element={<Booking />} /> 
          <Route path='login' element={<Login />} /> 
          <Route path='signup' element={<Signup />} />
          <Route path='*' element={<PageNotFound />} /> 
          <Route path="loggedin" element={<LoggedIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
