import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: -22.4175,
  lng: -44.2958,
};
const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDP95hPAvWYOXdnznrkdusWKFizXVAXu64">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
