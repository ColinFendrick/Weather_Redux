import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.googlemap, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    return <div ref='googlemap'
      style={{'height': '200px', 'width': '250px'}}
    />;
  }
}

export default GoogleMap;
