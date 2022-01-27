import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';

// <img src={artist._links.thumbnail.href} />{artist.title}

export default function ArtistCard({artist}) {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem', marginBottom:'20px' }}>
        <div className='cardImgContainer'>
          <Card.Img variant="top" src={artist._links.thumbnail.href} />
        </div>
        <Card.Body>
          <Card.Title>{artist.title}</Card.Title>
          {/* <Button variant="primary" as={Link} to={artist._links.self}>Artist Page</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}
