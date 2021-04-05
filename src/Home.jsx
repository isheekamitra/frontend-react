import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "./Footer";
function Home(){
  const url1="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg";
  return (
      <>
      <Common
        name=" Grow your business with"
        imgsrc={url1}
        visit="/about"
        btname="Get Started"
        detail="We are the team of talented developer making websites"
      />
    
     </>
  );
};
export default Home;