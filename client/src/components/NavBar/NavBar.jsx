import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function NavBar() {
  const token = localStorage.getItem('token')
  const isLoggedIn = token ? true : false
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location="/"
  }

  return <div>
    <nav className="navs">
      <ul>
         <p><Link to="/">Home</Link></p>
        {isLoggedIn ? (
          <>
            <p><button href="#" onClick={() => handleLogout()}>Log Out</button></p>
            <p><Link to="/search">Search</Link></p>
            <p><Link to="/favorites">My Favorites</Link></p>

          </>
        ) : (
          <>
            <p><Link to="/register">Register</Link></p>
            <p><Link to="/login">Login</Link></p>
          </>
        )}
      </ul>
    </nav>
  </div>;
}

export default NavBar;
