import React,{useEffect, useState} from "react";
import "./Home.css";
import SideNav from "./SideNav";
import UpperHeader from "./UpperHeader";
import AssessOverview from "./AssessOverview";
import MyAssess from "./MyAssess";

export default function Home() {
 
 
  return (
    <div class="mainBox" >
      <div class="row">
     <div class='column'>
    
      <SideNav/>
     </div>

        <div style={{backgroundColor:"white",padding:"20px",width:"100%"}}>
          <UpperHeader/>
         {/* <div > <AssessOverview/></div> */}
          <MyAssess/>
        </div>
      </div>
    </div>

   
  );
}
