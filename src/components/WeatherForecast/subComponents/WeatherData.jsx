import WeatherIcon from "./WeatherIcon";


const WeatherData = (props) => {
  return (
    <>
      <h2>{props.day}</h2>

       <WeatherIcon img={props.img} />

      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>

      <p>
        <span>time: </span>
        {props.time}
      </p>
    </>
  );
};

export default WeatherData;
