import React from "react";
import Common from "./Common";
function About(){
  const url="https://image.freepik.com/free-vector/about-us-page-concept-illustration_114360-599.jpg";
  return (
      <>
      <Common
        name="Welcome to About page of"
        imgsrc={url}
        visit="/contact"
        btname="Contact now"
        detail="Contact us Now! "
      />
      </>
  );
};
export default About;