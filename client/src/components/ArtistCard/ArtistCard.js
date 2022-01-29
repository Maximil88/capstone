import React, { useState } from 'react';
import { Button, Card, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css';
import { DELETE } from 'sequelize/dist/lib/query-types';

// <img src={artist._links.thumbnail.href} />{artist.title}

export default function ArtistCard({ artistTitle, artistImage, artistURL, artistID, onClick, favoriteButton=true, deleteButton=false}) {

  const [showFavorites, setShowFavorites] = useState(favoriteButton)
  const [deleteFavorite, setDeleteFavorites] = useState(deleteButton)

  const token = localStorage.getItem('token')
  const save = () => {
    axios.post('/api/v1/favorites', {
      ArtsyId: artistURL,
      name: artistTitle,
      image: artistImage
    }, {
      headers:{'x-access-token': token}
    })
    .then(() => {
      alert('added to favorites')
      setShowFavorites(false)
    })
  }

  const destroy = (e) => {
    axios
      .delete(`/api/v1/favorites/${artistID}`, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        setDeleteFavorites(true)
        window.location.reload();
      });
  };

 
  return (
    <Col className="col1">
      <Card border="dark" style={{ width: '287px', marginBottom: '20px',}}>
        <div className='cardImgContainer'>
          <Card.Img variant="top" style={{}} src={artistImage} />
        </div>
        <Card.Body>
          <Card.Title>{artistTitle}</Card.Title>
          {onClick && <Button variant="primary" onClick={onClick} >Artist Page</Button>}
          {showFavorites && <Button variant="primary" onClick={save} >Save to Favorites</Button>}
          {deleteFavorite && <Button variant="primary" onClick={destroy} >Delete</Button>}
        </Card.Body>
      </Card>
    </Col>
  )
}
