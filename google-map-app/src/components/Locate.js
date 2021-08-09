import React from "react";
import CompassLogo from "../assests/compass-transparent-png-21.png";
function Locate() {
  return (
    <button
      className="locate"
      onClick={() => console.log("clicked on locate button")}
    >
      <img className="locate" src={CompassLogo} alt="compass - locate me" />
    </button>
  );
}

export default Locate;
