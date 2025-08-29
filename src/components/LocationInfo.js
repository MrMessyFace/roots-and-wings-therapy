import React from "react";

const LocationInfo = () => {
  return (
    <div className="location-info">
      <h3>Roots & Wings Therapy and Wellness</h3>
      <br></br>
      <p>2608 Hamilton Blvd</p>
      <p>Sioux City, IA 51106</p>
      <br></br>
      <p>(712) 227-3425</p>
      <br></br>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=2608%20Hamilton%20Blvd%20Sioux%20City%20IA%2051104-4048"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
    </div>
  );
};

export default LocationInfo;
