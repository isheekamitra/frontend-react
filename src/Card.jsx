import React from "react";
import Sdata from "./Sdata";
import { NavLink } from "react-router-dom";

function Card(props){
  return (
    <>
   
               <div className="col-md-4 col-10 mx-auto">
               <div className="card" >
  <img src={props.imgsrc} class="card-img-top" alt="mooo"/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <NavLink to={props.link} className="btn btn-primary">Learn more</NavLink>
  </div>
</div>
               </div>
            
    </>
  );
}
export default Card;