import "./assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TherapistsPage from "./pages/TherapistsPage";
import SarahPage from "./pages/SarahPage";
import KatiePage from "./pages/KatiePage";
import KelseyPage from "./pages/KelseyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/therapists" component={TherapistsPage} />
          <Route path="/Sarah_Stevens" component={SarahPage} />
          <Route path="/Katie_Mockler" component={KatiePage} />
          <Route path="/Kelsey_Galindo" component={KelseyPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
