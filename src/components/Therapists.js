import React from "react";
import { Link } from "react-router-dom";

const Therapists = () => {
  return (
    <div className="therapists-section">
      <h1>Meet Our Therapists</h1>
      <div className="therapists">
        <div className="therapist-profile">
          <div className="therapist-pic">
            {/* <Link to="/sarah_stevens"> */}
              <img
                src={require("../assets/images/sarah-stevens-01.jpg")}
                alt="Sarah Stevens"
                title="Sarah Stevens"
              />
            {/* </Link> */}
          </div>
          <div className="therapist-name">
            {/* <Link to="/sarah_stevens"> */}
              <h2>Sarah Stevens</h2>
            {/* </Link> */}
            <p>LISW | 10+ Years</p>
          </div>
        </div>
        <div className="therapist-profile">
          <div className="therapist-pic">
            {/* <Link to="/Katie_Mockler"> */}
              <img
                src={require("../assets/images/katie-mockler-01.jpg")}
                alt="Katie Mockler"
                title="Katie Mockler"
              />
            {/* </Link> */}
          </div>
          <div className="therapist-name">
            {/* <Link to="/Katie_Mockler"> */}
              <h2>Katie Mockler</h2>
            {/* </Link> */}
            <p>LISW | 4 Years</p>
          </div>
        </div>
        <div className="therapist-profile">
          <div className="therapist-pic">
            {/* <Link to="/kelsey_galindo"> */}
              <img
                src={require("../assets/images/kelsey-galindo-01.jpg")}
                alt="Kelsey Galindo"
                title="Kelsey Galindo"
              />
            {/* </Link> */}
          </div>
          <div className="therapist-name">
            {/* <Link to="/kelsey_galindo"> */}
              <h2>Kelsey Galindo</h2>
            {/* </Link> */}
            <p>LISW | 5 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;
