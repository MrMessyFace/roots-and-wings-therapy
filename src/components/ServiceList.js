import React from "react";

const ServiceList = () => {
  return (
    <div className="services-section">
      <h1>Our Services</h1>
      <div className="offers">
        <div className="offer-items">
          <img
            src={require("../assets/images/telehealth.png")}
            alt="telehealth"
          />
          <p>In-Person and Telehealth Appointments</p>
        </div>
        <div className="offer-items">
          <img src={require("../assets/images/payments.png")} alt="payments" />
          <p>Accepts Online Payments</p>
        </div>
        <div className="offer-items">
          <img
            src={require("../assets/images/insurance.png")}
            alt="insurance"
          />
          <p>Accepts Most Major Insurances</p>
        </div>
        <div className="offer-items">
          <img src={require("../assets/images/clients.png")} alt="clients" />
          <p>Accepting New Clients</p>
        </div>
      </div>
      <div className="services">
        <div className="services-h1">
          <h1>
            At Roots & Wings, we are committed to providing safe space and
            opportunities for individuals to feel supported in their mental
            health journey.
          </h1>
        </div>
        <br></br>
        <div className="services-list">
          <p>
            Our approaches to therapy are strengths based and client focused.
            They include:
          </p>
          <br></br>
          <ul>
            <li>Cognitive Behavioral Therapy (CBT)</li>
            <li>Acceptance and Commitment (ACT)</li>
            <li>Attachment-Based</li>
            <li>Clinical Supervision and Licensed Supervisors</li>
            <li>Coaching</li>
            <li>Dialectical (DBT)</li>
            <li>Culturally Sensitive</li>
            <li>Humanistic Therapy</li>
            <li>Internal Family Systems (IFS)</li>
            <li>Motivational Interviewing</li>
            <li>Person-Centered</li>
            <li>Psychotherapy</li>
            <li>Social Work</li>
            <li>Strength-Based</li>
            <li>Trauma Focused</li>
            <li>Eye Movement Desensitization Reprocessing (EMDR)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
