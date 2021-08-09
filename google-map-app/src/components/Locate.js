import React from "react";
import CompassLogo from "../assests/compass-transparent-png-21.png";
function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img className="locate" src={CompassLogo} alt="compass - locate me" />
    </button>
  );
}

export default Locate;
