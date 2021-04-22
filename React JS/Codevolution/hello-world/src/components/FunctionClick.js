import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      {/* in react onclick has to be camel case */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
