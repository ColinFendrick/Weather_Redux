import React from 'react';
import { GoogleMapLoader, GoogleMap };

export default ({ lat, lng }) => (
  <GoogleMapsLoader
    containerElement={ <div style={{height: '100%'}} /> }
    googleMapElement={
      <GoogleMap defaultZoom={12} defaultCenter={{lat, lng}}
    }
  />
);
