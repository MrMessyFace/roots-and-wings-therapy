import React from "react";

const KelseyGalindo = () => {
  return (
    <div className="therapist">
      <div className="therapist-pic">
        <img
          src={require("../assets/images/kelsey-galindo-01.JPEG")}
          alt="Kelsey Galindo"
        />
      </div>
      <div className="therapist-bio">
        <h2>Kelsey Galindo</h2>
        <p>
          Kelsey is a Licensed Independent Social Worker (LISW) with 5 years of
          experience. She specializes in eating disorders, body image issues,
          and trauma. She became a therapist to help people from all walks of
          life cope and feel better.
        </p>
      </div>
    </div>
  );
};

export default KelseyGalindo;
