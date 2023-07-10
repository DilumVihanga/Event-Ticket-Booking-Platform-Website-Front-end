import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '80%', // Set the map width to 80%
    height: '200px', // Set the height to 200 pixels
    margin: '0 auto', // Align the map to the center
    /* marginBottom:'200px' */
    
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 6.9271, // Latitude of Colombo
        lng: 79.8612, // Longitude of Colombo
      }}
    >
      <Marker
        position={{
          lat: 6.9271, // Latitude of Colombo
          lng: 79.8612, // Longitude of Colombo
        }}
        label="Colombo Event" // Set the place name as the marker label
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDJgOj3oAxtvoCXoiBzYkpHutELCXeJEes', // Replace with your own API key
})(MapContainer);
