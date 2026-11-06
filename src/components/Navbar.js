import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar-left">
        <div className="navbar-image">
          <Link to="/">
            <img
              src={require("../assets/images/roots-and-wings-logo-01.png")}
              alt="Roots and Wings Therapy"
              title="Home"
            />
          </Link>
        </div>
      </nav>
      <nav className="navbar-right">
        {/* <Link to="/about">About Us</Link> */}
        {/* <Link to="/services">Services</Link> */}
        <Link to="/therapists">Therapists</Link>
        <a
          href="https://rootsnwings.clientsecure.me/sign-in"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Portal
        </a>
        <a
          href="https://rootsnwings.clientsecure.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Appointment
        </a>
      </nav>
    </nav>
  );
};

export default Navbar;
