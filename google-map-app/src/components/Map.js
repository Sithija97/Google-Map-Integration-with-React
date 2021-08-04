import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function MapView(props) {
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      {/* <Map google={props.google} zoom={14}></Map> */}
      <Map
        google={props.google}
        zoom={3}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDiLdLW3yJCULExQEMOIuW6N0-31WBYi2o",
})(MapView);
