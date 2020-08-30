//@flow
import React, { useState } from "react";
const ws = new WebSocket("wss://panda-turtle.azurewebsites.net/ws");
const SendComponent = () => {
  const [time, setTime] = useState([]);

  ws.onopen = function (event) {};

  ws.onclose = console.warn;
  ws.onmessage = function (event) {
    setTime([event.data, ...time]);
  };
  ws.onerror = console.error;
  console.log("time", time);
  return (
    <ul>
      {time.map((data) => (
        <li>{data}</li>
      ))}
    </ul>
  );
};

export default SendComponent;
