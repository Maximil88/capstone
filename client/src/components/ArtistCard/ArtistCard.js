import React, { useState } from 'react';
import { Button, Card, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

// <img src={artist._links.thumbnail.href} />{artist.title}

export default function ArtistCard({ artistTitle, artistImage, artistURL, onClick, favoriteButton=true }) {

  const [showFavorites, setShowFavorites] = useState(favoriteButton)

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
 
  return (
    <Col>
      <Card border="dark" style={{ width: '287px', marginBottom: '20px',}}>
        <div className='cardImgContainer'>
          <Card.Img variant="top" style={{}} src={artistImage} />
        </div>
        <Card.Body>
          <Card.Title>{artistTitle}</Card.Title>
          {onClick && <Button variant="primary" onClick={onClick} >Artist Page</Button>}
          {showFavorites && <Button variant="primary" onClick={save} >Save to Favorites</Button>}
        </Card.Body>
      </Card>
    </Col>
  )
}
