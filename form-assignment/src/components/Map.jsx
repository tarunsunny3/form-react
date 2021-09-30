

import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={1}
      defaultCenter={{ lat:17.426161 , lng:78.412537  }}
    >
      <Marker
        position={{ lat: props.latitude, lng: props.longitude }}
      />
    </GoogleMap>
  ));
  
  
  const Map = ({lat, lng}) => {
      return (
          <div>
              
              <MapWithAMarker
              latitude={lat}
              longitude ={lng}
            //   AIzaSyD2LiMRSs7Zcls5ZspW3Qrd8LpZikWuCxI
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD2LiMRSs7Zcls5ZspW3Qrd8LpZikWuCxI&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
          </div>
      )
  }
  
  export default Map
  