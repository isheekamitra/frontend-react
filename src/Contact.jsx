import React, { useState } from "react";
import Email from './Email';
function Contact(){

  const [data,set]=useState({
    fname:"",
    email:"",
    pass:"",

  });
  const InputEvent=(event)=>{
  const {name,value}=event.target;
   set((prev)=>{
     return{
       ...prev,
       [name]:value,
     };
   });
  };
  const formSumbit=(e)=>{
     e.preventDefault();
     alert("Your form is succesfully submitted!")
  };
  return (
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSumbit}>
      <Email
        f="Full Name"
        pl="Enter your name"
        ty="text"
        name="fname"
        value={data.fname}
        onChange={InputEvent}

      />
        <Email
        f="Email"
        pl="Enter your email address"
        ty="email"
        name="email"
        value={data.email}
        onChange={InputEvent}
      />
        <Email
        f="Password"
        pl="Enter your password"
        ty="password"
        name="pass"
        value={data.pass}
        onChange={InputEvent}
      />
<div class="mb-5">
  <label for="exampleFormControlTextarea1" class="form-label">Feedback</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"

        name="msg"
        value={data.msg}
        onChange={InputEvent}
  >

  </textarea>
</div>
 <div class="col-12 mb-5">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default Contact;