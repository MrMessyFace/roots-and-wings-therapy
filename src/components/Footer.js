import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-size">
        <div className="footer-left">
          <div className="copyright-section">
            <p>&copy; 2025 Roots and Wings Therapy and Wellness PLC.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
        <div className="footer-middle">
          <div className="privacy-section">
            <a
              href="https://drive.google.com/file/d/1OWtzrkBt7E2G_Ny5yQKpotzUSruXbBjL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notice of Privacy Practices
            </a>
          </div>
          <div className="surprises-section">
            <a
              href="https://www.cms.gov/nosurprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              No Surprises Act
            </a>
            <p>
              You have the right to receive a Good Faith Estimate of what your
              services may cost.
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="web-designer-section">
            <a
              href="https://www.jessiesgalindo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Design by Jessie S. Galindo.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
