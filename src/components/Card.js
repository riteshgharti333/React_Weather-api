import React, { useEffect } from "react";

const Card = ({ tempInfo }) => {
  let ritesh = new Date().toLocaleTimeString();
  const [weatherState, setWeatherState] = React.useState("");
  const {
    temp,
    humidity,
    temp_min,
    temp_max,
    weathermood,
    name,
    speed,
    country,
    sunrise,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("./image/cloud.png");
          break;
        case "Haze":
          setWeatherState("./image/haze.png");
          break;
        case "Mist":
          setWeatherState("./image/fog.png");
          break;
        case "Rain":
          setWeatherState("./image/rainy.png");
          break;
        case "clear":
          setWeatherState("./image/sun.png");
          break;
        default:
          setWeatherState("./image/sunny.png");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;

  let time = sunrise;
  let settime = new Date(time * 1000);
  let settimestr = `${settime.getHours()} : ${settime.getMinutes()}`;

  return (
    <>
      <div className="container">
        <div className="name">
          <ul>
            <li className="date">DATE : {new Date().toLocaleString()}</li>
            <li>
              {name}__{country}
            </li>
            <li className="time">TIME : {ritesh}</li>
          </ul>
        </div>
        <div className="main">
          {/* ///////////// tempreture  */}
          <div className="weather-icon">
            <h1 className="wmood">{weathermood}</h1>
            <img src={weatherState} alt="" />
            <h1 className="temp">{temp}&deg;C</h1>
          </div>
          {/* ///////////////// himdity */}
          <div className="indication">
            <div className=" type humidity">
              <img src="./image/humidity.png" alt="" />
              <h1 className="text">humidity</h1>
              <p>{humidity}%</p>
            </div>
            <div className=" type wind">
              <img src="./image/wind.png" alt="wind" />
              <h1 className="wind-text">wind</h1>
              <p>{speed} KM/H</p>
            </div>
            <div className=" type high-temp">
              <img src="./image/hot.png" alt="hot" />
              <h1 className="text maxtemp">max temp</h1>
              <p>{temp_max}&deg;C</p>
            </div>
            <div className=" type low-temp">
              <img src="./image/temperature.png" alt="lowtemp" />
              <h1 className="text">min temp</h1>
              <p className="mintemp">{temp_min}&deg;C</p>
            </div>
            <div className="type sunrise">
              <img src="./image/sunset.png" alt="sunset" />
              <h1 className="sunrise">sun rise</h1>
              <p className="aalo">{settimestr} AM</p>
            </div>
            <div className="type sun-rise">
              <img src="./image/sun.png" alt="sunrise" />
              <h1 className="sunset">sun set</h1>
              <p className="aalo">{timeStr} PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
