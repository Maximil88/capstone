import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import ArtistPage from '../ArtistPage/ArtistPage';
import './style.css'

function Favorites() {
  const [favorites, setFavorites] = useState([])
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [artist, setArtist] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (artist) => {
    setShow(true)
    setArtist(artist)
  };
  

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
    <Row>
    {favorites.map(favorite => (
      <ArtistCard favoriteButton={false} artistTitle={favorite.name} artistImage={favorite.image}
       artistURL={favorite.ArtsyId} onClick={() => { handleShow({title: favorite.name, URL:favorite.ArtsyId}) }}/>
    ))}
    </Row>
        <Modal show={show} fullscreen={true} onHide={handleClose}>
        {artist && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{artist.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ArtistPage artistURL={artist.URL}/>
            </Modal.Body>
          </>
        )}
      </Modal>
  </div>
  )
}

export default Favorites