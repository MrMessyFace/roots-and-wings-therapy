import React from "react";

const LogoSection = () => {
  return (
    <div className="logo-section">
      <div className="logo">
        <img
          src={require("../assets/images/roots-and-wings-logo-01.png")}
          alt="Roots and Wings Therapy"
        />
        <h2>Sioux City, IA</h2>
        <h2>(712) 227-3425</h2>
      </div>
    </div>
  );
};

export default LogoSection;
