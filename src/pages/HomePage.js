import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Headline from "../components/Headline";
import LogInSection from "../components/LogInSection";
import LogoSection from "../components/LogoSection";
import ServiceList from "../components/ServiceList";
import LocationInfo from "../components/LocationInfo";
import Map from "../components/Map";
import Therapists from "../components/Therapists";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="banner-log-in-section">
        <Banner />
        <LogInSection />
      </div>
      {/* <Headline /> */}
      <LogoSection />
      <ServiceList />
      <div className="location-section">
        <Map />
        <LocationInfo />
      </div>
      <Therapists />
      <div>
        <Link to="/">
          <p>Back to the top.</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
