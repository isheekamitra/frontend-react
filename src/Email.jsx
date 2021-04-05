import React from "react";
function Email(props)
{
  return(
      <>
          <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">{props.f}</label>
  <input type={props.ty} class="form-control" id="exampleFormControlInput1" placeholder={props.pl}/>
</div>
      </>
  );

}
export default Email;