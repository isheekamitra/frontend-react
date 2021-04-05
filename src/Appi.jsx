import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css";
import {Redirect, Route, Switch} from "react-router-dom";
function Appi(){
  return (
      <>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
      </Switch>
      <Footer/>
      </>
  );
}
export default Appi;