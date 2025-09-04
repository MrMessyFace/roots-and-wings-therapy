import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Banner from "../components/Banner";
import Headline from "../components/Headline";
import LogInSection from "../components/LogInSection";
import LogoSection from "../components/LogoSection";
import GroupPhotoSection from "../components/GroupPhotoSection";
import ServiceList from "../components/ServiceList";
import LocationInfo from "../components/LocationInfo";
import Map from "../components/Map";
import Therapists from "../components/Therapists";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Roots & Wings Therapy and Wellness | Sioux City, IA</title>
        <meta
          name="description"
          content="Roots & Wings Therapy and Wellness is committed to providing safe space and opportunities for individuals to feel supported in their mental health journey. Located in Sioux City, IA."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Roots & Wings Therapy and Wellness",
            image: "../assets/images/roots-and-wings-logo-01.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2608 Hamilton Blvd",
              addressLocality: "Sioux City",
              addressRegion: "IA",
              postalCode: "51106",
              addressCountry: "US",
            },
            telephone: "+1-712-227-3425",
            url: "https://roots-and-wings-therapy-df6d29c35581.herokuapp.com/",
            areaServed: ["Sioux City, IA", "Iowa"],
          })}
        </script>
      </Helmet>
      <div className="home-page">
        <div className="banner-log-in-section">
          <Banner />
          <LogInSection />
        </div>
        {/* <Headline /> */}
        <div className="group-photo-logo-section">
          <GroupPhotoSection />
          <LogoSection />
        </div>
        <ServiceList />
        <div className="location-section">
          <Map />
          <LocationInfo />
        </div>
        <Therapists />
      </div>
    </>
  );
};

export default HomePage;
