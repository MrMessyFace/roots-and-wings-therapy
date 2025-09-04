import React from "react";

const SarahStevens = () => {
  return (
    <div className="therapist">
      <div className="therapist-pic">
        <img
          src={require("../assets/images/sarah-stevens-01.jpg")}
          alt={("Sarah Stevens", "Roots & Wings Therapy and Wellness Sioux City")}
          title="Sarah Stevens"
        />
      </div>
      <div className="therapist-bio">
        <h2>Sarah Stevens</h2>
        <p>
          Sarah is a Licensed Independent Social Worker (LISW) with over 10
          years of experience. She specializes in anxiety, depression, trauma,
          and adjustment disorders. She became a therapist to help those who
          help others.
        </p>
      </div>
    </div>
  );
};

export default SarahStevens;
