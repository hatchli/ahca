import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import MapGL, { LinearInterpolator, GeolocateControl } from "react-map-gl";
import WebMercatorViewport from "viewport-mercator-project";
import bbox from "@turf/bbox";

import ControlPanel from "./ControlPanel";
import MAP_STYLE from "./styles/MapStyles";
import { Box, Flex } from "rebass";
// import MAP_STYLE from 'https://api.mapbox.com/styles/v1/mapbox/light-v9.html?title=false&access_token=pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg#7.75/33.997/-116.72'
import LocationCard from "./LocationCard";

const TOKEN =
  "pk.eyJ1Ijoid2xlZXMiLCJhIjoiY2s0YnBoZDQzMGZ6bjNudXFiMmkwbHRsMCJ9.vej5vu3WZhr9AEHiNPrVow"; // Set your mapbox token here

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10
};

const UPDATE_PHONE_LOCATION = gql`
  mutation UPDATE_PHONE_LOCATION(
    $name: String
    $location: String
    $phone: String
    $email: String
  ) {
    updatePhoneLocation(
      name: $name
      location: $location
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      county: "Select Your Location on the Map!",
      viewport: {
        latitude: 34.0537,
        longitude: -118.243,
        zoom: 7,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      clickInfo: null
    };

    this._map = React.createRef();
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _onClick = event => {
    let countyName = "";
    let clickInfo = null;
    let county = event.features[0];
    let feature = event.features[0];

    if (county) {
      clickInfo = {
        lngLat: event.lngLat,
        county: county.properties
      };
      countyName = clickInfo.county.name;
    }
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      // construct a viewport instance from the current state
      const viewport = new WebMercatorViewport(this.state.viewport);
      const { longitude, latitude, zoom } = viewport.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {
          padding: 40
        }
      );
      console.log(zoom);

      this.setState({
        county: countyName,
        clickInfo,
        viewport: {
          ...this.state.viewport,
          longitude,
          latitude,
          zoom,
          transitionInterpolator: new LinearInterpolator({
            around: [event.offsetCenter.x, event.offsetCenter.y]
          }),
          transitionDuration: 1000
        }
      });
    }
  };

  render() {
    const { viewport } = this.state;
    const { clickInfo } = this.state;
    const { county } = this.state;
    let minZoom = 6;

    return (
      <Mutation mutation={UPDATE_PHONE_LOCATION} variables={this.state}>
        {(updatePhoneLocation, { loading, error }) => {
          return (
            <Flex flexWrap="wrap">
              <Box width={[1, 1, 1 / 2]} minHeight="300px" minWidth="300px">
                <MapGL
                  ref={this._map}
                  mapStyle={MAP_STYLE}
                  interactiveLayerIds={["sf-neighborhoods-fill"]}
                  {...viewport}
                  width="100%"
                  height="100%"
                  minZoom={minZoom}
                  minHeight="1vh"
                  minWidth="1vh"
                  onClick={this._onClick}
                  county={county}
                  // countyInfo={}
                  onViewportChange={this._updateViewport}
                  mapboxApiAccessToken={TOKEN}
                  onTransitionEnd={async () => {
                    console.log("onchange called");
                    const res = await updatePhoneLocation();
                    console.log(res);
                  }}
                >
                  <ControlPanel
                    containerComponent={this.props.containerComponent}
                  />
                  <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                  />
                </MapGL>
              </Box>
              <Box px={3} width={[1, 1, 1 / 2]}>
                <LocationCard county={county} />
              </Box>
            </Flex>
          );
        }}
      </Mutation>
    );
  }
}
