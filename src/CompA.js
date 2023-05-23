import { useContext } from "react";
import React from "react";
import { userConetxt } from "./App";




function CompA() {
    const user=useContext(userConetxt)
    
    return (
      <>
      <h2>you are in component A</h2>
       <h3>{user.Name}{user.age}</h3>
      </>
    );
  }
  
  export default CompA;