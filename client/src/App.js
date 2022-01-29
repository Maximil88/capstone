import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Favorites from './pages/Favorites/Favorites';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Search from './pages/Search/Search';

function App() {
  return (
    <div className="App" >
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
