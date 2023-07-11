import React from "react";
import { useState, useEffect } from "react";
// import Footer from "./Components/Footer";
import CovidData from "./components/CovidData";



const App = () => {
  const api_url = "https://api.rootnet.in/covid19-in/stats/latest";
  const [ApiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetApiData();
  }, []);

  const GetApiData = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    setApiData(data);
  };

  return (
    
    <div class="container-fluid">

      <div className="bg-slate-900">
        <div className="bg-slate-800 flex flex-col justify-center items-center text-white p-10 lg:h-[60vh]">

         
  {/* <img src="family.jpg" class="rounded" alt="Cinque Terre" width="304" height="236"/>  */}

    <h1>Covid-19 Data</h1>
     {/* <img src="hd.jpg" class="rounded" alt="Cinque Terre" width="304" height="236"/>   */}


          <div class="input-group rounded col-lg-9 mt-4 ">
            <input type="search" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" placeholder="Search State"
              value={search}
              onChange={(e) => setSearch(e.target.value)} />

          </div>

        </div>

        <div className="flex flex-wrap justify-center items-center">
          {ApiData.data &&
            ApiData.data.regional
              .filter((state) => {
                if (search === "") {
                  return state;
                } else if (state.loc.toLowerCase().includes(search.toLowerCase())) {
                  return state;
                }
                return null;
              })
              .map((state) => <CovidData data={state} />)}
        </div>

      </div>


    </div>
    
  );


};
export default App;