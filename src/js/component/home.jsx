import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function TrafficLight() {
  const [color, setColor] = useState("red");

  const changeColor = (newColor) => {
    setColor(newColor); 
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "on" : ""}`}
        onClick={() => changeColor("red")}
      ></div>
      <div
        className={`light yellow ${color === "yellow" ? "on" : ""}`}
        onClick={() => changeColor("yellow")}
      ></div>
      <div
        className={`light green ${color === "green" ? "on" : ""}`}
        onClick={() => changeColor("green")}
      ></div>
    </div>
  );
}

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default TrafficLight;
