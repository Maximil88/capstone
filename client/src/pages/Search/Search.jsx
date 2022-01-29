import { useState } from 'react';
import './style.css';
import { Button, Modal, Row } from 'react-bootstrap';
import ArtistCard from '../../components/ArtistCard/ArtistCard';
import ArtistPage from '../ArtistPage/ArtistPage';


export const fetchArtists = (query) => {
  return fetch(`/api/v1/search?search=${query}`)
    .then(result => result.json())
    .then(data => data)
  // .catch(err => dispatch(fetchSuccess(false, err.message)))
}

function Search() {
  const [search, setSearch] = useState('')
  const [artists, setArtists] = useState([])
  const [artist, setArtist] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (artist) => {
    setShow(true)
    setArtist(artist)
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchArtists(search).then(data => {
      setArtists(data)
    })
  }

  return (
    <div className='background'>
      <form onSubmit={handleSubmit}>
        <div className='search' >
          <label htmlFor="artist">Search by Atrist</label>
          <input id="artist" onChange={(e) => setSearch(e.target.value)} type="text" />
          <button type="submit" >Submit</button>
        </div>
      </form>

      <Row>
        {artists.map(artist => {
          return (
            <ArtistCard artist={artist} onClick={() => { handleShow(artist) }} />
          )
        })}
      </Row>

      <Modal show={show} fullscreen={true} onHide={handleClose}>
        {artist && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{artist.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ArtistPage artist={artist}/>
            </Modal.Body>
          </>
        )}

      </Modal>

    </div>
  )
}

export default Search