import React from 'react';
import { Button, Card, Col,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Style.css';

// <img src={artist._links.thumbnail.href} />{artist.title}

export default function ArtistCard({ artist, onClick }) {

 
  return (
    <Col>
      <Card border="dark" style={{ width: '287px', marginBottom: '20px',}}>
        <div className='cardImgContainer'>
          <Card.Img variant="top" style={{}} src={artist._links.thumbnail.href} />
        </div>
        <Card.Body>
          <Card.Title>{artist.title}</Card.Title>
          <Button variant="primary" onClick={onClick} >Artist Page</Button> <br />
          <Button variant="primary" onClick={onClick} >Save to Favorites</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
