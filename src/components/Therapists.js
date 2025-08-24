import React from "react";
import SarahStevens from "../components/SarahStevens";
import KatieMockler from "../components/KatieMockler";
import KelseyGalindo from "../components/KelseyGalindo";

const Therapists = () => {
  return (
    <div className="therapists-section">
      <h1>Meet Our Therapists</h1>
      <div className="therapists">
        <SarahStevens />
        <KatieMockler />
        <KelseyGalindo />
      </div>
    </div>
  );
};

export default Therapists;
