import React, { useState } from "react";

function Test(props) {
  let [number, setNumber] = useState(0);

  const addValue = () => {
    number += 1;
    setNumber(number);
  };

  const subValue = () => {
    number -= 1;
    setNumber(number);
  };
  return (
    <div>
      This is Test component
      <h3>{props.name}</h3>
      <h2>{number}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={subValue}>Sub</button>
    </div>
  );
}
export default Test;
