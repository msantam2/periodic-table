import '../stylesheets/google_map';
import React from 'react'; 

class GoogleMap extends React.Component {
  constructor(props) {
    super(props); // this.props.country = 'Sweden', 'Germany', 'USA', 'ancient'
  }
  
  componentDidMount() {
    let geocoder = new google.maps.Geocoder(); 
    let mapOptions;
    let country = this.props.country; 
    let zoom; 

    // need to zoom out a bit more on the USA & Russia :)
    zoom = (country === 'USA' || country === 'Russia') ? 2 : 3;

    if (country !== 'ancient') {
      geocoder.geocode({address: country}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          mapOptions = {
            center: results[0].geometry.location, 
            zoom: zoom, 
            maxZoom: zoom
          };
          this.map = new google.maps.Map(this.mapNode, mapOptions); 
          let marker = new google.maps.Marker(
            {
              map: this.map, 
              position: results[0].geometry.location, 
            }  
          ); 
        } else {
          alert(`Geocode was not successful for the following reason: ${status}`);
        }
      }); 
    } else { // country = 'ancient'; show map of the whole world (no country)
      mapOptions = {
        center: {lat: 34, lng: -94}, // arbitrary center
        zoom: 0,
        maxZoom: 0
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions); 
    }
  }
  
  render() {
    return (
      <div className='map' ref={map => this.mapNode = map}>
      </div>
    ); 
  }
}

export default GoogleMap;