import React from "react";

const KatieMockler = () => {
  return (
    <div className="therapist">
      <div className="therapist-pic">
        <img
          src={require("../assets/images/katie-mockler-01.jpg")}
          alt="Katie Mockler"
        />
      </div>
      <div className="therapist-bio">
        <h2>Katie Mockler</h2>
        <p>
          Katie is a Licensed Independent Social Worker (LISW) with 4 years of
          experience. She specializes in trauma, grief, anxiety, psychosis and
          also treating the whole person instead of a diagnosis. One of the main
          things she enjoys about being a therapist is helping others develop a
          sense of calm and safety within themselves.
        </p>
      </div>
    </div>
  );
};

export default KatieMockler;
