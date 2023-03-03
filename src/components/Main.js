import React, { useEffect, useState } from "react";
import Card from "./Card";

const Main = () => {
  
  const [searchValue , setSearchValue] = useState("find location....");
  const [tempInfo , setTempInfo] = useState({})
  const getWeatherInfo = async () =>{
          try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8b02aa37faf20b5c0b9a5c96f7acbf73`;
            const res = await fetch(url);
            const data = await res.json();

            
            const{temp,humidity,temp_min,temp_max, } = data.main;
            const {main:weathermood} = data.weather[0];
            const {name} = data;
            const{speed} = data.wind;
            const {country,sunrise,sunset} = data.sys;
            
            const myNewWeatherInfo = {
              temp,
              humidity,
              temp_min,
              temp_max,
              weathermood,
              name,
              speed,
              country,
              sunrise,
              sunset,};

              setTempInfo(myNewWeatherInfo);
          } catch (error) {
            console.log(error)
          }
  };
useEffect(()=>{
getWeatherInfo();
},[]);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search" placeholder="  &nbsp; Search here ...." id="search"
          className="searchTerm"
          value={searchValue}
          onChange={(e)=> setSearchValue( e.target.value)} />
          <button className="searchbutton" type="button" onClick={getWeatherInfo} >
            Search
          </button>
        </div>
      </div>
{/* /////////////////////////////// */}
            <Card tempInfo={tempInfo}/>
    </>
  );
};

export default Main;
