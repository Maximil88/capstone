import { useEffect, useState } from "react";
import './Style.css';



export default function ArtistPage({artistURL})  {
  const [artistDetails, setArtistDetails] = useState(null)
  useEffect(() => {
    fetch(`/api/v1/search/url?url=${artistURL}`)
    .then(result => result.json())
    .then(data => setArtistDetails(data))
  },[artistURL])
  if (!artistDetails){
    return null
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-around">
        <div clasNames="col-auto">
          <div className="card">
            
            <div className="card-body">
              <p>{artistDetails.name} was born in {artistDetails.birthday} in {artistDetails.hometown} and passed away in {artistDetails.deathday}. This {artistDetails.nationality} artist 
              became prominent in {artistDetails.location}.
              </p>
              <p className="card-text">{artistDetails.biography}</p>
              {/* <p>Similar artists include {artistDetails._links.similar_artists.href}</p> */}
            </div>
          </div>
        </div>
        <div className="col-auto">
          <div className="card">
            <img
              src={artistDetails._links.image.href.replace('{image_version}', "large")}
              alt="art"
            />
            </div>
          </div>
        </div>
      </div>
  )
}

const fetchArtistPage = () => {
  return fetch(`http://localhost:3001/api/v1/search/url?url=https://api.artsy.net/api/artists/4d8b928b4eb68a1b2c0001f2`)
    .then(result => result.json())
    .then(data => console.log(data))
}