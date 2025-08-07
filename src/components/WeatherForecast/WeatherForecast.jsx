import "./WeatherForecast.css";
import WeatherData from "./subComponents/WeatherData";

function WeatherForecast(props) {
  return (
    <>

      <div className="weather">
      
        <WeatherData day={props.day.day} img={props.day.img} conditions={props.day.conditions} time={props.day.time}/>
       
       
      </div>
    </>
  );
}

export default WeatherForecast;
