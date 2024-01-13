import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const renderLight = (lightColor) => (
    <div
      className={`light ${lightColor} ${color === lightColor ? "on" : ""}`}
      onClick={() => changeColor(lightColor)}
    ></div>
  );

  return (
    <div className="traffic-light">
      {renderLight("red")}
      {renderLight("yellow")}
      {renderLight("green")}
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.getElementById('app'));

export default TrafficLight;
