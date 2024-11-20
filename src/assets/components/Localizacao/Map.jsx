import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle ={
  width: '100%',
  height: '400px'
}
const center = {
    lat: -22.4175, // Latitude
    lng: -44.2958, // Longitude
  };

const Map = () => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyDP95hPAvWYOXdnznrkdusWKFizXVAXu64'>
        <GoogleMap mapContainerStyle={containerStyle} center={center}zoom={12}>
            <Marker position={center}/>
        </GoogleMap>
    </LoadScript>

  )
}

export default Map