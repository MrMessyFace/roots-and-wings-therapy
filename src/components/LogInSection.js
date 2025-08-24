import React from "react";
import ClientPortal from "./ClientPortal";
import Appointment from "./Appointment";

const LogInSection = () => {
  return (
    <div className="log-in-section">
      <div>
        <ClientPortal />
      </div>
      <div>
        <Appointment />
      </div>
    </div>
  );
};

export default LogInSection;
