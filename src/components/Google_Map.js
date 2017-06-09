import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    const { lat, lng } = this.props;

    new google.maps.Map(this.refs.googlemap, {
      zoom: 12,
      center: { lat, lng }
    });
  }

  render() {
    return <div ref='googlemap'
      style={{'height': '200px', 'width': '250px'}}
    />;
  }
}

export default GoogleMap;
