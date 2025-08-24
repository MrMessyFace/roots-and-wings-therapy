import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="wrapper">
        {/* <Navbar /> */}
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
