import blue from 'material-ui/colors/blue';

import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  Marker,
  Circle,
} from 'react-google-maps';
import { Wrapper } from '../wrapper/Wrapper';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={props.defaultZoom}
      center={
        !!props.points && props.points.length
          ? props.points[Math.round((props.points.length - 1) / 2)]
          : props.defaultCenter
      }
    >
      {!!props.points &&
        !!props.points.length && (
          <Wrapper>
            <Marker position={props.points[0]} label="A" />
            <Polyline
              path={props.points}
              options={{
                strokeColor: '#3f51b5',
                geodesic: true,
                strokeOpacity: 0.8,
                strokeWeight: 2.5,
              }}
            />
            <Marker
              position={props.points[props.points.length - 1]}
              label="B"
            />
            {!!props.mapPoint && (
              <Circle
                center={props.mapPoint}
                radius={100}
                options={{
                  fillColor: blue[500],
                  fillOpacity: 1,
                  strokeColor: blue[500],
                  strokeOpacity: 1,
                }}
              />
            )}
          </Wrapper>
        )}
    </GoogleMap>
  )),
);

export class MapComponent extends Component {
  static defaultProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env
      .REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    defaultZoom: 11,
    defaultCenter: { lat: 52.2330653, lng: 20.9211127 },
    loadingElement: <div style={{ height: `500px` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  };

  state = {
    mapPoint: null,
  };

  componentWillUpdate(nextProps) {
    const { mapPoint } = this.state;

    if (!!nextProps.points && !!nextProps.points.length && mapPoint === null) {
      this.setState({ mapPoint: nextProps.points[0] });
    }
  }

  setMapPoint = point => {
    const { mapPoint } = this.state;

    if (
      point !== null &&
      mapPoint &&
      mapPoint.lat !== point.lat &&
      mapPoint.lng !== point.lng
    ) {
      this.setState({ mapPoint: point });
    }
  };

  render() {
    return <Map {...this.props} mapPoint={this.state.mapPoint} />;
  }
}
