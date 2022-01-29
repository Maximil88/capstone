import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

function Favorites() {
  const [favorites, setFavorites] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  

  useEffect(() => {
    axios.get('/api/v1/Favorites', {
      headers: {
        'x-access-token': token
      }
    })
      .then(res => {
        setFavorites(res.data)
      })
  }, [token])

  if (!token) {
    navigate('/login')
  }

  return(
  <div className='background'>
    <h1>Favorites</h1>
    {favorites.map(favorite => (
      <p key={favorite.id}>{favorite.ArtsyId}</p>
    ))}

  </div>
  )
}

export default Favorites