import { useState } from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';
import { Col, Row } from 'react-bootstrap';


export const fetchArtists = (query) => { 
  return fetch(`/api/v1/search?search=${query}`)
    .then(result => result.json())
    .then(data => data)
  // .catch(err => dispatch(fetchSuccess(false, err.message)))
}

function Search() {
  const [search, setSearch] = useState('')
  const [artists, setArtists] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    fetchArtists(search).then(data => {
      setArtists(data)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <label htmlFor="artist">Search by Atrist</label>
          <input id="artist" onChange={(e) => setSearch(e.target.value)} type="text" />
          <button type="submit" >Submit</button>
        </div>
      </form>
        {artists.map((artist, index) => {
          return (
            <Row>
              <Col key={index}>
                <ArtistCard artist={artist} />
              </Col>
            </Row>
          )
        })}
    </div>
  )
}

export default Search