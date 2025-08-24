import React from "react";

const Map = () => {
  return (
    <div className="map">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=2608%20Hamilton%20Blvd%20Sioux%20City%20IA%2051104-4048"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../assets/images/roots-and-wings-map.jpg")}
          alt="Roots and Wings Therapy Location"
        />
      </a>
    </div>
  );
};

export default Map;
