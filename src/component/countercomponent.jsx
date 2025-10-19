import React, { useState } from "react";

const Countercomponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-header">
      <h1>Count is {count}</h1>
      <h1>Number is {count % 2 == 0 ? "Even" : "odd"}</h1>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        INCREAMENT
      </button>
      <button className="counter-button" onClick={() => {count>0 ?setCount(count - 1):<></>}}>
        DECREAMENT
      </button>

    </div>
  );
};

export default Countercomponent;
