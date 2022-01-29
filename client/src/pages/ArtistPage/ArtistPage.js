import { useEffect, useState } from "react"
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
    <div>
      {artistDetails.name}
      {artistDetails.biography} <br />
      <img src={artistDetails._links.image.href.replace('{image_version}', "large")} />
    </div>
  )
}

const fetchArtistPage = () => {
  return fetch(`http://localhost:3001/api/v1/search/url?url=https://api.artsy.net/api/artists/4d8b928b4eb68a1b2c0001f2`)
    .then(result => result.json())
    .then(data => console.log(data))
}