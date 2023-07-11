import React from "react";
import "./CovidData.css";

const CovidData = (props) => {
  return (
    <div class="view overlay">
    <div className="  flex items-center flex-col m-10 w-70 text-center mx-auto bg-warning rounded-4  m-5 pb-2 shadow-md shadow-teal-500 h-64 border border-4 shadow-lg p-4 mb-4 mask flex-center ">
   
  
      <h2 className="  fw-bolder">
        {props.data.loc}
      </h2>
      <h3 className="fst-italic">
        Confirmed Cases :  
        <span className="">
          {props.data.totalConfirmed}
        </span>
      </h3>
      <h3 className="fst-italic">
        Discharged :
        <span className=" ">
          {props.data.discharged}
        </span>
      </h3>
      
      
      <h3 className="fst-italic">
        Confirmed Indian Cases :
        <span className=" ">
          {props.data.confirmedCasesIndian}
        </span>
      </h3>
      <h3 className="fst-italic">
       Total Deaths:
        <span className=" ">
          {props.data.deaths}
        </span>
      </h3>
    </div>
    </div>
  );
};

export default CovidData;