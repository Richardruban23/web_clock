import React, { useState } from "react";

function App() {
  var time;
  time = new Date().toLocaleTimeString();
  console.log(time);
  const [ntime, setntime] = useState(time);

  setInterval(function () {
    time = new Date().toLocaleTimeString();
    setntime(time);
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
