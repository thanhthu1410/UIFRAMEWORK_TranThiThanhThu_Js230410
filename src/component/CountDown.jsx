import React from "react";
import Countdown from "react-countdown";


const CountDown = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="countdown-container">
        <h2>Deal Of The Week</h2>
        <p className="line"></p>
        <div className="time-container">
          <div className="time">
            0{days}
            <p>Days</p>
          </div>
          <div>
            0{hours}
            <p>Hours</p>
          </div>
          <div>
            {minutes}
            <p>Mins</p>
          </div>
          <div>
            {seconds}
            <p>Sec</p>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
    );
  };

  return (
    <Countdown date={new Date("2023-06-26T00:00:00")} renderer={renderer} />
  );
};

export default CountDown;