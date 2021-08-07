import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import CircularProgress from "@material-ui/core/CircularProgress";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 7.873054,
  lng: 80.771797,
};

function MapView() {
  const [markers, setMarkers] = useState([]);

  const { isLoaded, LoadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCys-507Nh4ytNhHnYH7uiVpL5DswGL1eg",
    libraries,
  });

  if (LoadError) return "Error Loading Maps";
  if (!isLoaded) return <CircularProgress color="secondary" />;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={(event) => {
          console.log(event.latLng.lat());
          console.log(event.latLng.lng());
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}

export default MapView;
