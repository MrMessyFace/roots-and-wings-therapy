import React from "react";
import { Link } from "react-router-dom";
import ClientPortal from "./ClientPortal";
import Appointment from "./Appointment";

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
        <div>
          <ClientPortal />
        </div>
        <div>
          <Appointment />
        </div>
        <a
          href="https://www.facebook.com/profile.php?id=61577463938045"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </a>
      </nav>
    </nav>
  );
};

export default Navbar;
