import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker,
} from 'react-google-maps';
import { Wrapper } from '../wrapper/Wrapper';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={map => !!map && map.fitBounds(map.getBounds())}
      defaultZoom={props.defaultZoom}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {!!props.points && (
        <Wrapper>
          <Marker position={props.points[0]} label="A" />
          <Polyline
            path={props.points}
            options={{
              strokeColor: '#3f51b5',
              geodesic: true,
              strokeOpacity: 0.8,
              strokeWeight: 1.5,
            }}
          />
          <Marker position={props.points[props.points.length - 1]} label="B" />
        </Wrapper>
      )}
    </GoogleMap>
  )),
);

export class MapComponent extends Component {
  static defaultProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env
      .REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    defaultZoom: 8,
    loadingElement: <div style={{ height: `500px` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  };

  render() {
    return <Map {...this.props} />;
  }
}
